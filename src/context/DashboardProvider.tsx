"use client";

import { createContext, useContext, useState } from "react";

export interface IDashboardProvideeProps {
 children: React.ReactNode;
}

const DashboardStore = createContext<any>(null);
export const DashboardProvider = ({ children }: IDashboardProvideeProps) => {
    const [open  , setOpen] = useState(false)
 return (
  <DashboardStore.Provider value={{open  , setOpen}}>
    {children}
  </DashboardStore.Provider>
 );
};

const useDashboardProvider = () => {
 return useContext(DashboardStore);
};
export default useDashboardProvider;
