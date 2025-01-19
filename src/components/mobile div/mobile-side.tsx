"use client";

import * as React from "react";
import { Button } from "../ui/button";
import {
 Sheet,
 SheetClose,
 SheetContent,
 SheetDescription,
 SheetHeader,
 SheetTitle,
 SheetTrigger
} from "@/components/ui/sheet";
import { ChevronLeft, ChevronRight, MenuIcon } from "lucide-react";
import UserMenu from "../client/user-menu";
import { useLocale, useTranslations } from "next-intl";
import { mainMenu } from "@/helper/data";
import { useRouter } from "next/navigation";
import LanguageMenu from "../languages-menu";

export interface IMobileSidebarProps {}

export default function MobileSidebar({}: IMobileSidebarProps) {
 const loacal = useLocale();
 const t = useTranslations();
 const router = useRouter();
 const [isOpen, setIsOpen] = React.useState(false);
 return (
  <Sheet open={isOpen} onOpenChange={setIsOpen}>
   <SheetTrigger asChild>
    <Button variant={"secondary"} className="  size-10 shadow-md rounded-full">
     <MenuIcon className=" size-5" />
    </Button>
   </SheetTrigger>
   <SheetContent>
    <SheetHeader>
        <SheetTitle />
       
       
    </SheetHeader>
     <div className={`flex justify-between items-center gap-2  mt-5`}>
      <LanguageMenu/>
      <UserMenu />
     </div>
    <div className="">
     <div className=" flex-col flex  gap-3 mt-5 ">
      {mainMenu.map((item: { title: string; href: string }, index: number) => (
       <Button
        onClick={() => {
         router.push(item.href);
         setIsOpen(false);
        }}
        key={index}
        className=" hvr-float-shadow justify-between flex w-full items-center rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0"
       >
        {t(item.title)}
        {loacal === "en" ? (
         <ChevronRight className="size-5 ml-2" />
        ) : (
         <ChevronLeft className="size-5 mr-2" />
        )}
       </Button>
      ))}
     </div>
    </div>
   </SheetContent>
  </Sheet>
 );
}
