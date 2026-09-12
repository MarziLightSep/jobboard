"use client"

import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function AuthButton() {
    const {data: session} = useSession();

    if (session) {
        return (
          <div className="flex items-center gap-3">
            <Image src={session.user.image} alt={session.user.name} width={34} height={34} className="rounded-full"/>
            <span className="text-base text-white">{session.user.name}</span>
            <button
              onClick={() => signOut()}
              className="bg-blue-400 px-3 py-1 font-semibold rounded-full cursor-pointer transition-colors duration-200 hover:text-white hover:bg-blue-600"
            >
              Sign out
            </button>
          </div>
        );
    }

    return (
        <button onClick={() => signIn("github")} className="bg-lime-500 px-3 py-1 rounded-full transition-colors duration-200 hover:text-white font-semibold hover:bg-lime-600 cursor-pointer">
        Sign in with GitHub
        </button>
    );
}