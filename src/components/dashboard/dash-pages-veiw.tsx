"use client";

import useDashboardProvider from "@/context/DashboardProvider";
import * as React from "react";
import { Button } from "../ui/button";
import {
 ChevronLeft,
 ChevronRight,
 LayoutDashboard,
} from "lucide-react";
import { useLocale } from "next-intl";
import { Separator } from "@radix-ui/react-dropdown-menu";
import LanguageMenu from "../languages-menu";

export interface IDashPagesViewProps {
 children: React.ReactNode;
}

export default function DashPagesView({ children }: IDashPagesViewProps) {
 const { open, setOpen } = useDashboardProvider();
 const local = useLocale();
 return (
  <div className={`w-full bg-slate-100 hh`}>
   <nav className="flex justify-between items-center w-full h-16 px-4  bg-white shadow-sm">
    <Button
     onClick={() => {
      setOpen(!open);
     }}
     variant={"outline"}
     className="rounded-full size-10 hvr-float-shadow"
    >
     {open ? (
      local === "en" ? (
       <ChevronLeft className=" size-3 " />
      ) : (
       <ChevronRight className=" size-3" />
      )
     ) : (
      <LayoutDashboard className=" size-3 " />
     )}
    </Button>
    <div className="">
      <LanguageMenu/>
    </div>
   </nav>
   <Separator className=" bg-slate-900"/>
   <main className="p-2 hh overflow-y-auto bg-slate-100">{children}</main>
  </div>
 );
}
