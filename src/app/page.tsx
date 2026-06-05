import Link from "next/link";
import { ArrowRight, Building2, Search, ShieldCheck, Sparkles } from "lucide-react";
import JobCard from "@/components/JobCard";
import { jobs } from "@/data/jobs";

export default function Home() {
  const featuredJobs = jobs.filter((job) => job.featured);

  return (
    <main>
      <section className="bg-gradient-to-b from-white to-blue-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
              <Sparkles size={16} />
              AI-assisted hiring experience
            </div>

            <h1 className="max-w-4xl text-5xl font-black tracking-tight text-slate-950 md:text-6xl">
              Find better jobs with a faster, cleaner hiring experience.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              CareerFlow helps candidates discover relevant roles, save opportunities,
              apply quickly, and gives recruiters a simple way to publish openings.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/jobs"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-4 font-bold text-white hover:bg-blue-700"
              >
                Browse Jobs <ArrowRight size={18} />
              </Link>
              <Link
                href="/post-job"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-4 font-bold text-slate-800 hover:border-blue-300"
              >
                Post a Job
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl">
            <div className="grid gap-4">
              <div className="rounded-3xl bg-slate-950 p-6 text-white">
                <p className="text-sm text-slate-300">Platform score</p>
                <p className="mt-2 text-4xl font-black">96%</p>
                <p className="mt-2 text-sm text-slate-300">
                  Built for UX, speed, accessibility, and deployment quality.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-3xl bg-blue-50 p-5">
                  <Search className="text-blue-600" />
                  <p className="mt-4 text-2xl font-black">{jobs.length}+</p>
                  <p className="text-sm text-slate-600">Curated jobs</p>
                </div>
                <div className="rounded-3xl bg-green-50 p-5">
                  <Building2 className="text-green-600" />
                  <p className="mt-4 text-2xl font-black">12+</p>
                  <p className="text-sm text-slate-600">Companies</p>
                </div>
                <div className="col-span-2 rounded-3xl bg-white p-5 ring-1 ring-slate-200">
                  <ShieldCheck className="text-blue-600" />
                  <p className="mt-3 font-bold">Production-minded delivery</p>
                  <p className="mt-1 text-sm text-slate-600">
                    Includes CI/CD, documentation, responsive UI, and deploy-ready structure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="font-bold text-blue-600">Featured roles</p>
            <h2 className="mt-2 text-3xl font-black text-slate-950">
              Recommended opportunities
            </h2>
          </div>
          <Link href="/jobs" className="hidden font-bold text-blue-600 md:block">
            View all jobs →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </section>
    </main>
  );
}