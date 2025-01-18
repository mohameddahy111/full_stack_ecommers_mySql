import EmployeeTable from '@/components/client/employee-table';
import HeroTitle from '@/components/client/hero-title';
import { TableCell, TableRow } from '@/components/ui/table';
import * as React from 'react';

export interface IEmployeePageProps {
}

export default async function EmployeePage (props: IEmployeePageProps) {

  return (
    <div className=' flex flex-col justify-start items-start gap-5 '>
    <HeroTitle  title='dashboard_side_bar.side_bar.Employee'/>
    <div className=" w-full max-h-[550px] overflow-y-auto  ">
    
      <EmployeeTable/>
   
    </div>
    </div>
  );
}
