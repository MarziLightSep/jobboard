import { connectDB } from "@/lib/mongodb";
import Job from "@/models/Job";
import { auth } from "@/auth";


export async function GET() {
    await connectDB();
    const jobs = await Job.find();
    return Response.json(jobs);
}

export async function POST(request) {
    const session = await auth();
    if(!session) return Response.json({error: "Unauthorized"}, {status: 401});
    await connectDB();
    const body = await request.json();
    const job = await Job.create(body);
    return Response.json(job, {status: 201});
}