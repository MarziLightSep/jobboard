import { connectDB } from "@/lib/mongodb";
import Job from "@/models/Job";
import { auth } from "@/auth";
import { jobSchema } from "@/lib/jobSchema";
import {z} from "zod";


export async function GET() {
    await connectDB();
    const jobs = await Job.find();
    return Response.json(jobs);
}

export async function POST(request) {
    const session = await auth();
    if(!session) return Response.json({error: "Unauthorized"}, {status: 401});

    const body = await request.json();
    const result = jobSchema.safeParse(body);

    if(!result.success) {
        return Response.json(
          { error: z.flattenError(result.error).fieldErrors },
          { status: 400 },
        );
    }

    await connectDB();
    const job = await Job.create(result.data);
    return Response.json(job, {status: 201});
}