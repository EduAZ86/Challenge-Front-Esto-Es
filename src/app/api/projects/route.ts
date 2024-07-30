import connectDB from "@/lib/db/db";
import { createProject, getAllProjects } from "@/services/projectServices";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    try {
        await connectDB()
        const data = await req.json();
        const response = await createProject(data);
        return NextResponse.json({ data: response }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 })
    }
}

 export const GET = async (req: NextRequest) => {
    try {
        await connectDB() 
        const response = await getAllProjects();
        return NextResponse.json({ data: response }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 })
    }
}