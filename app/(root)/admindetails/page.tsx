'use client'
import PageTitle from '@/components/PageTitle'
import { SelectApplications } from '@/components/SelectApplications'
import React, { ChangeEvent } from 'react'

import AdminCard from '@/components/cards/AppAdminCard'
import { data } from '@/constants/data'
import { useState } from 'react';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import AdminTable from '@/components/AdminTable'
type Props = {}

export default function page({ }: Props) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (value: string) => {

        setSearchTerm(value);
    }

    return (
        <>

            <PageTitle title="Admins" />
            <div className='flex flex-col item-start'>

                <Select onValueChange={handleChange}>
                    <SelectTrigger className="w-[280px] mt-[40px]">
                        <SelectValue placeholder="Select an Application" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {
                                data.map((app) => (
                                    < SelectItem key={app.application_name} value={app.application_name} > {app.application_name}</SelectItem>
                                ))
                            }

                        </SelectGroup>
                    </SelectContent>
                </Select >

                <Table>
                    <TableCaption>A list of Application Admins</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Name</TableHead>
                            <TableHead>ATTID</TableHead>
                            <TableHead className="text-right">Role</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            data
                                .filter((val) => {
                                    if (searchTerm == "") {
                                        return "";
                                    } else if (val.application_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                                        return val;
                                    }
                                })
                                .map((val) => {
                                    return (
                                        <>
                                            {
                                                val.owners.map((owner) => (
                                                    <TableRow key={owner.att_id}>
                                                        <TableCell className="font-medium">{owner.name}</TableCell>
                                                        <TableCell>{owner.att_id}</TableCell>
                                                        <TableCell className="text-right">{owner.role}</TableCell>
                                                    </TableRow>
                                                ))
                                            }

                                        </>
                                    )
                                })
                        }


                    </TableBody>
                </Table>


            </div>

        </>

    )
}