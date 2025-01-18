import { DashboardProvider } from "@/context/DashboardProvider";
import * as React from "react";
import { DashSidebar } from "@/components/dashboard/dash-sidebar";
import DashPagesView from "@/components/dashboard/dash-pages-veiw";

export interface IAdminLayoutProps {
 children: React.ReactNode;
}

export default async function AdminLayout({ children }: IAdminLayoutProps) {
 return (
   <DashboardProvider>
    <div className=" w-full hh flex bg-slate-200 ">
     <DashSidebar/>
    <DashPagesView>
      {children}

    </DashPagesView>
    </div>
    </DashboardProvider>
 );
}
