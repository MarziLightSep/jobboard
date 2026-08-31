import Link from "next/link";

export default function NotFound() {
    return (
      <main className="p-4">
        <h1 className="text-xl font-bold">Page not found</h1>
        <Link href={"/"} className="font-semibold text-blue-500 hover:underline">Go back to home page</Link>
      </main>
    );
}