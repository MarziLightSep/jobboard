import { jobs } from "@/app/data/jobs";

export async function GET() {
    return Response.json(jobs);
}