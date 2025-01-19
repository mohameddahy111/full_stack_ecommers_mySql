import * as React from "react";
import { Button } from "../ui/button";
import {
 Sheet,
 SheetContent,
 SheetDescription,
 SheetHeader,
 SheetTitle,
 SheetTrigger
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

export interface IMobileSidebarProps {}

export default function MobileSidebar({}: IMobileSidebarProps) {
 return (
  <Sheet>
   <SheetTrigger asChild>
    <Button variant={"secondary"} className="  size-10 shadow-md rounded-full">
     <MenuIcon className=" size-5" />
    </Button>
   </SheetTrigger>
   <SheetContent>
    <SheetHeader>
     <SheetTitle>Are you absolutely sure?</SheetTitle>
     <SheetDescription>
      This action cannot be undone. This will permanently delete your account
      and remove your data from our servers.
     </SheetDescription>
    </SheetHeader>
   </SheetContent>
  </Sheet>
 );
}
