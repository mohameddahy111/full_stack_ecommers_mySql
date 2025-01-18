import HeroTitle from '@/components/client/hero-title';
import ClientsTable from '@/components/dashboard/clients-table';
import * as React from 'react';

export interface IClientsPageProps {
}

export default function ClientsPage ({}: IClientsPageProps) {
  return (
    <div className='w-full flex flex-col justify-start items-start gap-5 '>
     <HeroTitle title='dashboard_side_bar.side_bar.Clients'/>
     <div className=" w-full max-h-[550px] overflow-y-auto  ">
        <ClientsTable clients={[]}/>
     </div>
    </div>
  );
}
