import Link from "next/link";
import Job from "@/models/Job";
import { connectDB } from "@/lib/mongodb";

export const metadata = {
  title: "All Jobs - DevBoard",
  description: "Browse open developer job listings.",
};

export default async function Jobs() {
  await connectDB();
  const jobs = await Job.find().lean();
  
    return (
      <main className="p-4">
        <h1 className="text-xl font-bold mb-2">All Jobs</h1>
        <button className="rounded text-sm p-1 mb-4 border cursor-pointer hover:bg-slate-600">
          <Link href={"/jobs/new"}>Add new job</Link>
        </button>
        <ul className="flex flex-col gap-3">
          {jobs.map((job) => (
            <li key={job._id} className="border p-3 rounded">
              <Link
                href={`/jobs/${job._id}`}
                className="font-semibold hover:underline hover:text-orange-400"
              >
                {job.title}
              </Link>
              <p className="text-sm text-gray-500">
                {job.company} . {job.location}
              </p>
            </li>
          ))}
        </ul>
      </main>
    );
}