import * as React from 'react';

export interface IBageComponentProps {
    conut : number
}

export default function BageComponent ({conut}: IBageComponentProps) {
  return (
    <div className={`${conut > 0 ? "" : "hidden"} shadow-md  flex justify-center items-center -top-2 -end-1 size-5 rounded-full  bg-yellow-500 absolute`}>
    <span className=" text-[10px]">{conut}</span>
   </div>
);
}
