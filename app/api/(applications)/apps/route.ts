import { NextResponse } from "next/server";
import connect from "@/lib/db";
import Application from "@/lib/models/application.model";
import { Types } from "mongoose";
import User from "@/lib/models/user.model";

const ObjectId = require("mongoose").Types.ObjectId;

export const GET = async () => {
  try {
    await connect();
    const application = await Application.find();
    return new NextResponse(JSON.stringify(application), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching Application" + error, { status: 500 });
  }
};