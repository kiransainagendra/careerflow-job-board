"use client";

import { useState } from "react";
import { Building2, CheckCircle2, Eye, Send } from "lucide-react";

export default function PostJobPage() {
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    type: "Full-time",
    salary: "",
    description: "",
  });

  function updateField(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <section className="mb-10 rounded-[2rem] bg-slate-950 p-8 text-white">
        <div className="mb-4 inline-flex rounded-2xl bg-blue-600 p-3">
          <Building2 />
        </div>
        <h1 className="text-4xl font-black">Post a Job</h1>
        <p className="mt-4 max-w-2xl text-slate-300">
          A recruiter-focused workflow for creating clear, structured job listings.
        </p>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1fr_420px]">
        <form
          onSubmit={handleSubmit}
          className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
        >
          <h2 className="text-2xl font-black text-slate-950">Job Information</h2>

          <div className="mt-6 grid gap-5">
            <input
              required
              value={form.title}
              onChange={(e) => updateField("title", e.target.value)}
              placeholder="Job title"
              className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-500"
            />

            <input
              required
              value={form.company}
              onChange={(e) => updateField("company", e.target.value)}
              placeholder="Company name"
              className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-500"
            />

            <div className="grid gap-5 md:grid-cols-2">
              <input
                required
                value={form.location}
                onChange={(e) => updateField("location", e.target.value)}
                placeholder="Location"
                className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-500"
              />

              <select
                value={form.type}
                onChange={(e) => updateField("type", e.target.value)}
                className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-blue-500"
              >
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Contract</option>
                <option>Internship</option>
              </select>
            </div>

            <input
              required
              value={form.salary}
              onChange={(e) => updateField("salary", e.target.value)}
              placeholder="Salary range"
              className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-500"
            />

            <textarea
              required
              value={form.description}
              onChange={(e) => updateField("description", e.target.value)}
              placeholder="Job description"
              className="min-h-40 rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-500"
            />
          </div>

          <button className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700">
            <Send size={18} />
            Publish Job
          </button>

          {submitted && (
            <div className="mt-5 flex items-center gap-3 rounded-2xl bg-green-50 p-4 font-semibold text-green-700">
              <CheckCircle2 size={20} />
              Job submitted successfully in demo mode.
            </div>
          )}
        </form>

        <aside className="h-fit rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2 font-bold text-blue-600">
            <Eye size={18} />
            Live Preview
          </div>

          <div className="rounded-3xl border border-slate-200 p-5">
            <p className="text-sm font-bold text-blue-600">
              {form.company || "Company Name"}
            </p>

            <h3 className="mt-2 text-2xl font-black text-slate-950">
              {form.title || "Job Title"}
            </h3>

            <div className="mt-4 flex flex-wrap gap-2 text-sm">
              <span className="rounded-full bg-slate-100 px-3 py-1">
                {form.location || "Location"}
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1">
                {form.type}
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1">
                {form.salary || "Salary"}
              </span>
            </div>

            <p className="mt-5 text-sm leading-6 text-slate-600">
              {form.description ||
                "A clear job description helps candidates understand the role, expectations, and required skills."}
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}