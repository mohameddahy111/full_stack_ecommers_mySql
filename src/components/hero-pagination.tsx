import * as React from 'react';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
import { useLocale } from 'next-intl';
  

export interface IHeroPaginationProps {
}

export default function HeroPagination (props: IHeroPaginationProps) {
const local = useLocale()
  return (
<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious dir={local === "en" ? "ltr" : "rtl"} href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext dir={local === "en" ? "ltr" : "rtl"} href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>
  );
}
