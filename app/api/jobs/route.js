import { connectDB } from "@/lib/mongodb";
import Job from "@/models/Job";


export async function GET() {
    await connectDB();
    const jobs = await Job.find();
    return Response.json(jobs);
}

export async function POST(request) {
    await connectDB();
    const body = await request.json();
    const job = await Job.create(body);
    return Response.json(job, {status: 201});
}