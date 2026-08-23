import { jobs } from "@/app/data/jobs";

export async function GET(request, {params}) {
    const {id} = await params;
    const job = jobs.find((job) => job.id === Number(id));

    if(!job) {
        return Response.json({error: "Job not found"}, {status: 404})
    }

    return Response.json(job);
    
}