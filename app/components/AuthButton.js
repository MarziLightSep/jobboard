"use client"

import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function AuthButton() {
    const {data: session} = useSession();

    if (session) {
        return (
          <div className="flex items-center gap-3">
            <Image src={session.user.image} alt={session.user.name} width={32} height={32} className="rounded-full"/>
            <span className="text-sm text-lime-200 font-bold">{session.user.name}</span>
            <button
              onClick={() => signOut()}
              className="bg-gray-600 px-3 py-1 rounded cursor-pointer hover:bg-gray-500"
            >
              Sign out
            </button>
          </div>
        );
    }

    return (
        <button onClick={() => signIn("github")} className="bg-green-700 text-white px-3 py-2 rounded hover:bg-green-600 cursor-pointer flex items-center">
        Sign in with GitHub
        </button>
    );
}