"use client";

import useDashboardProvider from "@/context/DashboardProvider";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "../ui/separator";
import {  LogOutIcon } from "lucide-react";
import { dashboardSidebar } from "@/helper/data";
import { useLocale, useTranslations } from "next-intl";
import {
 Tooltip,
 TooltipContent,
 TooltipProvider,
 TooltipTrigger
} from "@/components/ui/tooltip";
import { Button } from "../ui/button";
import BageComponent from "../bage-component";

export function DashSidebar() {
 const { open } = useDashboardProvider();
 const t = useTranslations();
 const local = useLocale();
 return (
  <div
   className={`${
    open ? "w-[250px] dash_open " : "w-[60px] dash_close"
   }  bg-white    hh pb-5 `}
  >
   <nav>
    <div
     className={`pt-1 flex w-full  items-center gap-1 ${
      !open ? " justify-center" : "justify-start"
     } transition-all duration-500`}
    >
     <Image
      className=" active:shadow-sm shadow-md col-span-1 items-center rounded-full"
      src="https://i.pinimg.com/474x/19/8e/5a/198e5a2f3158fc578cb8def84a7dacd7.jpg"
      alt="logo"
      width={50}
      height={50}
     />
     <h2
      className={`${!open ? " hidden" : " text-[#203040] text-2xl font-bold"}`}
     >
      Dashboard
     </h2>
    </div>
    <Separator className="my-2.5" />
   </nav>

   <div className=" flex flex-col justify-between h-full">
    <ul className="flex flex-col gap-3  p-2  hh overflow-y-auto">
     {dashboardSidebar.map((ele: any, i: number) => (
      <TooltipProvider key={i}>
       <Tooltip>
        <TooltipTrigger asChild className=" hvr-float-shadow">
         {ele.title === "dashboard_side_bar.side_bar.Notifications" ||
         ele.title === "dashboard_side_bar.side_bar.Orders" ? (
          <li
           className={`${
            !open ? "shadow-md" : "shadow-sm"
           } rounded-md bg-slate-300 relative`}
          >
           <Link
            href={ele.href}
            className={`${
             open ? " justify-start" : " justify-center"
            } flex w-full items-center gap-2 rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0`}
           >
            {ele.icon}
            <span className={`${!open && "hidden"}`}>{t(ele.title)} </span>
           </Link>
           <BageComponent conut={1}/>
          </li>
         ) : (
          <li
           className={`${
            !open ? "shadow-md" : "shadow-sm"
           } rounded-md bg-slate-300`}
          >
           <Link
            href={ele.href}
            className={`${
             open ? " justify-start" : " justify-center"
            } flex w-full items-center gap-2 rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0`}
           >
            {ele.icon}
            <span className={`${!open && "hidden"}`}>{t(ele.title)} </span>
           </Link>
          </li>
         )}
        </TooltipTrigger>
        <TooltipContent align="start" side={local === "en" ? "right" : "left"}>
         <span>{t(ele.title)}</span>
        </TooltipContent>
       </Tooltip>
      </TooltipProvider>
     ))}
    </ul>
    <ul className=" px-2">
     <li
      className={`${!open ? "shadow-md" : "shadow-sm"} rounded-md bg-slate-300`}
     >
      <Button
       className={`${
        open ? " justify-start" : " justify-center"
       } flex w-full items-center gap-2 rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0`}
      >
       <LogOutIcon className="size-7" />

       <span className={`${!open && "hidden"}`}>
        {t("dashboard_side_bar.side_bar.logout")}{" "}
       </span>
      </Button>
     </li>
    </ul>
   </div>
  </div>
 );
}
