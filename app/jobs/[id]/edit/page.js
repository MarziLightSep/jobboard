"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

export default function EditJob() {
    const [form, setForm] = useState({title: "", company: "", location: "", salary: ""});
    const router = useRouter();
    const params = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadJob() {
            const res = await fetch(`/api/jobs/${params.id}`);
            const data = await res.json();
            setForm({title: data.title, company: data.company, location: data.location, salary: data.salary});
            setLoading(false);   
        }
        loadJob();
    }, [params.id]);

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch(`/api/jobs/${params.id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(form),
        });

        if(res.ok) {
            router.push(`/jobs/${params.id}`);
        }
    };

    if (loading) return <main className="p-4">Loading...</main>;
    
    return (
      <main className="p-4 max-w-md">
        <h1 className="flex justify-center text-xl font-bold mb-4">Edit job</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <input
            name="company"
            value={form.company}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <input
            name="location"
            value={form.location}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <input
            name="salary"
            value={form.salary}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded cursor-pointer hover:bg-blue-600"
          >
            Save changes
          </button>
        </form>
      </main>
    );
}
