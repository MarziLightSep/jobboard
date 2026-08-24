"use client"

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function JobActions({id}) {
    const router = useRouter();

    const handleDelete = async () => {
        const confirmed = confirm("Delete this job? this can't be undo");

        if(!confirmed) return;

        const res = await fetch(`/api/jobs/${id}`, {method: "DELETE"});

        if(res.ok){
            router.push("/jobs");
        }
    };

    return (
      <div className="flex gap-2 mt-4">
        <Link
          href={`/jobs/${id}/edit`}
          className="bg-gray-500 px-3 py-1 rounded hover:bg-gray-400"
        >
          Edit
        </Link>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 cursor-pointer"
        >
          Delete
        </button>
      </div>
    );
}