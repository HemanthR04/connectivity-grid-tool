
import connect from "@/lib/db";
import Application from "@/lib/models/application.model";
import { NextRequest, NextResponse } from "next/server";



export async function POST(request : NextRequest) {
    const { app_name, app_description,primary_admin } = await request.json();
    await connect();
    await Application.create({ app_name, app_description,primary_admin });
    return NextResponse.json({ message: "Application Created" }, { status: 201 });
  }

  