import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import PageTitle from "@/components/PageTitle"
import { Textarea } from "@/components/ui/textarea"
import Searchbar from "@/components/shared/Searchbar"
import { fetchAllUsers, fetchUsers } from "@/lib/actions/user.action"

export default function page() {

    const userInfo = fetchAllUsers();
    console.log(userInfo)
    return (
        <div className="w-full ">

            <PageTitle title="Add Application" />
            <div className="w-full h-full flex items-center justify-center mt-[100px]">


                <Card className="w-[350px]">
                    <CardHeader>
                        <CardTitle>Create Application</CardTitle>
                        <CardDescription>Create your new project in one-click.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" placeholder="Name of your app" />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="name">Description</Label>
                                    <Textarea></Textarea>

                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="framework">Primary Admin</Label>

                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button variant="outline">Cancel</Button>
                        <Button>Deploy</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}
