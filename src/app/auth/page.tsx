"use client";
import { Card } from "@/components/ui/card";
import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import SigninPage from "./components/signin";
import SignupPage from "./components/signup";
import { useLocale, useTranslations } from "next-intl";
import LanguageMenu from "@/components/languages-menu";

export interface IAuthPageProps {}

export default function AuthPage({}: IAuthPageProps) {
 const t = useTranslations("auth");
 const local = useLocale();
 const [tabView, setTabView] = React.useState("Signin");
 return (
  <div className="h-svh bg_yt">
   <nav className="flex justify-end items-center w-full p-3 ">
    <LanguageMenu />
   </nav>

   <div className=" grid grid-cols-1 h-[600px] sm:grid-cols-2 px-2  justify-center items-center ">
    <div className=" col-span-1 flex flex-col justify-start items-center gap-5 ">
     <h1
      className={`text-3xl text-center ${
       local === "en" ? " font-exo" : "font-cairo"
      } font-semibold w-full max-w-md`}
     >
      <span className=" font-extrabold text-3xl text-yellow-500">
       {t("Welcome")}{" "}
      </span>{" "}
      {t("main_title")}
     </h1>
     <h2
      className={`text-2xl text-center ${
       local === "en" ? " font-exo" : "font-cairo"
      } font-semibold w-full max-w-md`}
     >
      {t("description")}
     </h2>
    </div>
    <div className=" flex justify-center items-center text-center col-span-1 w-full ">
     <Card className="w-full p-5 flex justify-center items-center max-w-lg  ">
      <Tabs value={tabView} className="w-[400px] ">
       <TabsList className="flex gap-1 bg-white mb-5 justify-center items-center ">
        <TabsTrigger  asChild value="Signin">
         <Button
          onClick={() => {
           setTabView("Signin");
          }}
          className="w-full"
         >
          {t("signIn.title")}
         </Button>
        </TabsTrigger>
        <TabsTrigger  asChild value="Signup">
         <Button
          onClick={() => {
           setTabView("Signup");
          }}
          className={`w-full `}
         >
          {t("signUp.title")}
         </Button>
        </TabsTrigger>
       </TabsList>
       <TabsContent value="Signin">
        <SigninPage />
       </TabsContent>
       <TabsContent value="Signup">
        <SignupPage fun={setTabView} />
       </TabsContent>
      </Tabs>
     </Card>
    </div>
   </div>
  </div>
 );
}
