"use client"
import { useState } from "react";

export default function SaveButton() {
    const [situation, setSituation] = useState(false);
    return (
      <button
        className={`p-2 rounded border-2 cursor-pointer transition-colors ${situation ? "bg-green-400 text-black hover:bg-green-500" : "bg-gray-500 hover:bg-gray-600"}`}
        onClick={() => setSituation(!situation)}
      >
        {situation ? "Saved" : "Not-Saved"}
      </button>
    );
}