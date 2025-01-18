import { Login } from "@/app/actions";
import LoadingBtn from "@/components/loading-btn";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormik } from "formik";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as React from "react";
import { toast } from "sonner";
import * as Yup from "yup";

export interface ISigninPageProps {}

export default function SigninPage({}: ISigninPageProps) {
 const t = useTranslations("auth");
 const g = useTranslations();
 const router = useRouter();
 const formik = useFormik({
  initialValues: {
   phone: "",
   password: ""
  },
  validationSchema: Yup.object().shape({
   phone: Yup.string().required(t("phone_required")),
   password: Yup.string()
    .min(6, t("password_invalid"))
    .required(t("password_required"))
  }),
  onSubmit: async (values) => {
   await Login(values)
    .then((res) => {
     if (res?.status === 200) {
      toast.success(g(`success.${res.message}`));
      router.push("/");
     }
    })
    .catch((err) => {
     if (err.message === "NEXT_REDIRECT") {
      return;
     } else {
      toast.error(g(`error.${err.message}`));
     }
    });
  }
 });
 return (
  <form onSubmit={formik.handleSubmit}>
   <div className="flex flex-col items-center justify-center w-full gap-5">
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
    <div className=" w-full flex justify-start">
     <Link
      href="/auth/forgot-password"
      className="text-sm text-muted-foreground hover:text-blue-500"
     >
      {t("signIn.forgotPassword")}
     </Link>
    </div>
    <div className=" w-full">
     <LoadingBtn
      isLoading={formik.isSubmitting}
      className="w-full"
      text={t("signIn.title")}
      disabled={formik.isSubmitting}
     />
    </div>
   </div>
  </form>
 );
}
