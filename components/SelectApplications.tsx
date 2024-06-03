'use client'
import { data } from '@/constants/data'

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import AdminCard from '@/components/cards/AppAdminCard'


import { ChangeEvent, useState } from 'react'
import AdminTable from './AdminTable'





export function SelectApplications() {
    const [selectOption, setselectOption] = useState("Select Application");
    const [searchTerm, setSearchTerm] = useState("");

    function handleSelect(e :ChangeEvent<HTMLInputElement>) {
        setselectOption(e.target.value);
        
        
    }

    return (
    <>
   
        <Select>
            <SelectTrigger value={selectOption} onChange={() => handleSelect} className="w-[280px] mt-[40px]">
                <SelectValue placeholder="Select an Application" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {
                        data.map((app) => (
                           < SelectItem key={app.application_name} value = {app.application_name} > { app.application_name }</SelectItem>
                ))
                     }

            </SelectGroup>
        </SelectContent>
        </Select >

        <p>
            {selectOption}
        </p>

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
                                    <AdminCard key={val.application_name}  owners={val.owners} />

                                )
                            })
                    }
        

        </>
    )
}
