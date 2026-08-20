import Link from "next/link";
import { jobs } from "../data/jobs";

export default function Jobs() {
    return (
      <main className="p-4">
        <h1 className="text-xl font-bold mb-4">All Jobs</h1>
        <ul className="flex flex-col gap-3">
          {jobs.map((job) => (
            <li key={job.id} className="border p-3 rounded">
              <Link
                href={`/jobs/${job.id}`}
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