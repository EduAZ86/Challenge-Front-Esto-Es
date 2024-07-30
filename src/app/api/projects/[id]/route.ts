
import { NextRequest, NextResponse } from "next/server";

import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import connectDB from "@/lib/db/db";
import { deleteProject, getProjectById, updateProject } from "@/services/projectServices";

export const GET = async (req: NextRequest, context: { params: Params }) => {
    await connectDB()
    try {
        const id = context.params.id as string;
        const response = await getProjectById(id);
        return NextResponse.json({ data: response }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
};

export const DELETE = async (req: NextRequest, context: { params: Params }) => {
    await connectDB()
    try {
        const id = context.params.id as string;
        const response = await deleteProject(id);
        return NextResponse.json({ data: response }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
};

export const PUT = async (req: NextRequest, context: { params: Params }) => {
    await connectDB()
    try {
        const id = context.params.id;
        const project = await req.json();
        const response = await updateProject(id, project);
        return NextResponse.json({ data: response }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
};

