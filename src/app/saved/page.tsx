"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import JobCard from "@/components/JobCard";
import { jobs } from "@/data/jobs";
import { Bookmark } from "lucide-react";

export default function SavedJobsPage() {
  const [savedIds, setSavedIds] = useState<string[]>([]);

  useEffect(() => {
    const savedJobs = JSON.parse(localStorage.getItem("savedJobs") || "[]");
    setSavedIds(savedJobs);
  }, []);

  const savedJobs = jobs.filter((job) => savedIds.includes(job.id));

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <section className="mb-10 rounded-[2rem] bg-slate-950 p-8 text-white">
        <div className="mb-4 inline-flex rounded-2xl bg-blue-600 p-3">
          <Bookmark />
        </div>
        <h1 className="text-4xl font-black">Saved Jobs</h1>
        <p className="mt-4 max-w-2xl text-slate-300">
          Keep track of roles you are interested in and return to them later.
        </p>
      </section>

      {savedJobs.length > 0 ? (
        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {savedJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </section>
      ) : (
        <section className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center">
          <h2 className="text-2xl font-black text-slate-950">
            No saved jobs yet
          </h2>
          <p className="mt-3 text-slate-600">
            Browse jobs and save the roles that match your career goals.
          </p>
          <Link
            href="/jobs"
            className="mt-6 inline-flex rounded-2xl bg-blue-600 px-6 py-3 font-bold text-white"
          >
            Browse Jobs
          </Link>
        </section>
      )}
    </main>
  );
}