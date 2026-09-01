import { connectDB } from "@/lib/mongodb";
import Job from "@/models/Job";
import { auth } from "@/auth";
import { jobSchema } from "@/lib/jobSchema";
import {z} from "zod";


export async function GET(request, {params}) {
    await connectDB();
    const {id} = await params;
    const job = await Job.findById(id)

    if(!job) {
        return Response.json({error: "Job not found"}, {status: 404})
    }

    return Response.json(job);
};


export async function PUT(request, {params}) {
    const session = await auth();
    if (!session)
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    
    const body = await request.json();
    const result = jobSchema.safeParse(body);

    if (!result.success) {
      return Response.json(
        { error: z.flattenError(result.error).fieldErrors },
        { status: 400 },
      );
    }

    await connectDB();
    const {id} = await params;
    const job = await Job.findByIdAndUpdate(id, result.data, {new: true});

    if (!job) {
      return Response.json({ error: "Job not found" }, { status: 404 });
    }
    
    return Response.json(job);
};


export async function DELETE(request, {params}) {
    const session = await auth();
    if (!session)
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    
    await connectDB();
    const {id} = await params;
    const job = await Job.findByIdAndDelete(id);

    if (!job) {
      return Response.json({ error: "Job not found" }, { status: 404 });
    }

    return Response.json({message: "Job deleted"});
    
};