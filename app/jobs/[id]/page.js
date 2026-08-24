import { connectDB } from "@/lib/mongodb";
import Job from "@/models/Job";

export default async function JobDetail({params}) {
    const {id} = await params;
    await connectDB();
    const job = await Job.findById(id).lean();

    if (!job) {
        return <main className="p-4 text-xl font-bold">Job not found</main>;
    }

    return (
      <main className="p-4">
        <h1 className="text-2xl font-bold">{job.title}</h1>
        <p className="text-gray-500">
          {job.company} · {job.location}
        </p>
        <p className="mt-2 font-semibold">{job.salary}</p>
      </main>
    );
}