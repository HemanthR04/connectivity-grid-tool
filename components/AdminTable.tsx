import React from 'react'
import { data } from '@/constants/data'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

type Props = {
  application_name:string,
    att_id:string,
    role:string
}



const AdminTable = (props :Props) => {

   
  return (
    
    <Table>
  <TableCaption>A list of Application Admins</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Name</TableHead>
      <TableHead>ATT ID</TableHead>
      <TableHead className="text-right">Role</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
      {
        data.map((val)=>(
          val.owners.map((owner)=>(
            <TableRow>
            <TableCell className="font-medium">{owner.name}</TableCell>
            <TableCell>{owner.att_id}</TableCell>
            <TableCell className="text-right">{owner.role}</TableCell>
          </TableRow>
          ))
        ))
      }
   
  </TableBody>
</Table>
  )
}

export default AdminTable