"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function NewJob() {
    const router = useRouter();
    const [form, setForm] = useState({title: "", company: "", location: "", salary: ""});
    const [errors, setErrors] = useState({});
    const {data: session, status} = useSession();

    if(status === "loading") return(<main className="text-2xl p-4">Loading ...</main>);

    if(!session) return(<main className="font-bold p-4">Please sign in first</main>)

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});

        const res = await fetch("/api/jobs", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(form),
        });

        if(res.ok) {
            router.push("/jobs")
        }else {
          const data = await res.json();
          setErrors(data.error || {});
        }
    };

    return (
      <main className="p-4 max-w-md">
        <h1 className="flex justify-center text-xl font-bold mb-4">
          Post a new job
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            name="title"
            placeholder="Job title"
            value={form.title}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          {errors.title && (
            <p className="text-yellow-200 text-sm border-dashed border-yellow-200 border-2 rounded p-1 bg-red-600">
              {errors.title[0]}
            </p>
          )}
          <input
            name="company"
            placeholder="Company"
            value={form.company}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          {errors.company && (
            <p className="text-yellow-200 text-sm border-dashed border-yellow-200 border-2 rounded p-1 bg-red-600">{errors.company[0]}</p>
          )}
          <input
            name="location"
            placeholder="Location"
            value={form.location}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          {errors.location && (
            <p className="text-yellow-200 text-sm border-dashed border-yellow-200 border-2 rounded p-1 bg-red-600">{errors.location[0]}</p>
          )}
          <input
            name="salary"
            placeholder="Salary"
            value={form.salary}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          {errors.salary && (
            <p className="text-yellow-200 text-sm border-dashed border-yellow-200 border-2 rounded p-1 bg-red-600">{errors.salary[0]}</p>
          )}
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded cursor-pointer hover:bg-blue-600"
          >
            Post job
          </button>
        </form>
      </main>
    );
}