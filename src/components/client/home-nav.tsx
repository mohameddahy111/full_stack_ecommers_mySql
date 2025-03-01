"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import UserMenu from "./user-menu";
import { useTranslations } from "next-intl";
import { mainMenu } from "@/helper/data";
import LanguageMenu from "../languages-menu";
import MobileSidebar from "../mobile div/mobile-side";

export interface IHomeNaveProps {}

export default function HomeNave({}: IHomeNaveProps) {
 const t = useTranslations();
 return (
  // <nav className=" grid grid-cols-12  text-[#203040] p-6">
  //  <div className=" rounded-full">
  //   <Link href="/home" className="">
  //    <Image
  //     className=" active:shadow-sm shadow-md col-span-1 items-center rounded-full"
  //     src="https://i.pinimg.com/474x/19/8e/5a/198e5a2f3158fc578cb8def84a7dacd7.jpg"
  //     alt="logo"
  //     width={70}
  //     height={70}
  //    />
  //   </Link>
  //  </div>
  //  <div className=" col-span-11  shadow-md rounded-full bg-primary ">
  //   <div className=" grid grid-cols-12 translate-y-1/3">
  //    <div className="flex col-span-10 justify-center capitalize text-[#203040] items-center gap-10">
  //     {mainMenu.map((item: { title: string; href: string }, index: number) => {
  //      return (
  //       <Link
  //        key={index}
  //        href={item.href}
  //        className="hvr-float-shadow font-bold font-cairo text-inherit"
  //       >
  //        {t(item.title)}
  //       </Link>
  //      );
  //     })}
  //    </div>
  //    <div className=" flex justify-end   gap-3 col-span-2 pe-5">
  //      <LanguageMenu />
  //     <UserMenu />
  //    </div>
  //   </div>
  //  </div>
  // </nav>
  <nav className=" flex justify-between items-center gap-2  text-[#203040] p-6">
   <div className=" rounded-full">
    <Link href="/home" className="">
     <Image
      className=" active:shadow-sm shadow-md col-span-1 items-center rounded-full"
      src="https:i.pinimg.com/474x/19/8e/5a/198e5a2f3158fc578cb8def84a7dacd7.jpg"
      alt="logo"
      width={70}
      height={70}
     />
    </Link>
   </div>
   <div
    className={` sm:justify-center h-16 w-full justify-end pe-4 flex items-center bg-primary shadow-md rounded-full`}
   >
    <div className=" sm:hidden flex items-center gap-3 ">
     <LanguageMenu />
     <MobileSidebar />
    </div>
    <div className=" sm:flex hidden justify-between capitalize text-[#203040] w-full items-center gap-10">
      <div className=" flex items-center gap-10  justify-center w-full">
     {mainMenu.map((item: { title: string; href: string }, index: number) => {
      return (
       <Link
        key={index}
        href={item.href}
        className="hvr-float-shadow font-bold font-cairo text-inherit"
       >
        {t(item.title)}
       </Link>
      );
     })}

      </div>
     <div className=" flex items-center justify-end gap-3 "> 
      <LanguageMenu />
      <UserMenu />
     </div>
    </div>
   </div>
  </nav>
 );
}
