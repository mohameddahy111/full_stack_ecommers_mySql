import HomeNave from "@/components/client/home-nav";
import * as React from "react";

export interface IClientLayoutProps {
 children: React.ReactNode;
}

export default function ClientLayout({ children }: IClientLayoutProps) {
 return (
  <main>
   <HomeNave />

   {children}
  </main>
 );
}
