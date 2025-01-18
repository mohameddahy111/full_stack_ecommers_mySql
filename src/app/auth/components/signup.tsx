"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTranslations } from "next-intl";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import LoadingBtn from "@/components/loading-btn";
import { AddUser } from "@/app/actions";
import { toast } from "sonner";

export interface ISignupPageProps {
  fun:Function
}

export default function SignupPage({fun}: ISignupPageProps) {
 const t = useTranslations("auth");
 const g = useTranslations()
 const formik = useFormik({
  validationSchema: Yup.object().shape({
   full_Name: Yup.string().required(t("full_name_required")),
   email: Yup.string().email(t("email_invalid")).required(t("email_required")),
   password: Yup.string()
    .min(6, t("password_invalid"))
    .required(t("password_required")),
   cpassword: Yup.string()
    .oneOf([Yup.ref("password")], t("confirm_password_invalid"))
    .required(t("confirm_password_required")),
   phone: Yup.string().required(t("phone_required"))
  }),
  initialValues: {
   full_Name: "",
   email: "",
   password: "",
   cpassword: "",
   phone: "",
   terms: false
  },
  onSubmit: async (values) => {
   const user = {
    full_Name: values.full_Name,
    email: values.email,
    password: values.password,
    phone: values.phone
   };
   await AddUser(user)
    .then((res) => {
     if (res.status === 201) {
      toast.success(g(`success.${res.message}`));
      formik.resetForm();
      fun('Signin')     
     }
    })
    .catch((err) => {
     toast.error(g(`error.${err.message}`));
    });
  }
 });
 return (
  <form onSubmit={formik.handleSubmit}>
   <div className=" grid grid-cols-2  w-full gap-4">
    <div className=" flex flex-col gap-2 justify-start items-start w-full ">
     <Label className="capitalize">{t("Full_Name")}</Label>
     <Input
      className="w-full"
      type="text"
      name="full_Name"
      placeholder={t("Full_Name_hint")}
      onChange={formik.handleChange}
      value={formik.values.full_Name}
      onBlur={formik.handleBlur}
     />
     {formik.touched.full_Name && formik.errors.full_Name && (
      <p className="text-red-500 text-[12px]">{formik.errors.full_Name}</p>
     )}
    </div>
    <div className=" flex flex-col gap-2 justify-start items-start w-full ">
     <Label className="capitalize">{t("phone")}</Label>
     <Input
      className="w-full"
      type="tel"
      name="phone"
      placeholder={t("phone_hint")}
      maxLength={11}
      value={formik.values.phone}
      onChange={formik.handleChange}
     />
     {formik.touched.phone && formik.errors.phone && (
      <p className="text-red-500 text-[12px]">{formik.errors.phone}</p>
     )}
    </div>
    <div className=" col-span-2 flex flex-col gap-2 justify-start items-start w-full ">
     <Label className="capitalize">{t("email")}</Label>
     <Input
      className="w-full"
      type="email"
      name="email"
      placeholder={t("email_hint")}
      onChange={formik.handleChange}
      value={formik.values.email}
     />
     {formik.touched.email && formik.errors.email && (
      <p className="text-red-500 text-[12px]">{formik.errors.email}</p>
     )}
    </div>

    <div className=" flex flex-col gap-2 justify-start items-start w-full ">
     <Label className="capitalize">{t("password")}</Label>
     <Input
      className="w-full"
      type="password"
      name="password"
      placeholder={t("password_hint")}
      security="password"
      autoComplete="current-password"
      onChange={formik.handleChange}
      value={formik.values.password}
     />
     {formik.touched.password && formik.errors.password && (
      <p className="text-red-500 text-[12px]">{formik.errors.password}</p>
     )}
    </div>
    <div className=" flex flex-col gap-2 justify-start items-start w-full ">
     <Label className="capitalize">{t("confirm_password")}</Label>
     <Input
      className="w-full"
      type="password"
      name="cpassword"
      placeholder={t("confirm_password_hint")}
      security="password"
      autoComplete="current-password"
      onChange={formik.handleChange}
      value={formik.values.cpassword}
     />
     {formik.touched.cpassword && formik.errors.cpassword && (
      <p className="text-red-500 text-[12px]">{formik.errors.cpassword}</p>
     )}
    </div>
    <div className=" col-span-2 gap-2 flex justify-start">
     <Checkbox
      id="terms"
      onCheckedChange={(v) => formik.setFieldValue("terms", v)}
     />
     <Label htmlFor="terms" className=" capitalize ">
      {t("signUp.read")}{" "}
      <Link className="text-blue-500 underline" href={"/"}>
       {t("signUp.terms")}
      </Link>{" "}
     </Label>
    </div>
    <div className=" col-span-2 w-full">
     <LoadingBtn
      isLoading={formik.isSubmitting}
      text={t("signUp.title")}
      className="w-full "
      disabled={!formik.values.terms || formik.isSubmitting}
     />
    </div>
   </div>
  </form>
 );
}
