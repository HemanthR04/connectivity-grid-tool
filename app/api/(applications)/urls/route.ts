import { NextResponse } from "next/server";
import connect from "@/lib/db";
import Url from "@/lib/models/url.modal";
import { Types } from "mongoose";
import Application from "@/lib/models/application.model";

export const GET = async (request: Request) => {
  try {
    const { searchParams } = new URL(request.url);
    const appId = searchParams.get("appId");

    if (!appId || !Types.ObjectId.isValid(appId)) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid or missing appId" }),
        { status: 400 }
      );
    }

    await connect();

    const app = await Application.findById(appId);
    if (!app) {
      return new NextResponse(JSON.stringify({ message: "App not found" }), {
        status: 404,
      });
    }

    const url = await Url.find({ app: new Types.ObjectId(appId) });
    return new NextResponse(JSON.stringify(url), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching url" + error, { status: 500 });
  }
};

export const POST = async (request: Request) => {
  try {
    const { searchParams } = new URL(request.url);
    const appId = searchParams.get("appId");

    const body = await request.json();
    const { url_type, url_link ,client_apps } = body;

    if (!appId || !Types.ObjectId.isValid(appId)) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid or missing appId" }),
        { status: 400 }
      );
    }

    await connect();

    // Check if the user exists
    const app = await Application.findById(appId);
    if (!app) {
      return new NextResponse(JSON.stringify({ message: "App not found" }), {
        status: 404,
      });
    }

    const newUrl = new Url({
        url_type,
        url_link,
        client_apps,
      app: new Types.ObjectId(appId),
    });

    await newUrl.save();
    return new NextResponse(
      JSON.stringify({ message: "URL created", note: newUrl }),
      { status: 201 }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        message: "Error in creating note",
        error,
      }),
      { status: 500 }
    );
  }
};

export const PATCH = async (request: Request) => {
  try {
    const body = await request.json();
    const { urlID, url_type, url_link,client_apps } = body;

    const { searchParams } = new URL(request.url);
    const appId = searchParams.get("appId");

    if (!urlID || !Types.ObjectId.isValid(urlID)) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid or missing appId" }),
        { status: 400 }
      );
    }

    if (!appId || !Types.ObjectId.isValid(appId)) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid or missing appId" }),
        { status: 400 }
      );
    }

    await connect();

    // Check if the user exists
    const app = await Application.findById(appId);
    if (!app) {
      return new NextResponse(JSON.stringify({ message: "app not found" }), {
        status: 404,
      });
    }

    // Find the note and ensure it belongs to the user
    const url = await Url.findOne({ _id: urlID, app: appId });
    if (!url) {
      return new NextResponse(
        JSON.stringify({
          message: "url not found or does not belong to the App",
        }),
        {
          status: 404,
        }
      );
    }

    const updatedNote = await Url.findByIdAndUpdate(
      urlID,
      { url_type, url_link,client_apps },
      { new: true }
    );

    return new NextResponse(
      JSON.stringify({ message: "Url updated", note: updatedNote }),
      { status: 200 }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        message: "Error in updating Url",
        error,
      }),
      { status: 500 }
    );
  }
};

export const DELETE = async (request: Request) => {
  try {
    const { searchParams } = new URL(request.url);
    const urlID = searchParams.get("urlID");
    const appId = searchParams.get("appId");

    if (!appId || !Types.ObjectId.isValid(appId)) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid or missing appId" }),
        { status: 400 }
      );
    }

    if (!urlID || !Types.ObjectId.isValid(urlID)) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid or missing urlID" }),
        { status: 400 }
      );
    }

    await connect();

    // Check if the user exists
    const app = await Application.findById(appId);
    if (!app) {
      return new NextResponse(JSON.stringify({ message: "App not found" }), {
        status: 404,
      });
    }

    // Check if the note exists and belongs to the user
    const url = await Url.findOne({ _id: urlID, app: appId });
    if (!url) {
      return new NextResponse(
        JSON.stringify({
          message: "url not found or does not belong to the user",
        }),
        {
          status: 404,
        }
      );
    }

    await Url.findByIdAndDelete(urlID);

    return new NextResponse(
      JSON.stringify({ message: "Url deleted successfully" }),
      { status: 200 }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        message: "Error in deleting Url",
        error,
      }),
      { status: 500 }
    );
  }
};