"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewJob() {
    const router = useRouter();
    const [form, setForm] = useState({title: "", company: "", location: "", salary: ""});

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("/api/jobs", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(form),
        });

        if(res.ok) {
            router.push("/jobs")
        }
    };

    return (
      <main className="p-4 max-w-md">
        <h1 className="flex justify-center text-xl font-bold mb-4">Post a new job</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            name="title"
            placeholder="Job title"
            value={form.title}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <input
            name="company"
            placeholder="Company"
            value={form.company}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <input
            name="location"
            placeholder="Location"
            value={form.location}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <input
            name="salary"
            placeholder="Salary"
            value={form.salary}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
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