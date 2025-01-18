import * as React from "react";
import {
 Table,
 TableBody,
 TableCaption,
 TableCell,
 TableFooter,
 TableHead,
 TableHeader,
 TableRow
} from "@/components/ui/table";
import HeroPagination from "../hero-pagination";
import { useTranslations } from "next-intl";

export interface IHeroTableProps {
 list: string[];
 children: React.ReactNode;
}

export default function HeroTable({ list, children }: IHeroTableProps) {
 const t = useTranslations();
 return (
  <Table className="w-full ">
   <TableHeader className="">
    <TableRow>
     {list.map((item, index) => {
      return (
       <TableHead className="font-medium text-center font-cairo " key={index}>
        {t(item)}
       </TableHead>
      );
     })}
    </TableRow>
   </TableHeader>
   <TableBody>{children}</TableBody>
   <TableFooter>
    <TableRow>
     <TableCell colSpan={list.length}>
      <HeroPagination />
     </TableCell>
    </TableRow>
   </TableFooter>
  </Table>
 );
}
