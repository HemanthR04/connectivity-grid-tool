import { connectToDB } from "@/lib/db";
import Application from "@/lib/models/application.model";
import { NextResponse } from "next/server";

export async function GET() {
    await connectToDB();
    const apps = await Application.find();
    return NextResponse.json({ apps });
  

}