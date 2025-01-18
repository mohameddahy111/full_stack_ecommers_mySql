import * as React from "react";
import HeroTable from "./hero-table";
import { TableCell, TableRow } from "../ui/table";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Search } from "lucide-react";

export interface IEmployeeTableProps {}

export default function EmployeeTable({}: IEmployeeTableProps) {
 return (
  <div className="w-full p-2 flex gap-5 flex-col pt-3  bg-white rounded-md shadow-md">
    <div className="flex justify-between items-center w-full">
        <div className=" flex gap-1 items-center ">
        <Input  className="w-96 " placeholder="Search phone or email"/>
        <Button title="Search"  className="h-8 w-8 p-0 rounded-full">
            <Search className="h-4 w-4" />
        </Button>

        </div>
        <Button>
            <span className="text-sm  ">
                New Employee
            </span>
        </Button>
    </div>
   <HeroTable
    list={[
     "tables.employees.#",
     "tables.employees.name",
     "tables.employees.email",
     "tables.employees.phone",
     "tables.employees.role",
     "tables.employees.actions"
    ]}
   >
    <TableRow>
     <TableCell align="center">1</TableCell>
     <TableCell align="center">Mohamed Dahy</TableCell>
     <TableCell align="center">mohameddahy@gmail.com</TableCell>
     <TableCell align="center">+923123123123</TableCell>
     <TableCell align="center">admin</TableCell>
     <TableCell align="center">Edit / Delete</TableCell>
    </TableRow>
    <TableRow>
     <TableCell align="center">1</TableCell>
     <TableCell align="center">Mohamed Dahy</TableCell>
     <TableCell align="center">mohameddahy@gmail.com</TableCell>
     <TableCell align="center">+923123123123</TableCell>
     <TableCell align="center">admin</TableCell>
     <TableCell align="center">Edit / Delete</TableCell>
    </TableRow>
    <TableRow>
     <TableCell align="center">1</TableCell>
     <TableCell align="center">Mohamed Dahy</TableCell>
     <TableCell align="center">mohameddahy@gmail.com</TableCell>
     <TableCell align="center">+923123123123</TableCell>
     <TableCell align="center">admin</TableCell>
     <TableCell align="center">Edit / Delete</TableCell>
    </TableRow>
    <TableRow>
     <TableCell align="center">1</TableCell>
     <TableCell align="center">Mohamed Dahy</TableCell>
     <TableCell align="center">mohameddahy@gmail.com</TableCell>
     <TableCell align="center">+923123123123</TableCell>
     <TableCell align="center">admin</TableCell>
     <TableCell align="center">Edit / Delete</TableCell>
    </TableRow>
    <TableRow>
     <TableCell align="center">1</TableCell>
     <TableCell align="center">Mohamed Dahy</TableCell>
     <TableCell align="center">mohameddahy@gmail.com</TableCell>
     <TableCell align="center">+923123123123</TableCell>
     <TableCell align="center">admin</TableCell>
     <TableCell align="center">Edit / Delete</TableCell>
    </TableRow>
    <TableRow>
     <TableCell align="center">1</TableCell>
     <TableCell align="center">Mohamed Dahy</TableCell>
     <TableCell align="center">mohameddahy@gmail.com</TableCell>
     <TableCell align="center">+923123123123</TableCell>
     <TableCell align="center">admin</TableCell>
     <TableCell align="center">Edit / Delete</TableCell>
    </TableRow>
    <TableRow>
     <TableCell align="center">1</TableCell>
     <TableCell align="center">Mohamed Dahy</TableCell>
     <TableCell align="center">mohameddahy@gmail.com</TableCell>
     <TableCell align="center">+923123123123</TableCell>
     <TableCell align="center">admin</TableCell>
     <TableCell align="center">Edit / Delete</TableCell>
    </TableRow>
    <TableRow>
     <TableCell align="center">1</TableCell>
     <TableCell align="center">Mohamed Dahy</TableCell>
     <TableCell align="center">mohameddahy@gmail.com</TableCell>
     <TableCell align="center">+923123123123</TableCell>
     <TableCell align="center">admin</TableCell>
     <TableCell align="center">Edit / Delete</TableCell>
    </TableRow>
    <TableRow>
     <TableCell align="center">1</TableCell>
     <TableCell align="center">Mohamed Dahy</TableCell>
     <TableCell align="center">mohameddahy@gmail.com</TableCell>
     <TableCell align="center">+923123123123</TableCell>
     <TableCell align="center">admin</TableCell>
     <TableCell align="center">Edit / Delete</TableCell>
    </TableRow>
    <TableRow>
     <TableCell align="center">1</TableCell>
     <TableCell align="center">Mohamed Dahy</TableCell>
     <TableCell align="center">mohameddahy@gmail.com</TableCell>
     <TableCell align="center">+923123123123</TableCell>
     <TableCell align="center">admin</TableCell>
     <TableCell align="center">Edit / Delete</TableCell>
    </TableRow>
    <TableRow>
     <TableCell align="center">1</TableCell>
     <TableCell align="center">Mohamed Dahy</TableCell>
     <TableCell align="center">mohameddahy@gmail.com</TableCell>
     <TableCell align="center">+923123123123</TableCell>
     <TableCell align="center">admin</TableCell>
     <TableCell align="center">Edit / Delete</TableCell>
    </TableRow>
    <TableRow>
     <TableCell align="center">1</TableCell>
     <TableCell align="center">Mohamed Dahy</TableCell>
     <TableCell align="center">mohameddahy@gmail.com</TableCell>
     <TableCell align="center">+923123123123</TableCell>
     <TableCell align="center">admin</TableCell>
     <TableCell align="center">Edit / Delete</TableCell>
    </TableRow>
    <TableRow>
     <TableCell align="center">1</TableCell>
     <TableCell align="center">Mohamed Dahy</TableCell>
     <TableCell align="center">mohameddahy@gmail.com</TableCell>
     <TableCell align="center">+923123123123</TableCell>
     <TableCell align="center">admin</TableCell>
     <TableCell align="center">Edit / Delete</TableCell>
    </TableRow>
    <TableRow>
     <TableCell align="center">1</TableCell>
     <TableCell align="center">Mohamed Dahy</TableCell>
     <TableCell align="center">mohameddahy@gmail.com</TableCell>
     <TableCell align="center">+923123123123</TableCell>
     <TableCell align="center">admin</TableCell>
     <TableCell align="center">Edit / Delete</TableCell>
    </TableRow>
    <TableRow>
     <TableCell align="center">1</TableCell>
     <TableCell align="center">Mohamed Dahy</TableCell>
     <TableCell align="center">mohameddahy@gmail.com</TableCell>
     <TableCell align="center">+923123123123</TableCell>
     <TableCell align="center">admin</TableCell>
     <TableCell align="center">Edit / Delete</TableCell>
    </TableRow>
    <TableRow>
     <TableCell align="center">1</TableCell>
     <TableCell align="center">Mohamed Dahy</TableCell>
     <TableCell align="center">mohameddahy@gmail.com</TableCell>
     <TableCell align="center">+923123123123</TableCell>
     <TableCell align="center">admin</TableCell>
     <TableCell align="center">Edit / Delete</TableCell>
    </TableRow>
    <TableRow>
     <TableCell align="center">1</TableCell>
     <TableCell align="center">Mohamed Dahy</TableCell>
     <TableCell align="center">mohameddahy@gmail.com</TableCell>
     <TableCell align="center">+923123123123</TableCell>
     <TableCell align="center">admin</TableCell>
     <TableCell align="center">Edit / Delete</TableCell>
    </TableRow>
    <TableRow>
     <TableCell align="center">1</TableCell>
     <TableCell align="center">Mohamed Dahy</TableCell>
     <TableCell align="center">mohameddahy@gmail.com</TableCell>
     <TableCell align="center">+923123123123</TableCell>
     <TableCell align="center">admin</TableCell>
     <TableCell align="center">Edit / Delete</TableCell>
    </TableRow>
   </HeroTable>
  </div>
 );
}
