"use client"

export default function Error({error, reset}) {
    return (
      <main className="p-4">
        <p className="text-red-500 font-semibold">
          Somthing went wrong in loading jobs
        </p>
        <button
          className="mt-2 cursor-pointer bg-gray-500 hover:bg-gray-600 rounded p-1"
          onClick={() => reset()}
        >
          Try again
        </button>
      </main>
    );
}