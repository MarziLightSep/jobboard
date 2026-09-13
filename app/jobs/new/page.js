"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function NewJob() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
  });
  const [errors, setErrors] = useState({});
  const { data: session, status } = useSession();

  if (status === "loading")
    return (
      <main className="min-h-screen bg-slate-800 flex items-center justify-center">
        <p className="text-gray-300 text-lg">Loading...</p>
      </main>
    );

  if (!session)
    return (
      <main className="min-h-screen bg-slate-800 flex items-center justify-center">
        <p className="text-white font-bold text-lg">Please sign in first</p>
      </main>
    );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      router.push("/jobs");
    } else {
      const data = await res.json();
      setErrors(data.error || {});
    }
  };

  return (
    <main className="min-h-screen bg-linear-to-b from-slate-600 to-slate-900 flex justify-center px-4 py-16">
      <div className="w-full max-w-md bg-slate-900 rounded-xl p-8">
        <h1 className="text-center text-2xl font-bold text-white mb-1">
          Post a new job
        </h1>
        <p className="text-gray-400 text-sm text-center mb-6">
          Fill in the details below to list your opening.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <input
              name="title"
              placeholder="Job title"
              value={form.title}
              onChange={handleChange}
              className="w-full border border-slate-600 bg-slate-800 text-white placeholder-gray-500 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all duration-200"
              required
            />
            {errors.title && (
              <p className="text-red-400 text-sm mt-1">{errors.title[0]}</p>
            )}
          </div>

          <div>
            <input
              name="company"
              placeholder="Company"
              value={form.company}
              onChange={handleChange}
              className="w-full border border-slate-600 bg-slate-800 text-white placeholder-gray-500 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all duration-200"
              required
            />
            {errors.company && (
              <p className="text-red-400 text-sm mt-1">{errors.company[0]}</p>
            )}
          </div>

          <div>
            <input
              name="location"
              placeholder="Location"
              value={form.location}
              onChange={handleChange}
              className="w-full border border-slate-600 bg-slate-800 text-white placeholder-gray-500 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all duration-200"
              required
            />
            {errors.location && (
              <p className="text-red-400 text-sm mt-1">{errors.location[0]}</p>
            )}
          </div>

          <div>
            <input
              name="salary"
              placeholder="Salary"
              value={form.salary}
              onChange={handleChange}
              className="w-full border border-slate-600 bg-slate-800 text-white placeholder-gray-500 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all duration-200"
              required
            />
            {errors.salary && (
              <p className="text-red-400 text-sm mt-1">{errors.salary[0]}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-violet-800 text-white text-lg p-3 rounded-lg cursor-pointer hover:bg-violet-700 transition-colors duration-200 font-semibold mt-2"
          >
            Post job
          </button>
        </form>
      </div>
    </main>
  );
}
