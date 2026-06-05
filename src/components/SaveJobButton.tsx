"use client";

import { useEffect, useState } from "react";
import { Bookmark } from "lucide-react";

export default function SaveJobButton({ jobId }: { jobId: string }) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedJobs = JSON.parse(localStorage.getItem("savedJobs") || "[]");
    setSaved(savedJobs.includes(jobId));
  }, [jobId]);

  function toggleSave() {
    const savedJobs = JSON.parse(localStorage.getItem("savedJobs") || "[]");

    let updatedJobs: string[];

    if (savedJobs.includes(jobId)) {
      updatedJobs = savedJobs.filter((id: string) => id !== jobId);
      setSaved(false);
    } else {
      updatedJobs = [...savedJobs, jobId];
      setSaved(true);
    }

    localStorage.setItem("savedJobs", JSON.stringify(updatedJobs));
  }

  return (
    <button
      onClick={toggleSave}
      className={`mt-3 flex w-full items-center justify-center gap-2 rounded-2xl border px-5 py-3 font-bold ${
        saved
          ? "border-blue-600 bg-blue-50 text-blue-700"
          : "border-slate-300 text-slate-800 hover:border-blue-400"
      }`}
    >
      <Bookmark size={18} />
      {saved ? "Saved" : "Save Job"}
    </button>
  );
}