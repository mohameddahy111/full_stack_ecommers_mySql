"use server";

import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { getToken } from "@/lib/jwt";
import { HandelError } from "@/lib/handerlError";
import { redirect } from "next/navigation";

export async function AthourLogin() {
 const userCookies = (await cookies()).get("login_token")?.value;
 if (!userCookies){
    redirect("/auth");
 }
}

export async function SetLanguage(lang: string) {
 (await cookies()).set("locale", lang);
}
export async function AddUser(user: any) {
 const isExiting = await prisma.users.findFirst({
  where: {
   OR: [
    {
     phone: user.phone
    },
    { email: user.email }
   ]
  }
 });
 if (isExiting) throw new HandelError(400, "isExiting_user_error");
 const hashedPassword = bcrypt.hashSync(user.password, 10);
 user.password = hashedPassword;
 const newUser = await prisma.users.create({
  data: user
 });
 if (newUser) {
  return {
   message: "add_user_success",
   status: 201
  };
 } else {
  throw new HandelError(400, "add_user_error");
 }
}
export async function Login(data: any) {
 const user = await prisma.users.findUnique({
  where: {
   phone: data.phone
  }
 });
 if (!user) throw new HandelError(404, "login_error");
 if (!user.password && user.role !== "user") redirect("/auth/create-password");
 if (!user.password && user.role === "user") {
  prisma.users.delete({
   where: {
    phone: data.phone
   }
  });
  return new HandelError(401, "delete_login_error");
 }
 if (user.password) {
  const isPasswordValid = bcrypt.compareSync(data.password, user.password);
  if (!isPasswordValid) throw new HandelError(404, "login_password_error");
  const token = getToken({ id: user.id, role: user.role });
 await prisma.users.update({
   where: {
    phone: data.phone
   },
   data: {
    last_Active: new Date().getTime(),
    active: true
   }
  });
  (await cookies()).set("login_token", token, { maxAge: 60 * 60 * 6 });
  if (user.role !== "user") {
   redirect("/dashboard");
  } else {
   return {
    message: "login_success",
    status: 200
   };
  }
 }
}

export async function UpdateUser(user: any) {
 if (user.password) {
  const hashedPassword = bcrypt.hashSync(user.password, 10);
  user.password = hashedPassword;
 }
 await prisma.users.update({
  where: {
   id: user.id
  },
  data: user
 });
 return {
  message: "User added successfully",
  status: 200
 };
}

export async function getUsers() {
 const users = await prisma.users.findMany({
  omit: {
   password: true
  }
 });
 console.log(users);
 return users;
}
