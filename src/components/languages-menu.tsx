"use client";
import * as React from "react";
import {
 DropdownMenu,
 DropdownMenuContent,
 DropdownMenuItem,
 DropdownMenuTrigger
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import Image from "next/image";
import { useLocale } from "next-intl";
import { useCookiesNext } from 'cookies-next';
export interface ILanguageMenuProps {}

export default function LanguageMenu({}: ILanguageMenuProps) {
   const {setCookie}=useCookiesNext();
 const local = useLocale();
 function handlerLanguages(lang: string) {
  setCookie("locale", lang);
  window.location.reload();
 }

 return (
  <DropdownMenu>
   <DropdownMenuTrigger asChild>
    <Button className="hvr-wobble-horizontal flex justify-center items-center font-bold gap-2 text-inherit">
     <Image
      width={20}
      height={20}
      src={
       local === "en"
        ? "https://cdn.alweb.com/thumbs/egyptencyclopedia/article/fit710x532/%D8%B9%D9%84%D9%85-%D9%85%D8%B5%D8%B1-%D8%A3%D9%87%D9%85-%D8%A7%D9%84%D8%AD%D9%82%D8%A7%D8%A6%D9%82.jpg"
        : "https://vid.alarabiya.net/images/2018/09/03/0aec8175-3083-42d3-b1a0-f784b862740b/0aec8175-3083-42d3-b1a0-f784b862740b_16x9_1200x676.jfif"
      }
      alt="flag"
     />
     <p>{local === "en" ? "عربي" : "English"}</p>
    </Button>
   </DropdownMenuTrigger>

   <DropdownMenuContent>
    <DropdownMenuItem
     onClick={() => {
      handlerLanguages("en");
      document.body.dir = "ltr";
     }}
    >
     English
    </DropdownMenuItem>
    <DropdownMenuItem
     onClick={() => {
      handlerLanguages("ar");
      document.body.dir = "rtl";
     }}
    >
     عربي
    </DropdownMenuItem>
   </DropdownMenuContent>
  </DropdownMenu>
 );
}
