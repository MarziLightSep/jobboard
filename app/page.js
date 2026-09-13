import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-radial from-slate-400 via-slate-600 to-slate-900 min-h-screen text-white">
      <div className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Find your next developer job
        </h1>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          DevBoard connects developers with companies hiring for remote and
          on-site engineering roles. No noise, just jobs worth applying to.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/jobs"
            className="bg-white border border-gray-300 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition-colors duration-200"
          >
            Browse Jobs
          </Link>
          <Link
            href="/post"
            className="border border-gray-300 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-700 transition-colors duration-200"
          >
            Post a Job
          </Link>
        </div>
      </div>
    </main>
  );
}
