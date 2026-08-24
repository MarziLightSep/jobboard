import { connectDB } from "@/lib/mongodb";
import Job from "@/models/Job";


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
    await connectDB();
    const {id} = await params;
    const body = await request.json();
    const job = await Job.findByIdAndUpdate(id, body, {new: true});

    if (!job) {
      return Response.json({ error: "Job not found" }, { status: 404 });
    }
    
    return Response.json(job);
};


export async function DELETE(request, {params}) {
    await connectDB();
    const {id} = await params;
    const job = await Job.findByIdAndDelete(id);

    if (!job) {
      return Response.json({ error: "Job not found" }, { status: 404 });
    }

    return Response.json({message: "Job deleted"});
    
};