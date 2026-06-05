"use client";

import { useMemo, useState } from "react";
import JobCard from "@/components/JobCard";
import { jobs } from "@/data/jobs";
import { Search } from "lucide-react";

export default function JobsPage() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("All");
  const [type, setType] = useState("All");

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesQuery =
        job.title.toLowerCase().includes(query.toLowerCase()) ||
        job.company.toLowerCase().includes(query.toLowerCase()) ||
        job.tags.join(" ").toLowerCase().includes(query.toLowerCase());

      const matchesLocation =
        location === "All" || job.location.toLowerCase().includes(location.toLowerCase());

      const matchesType = type === "All" || job.type === type;

      return matchesQuery && matchesLocation && matchesType;
    });
  }, [query, location, type]);

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <section className="mb-10 rounded-[2rem] bg-slate-950 p-8 text-white">
        <p className="font-bold text-blue-300">Explore jobs</p>
        <h1 className="mt-3 text-4xl font-black">Find roles that match your goals</h1>
        <p className="mt-4 max-w-2xl text-slate-300">
          Search by role, company, or skill. Use filters to quickly discover relevant
          opportunities.
        </p>
      </section>

      <section className="mb-8 grid gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-[1fr_180px_180px]">
        <div className="flex items-center gap-3 rounded-2xl border border-slate-200 px-4">
          <Search size={18} className="text-slate-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search jobs, companies, skills..."
            className="w-full bg-transparent py-3 outline-none"
          />
        </div>

        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="rounded-2xl border border-slate-200 px-4 py-3 outline-none"
        >
          <option>All</option>
          <option>Hyderabad</option>
          <option>Bengaluru</option>
          <option>Remote</option>
          <option>Pune</option>
        </select>

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="rounded-2xl border border-slate-200 px-4 py-3 outline-none"
        >
          <option>All</option>
          <option>Full-time</option>
          <option>Part-time</option>
          <option>Contract</option>
          <option>Internship</option>
        </select>
      </section>

      <div className="mb-6 flex items-center justify-between">
        <p className="font-semibold text-slate-700">
          Showing {filteredJobs.length} result{filteredJobs.length !== 1 ? "s" : ""}
        </p>
      </div>

      {filteredJobs.length > 0 ? (
        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </section>
      ) : (
        <section className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center">
          <h2 className="text-2xl font-black text-slate-950">No jobs found</h2>
          <p className="mt-3 text-slate-600">
            Try adjusting your search keyword or filters.
          </p>
          <button
            onClick={() => {
              setQuery("");
              setLocation("All");
              setType("All");
            }}
            className="mt-6 rounded-2xl bg-blue-600 px-6 py-3 font-bold text-white"
          >
            Reset filters
          </button>
        </section>
      )}
    </main>
  );
}