"use client"
import { useState } from "react";

export default function SaveButton() {
    const [situation, setSituation] = useState(false);
    return(
        <button style={{padding: "5px", border: "1px solid", borderRadius: "5px", background:"gray", cursor:"pointer"}} onClick={() => setSituation(!situation)}>{situation ? "Saved" : "Not-Saved"}</button>
    )
}