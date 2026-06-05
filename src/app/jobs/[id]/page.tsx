import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Briefcase, CheckCircle2, MapPin, Wallet } from "lucide-react";
import { jobs } from "@/data/jobs";
import SaveJobButton from "@/components/SaveJobButton";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function JobDetailsPage({ params }: PageProps) {
  const { id } = await params;
  const job = jobs.find((item) => item.id === id);

  if (!job) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <Link href="/jobs" className="mb-8 inline-flex items-center gap-2 font-semibold text-blue-600">
        <ArrowLeft size={18} /> Back to jobs
      </Link>

      <section className="grid gap-8 lg:grid-cols-[1fr_340px]">
        <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <p className="font-bold text-blue-600">{job.company}</p>
          <h1 className="mt-3 text-4xl font-black text-slate-950">{job.title}</h1>

          <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-600">
            <span className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2">
              <MapPin size={16} /> {job.location}
            </span>
            <span className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2">
              <Briefcase size={16} /> {job.type} • {job.experience}
            </span>
            <span className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2">
              <Wallet size={16} /> {job.salary}
            </span>
          </div>

          <p className="mt-8 text-lg leading-8 text-slate-700">{job.description}</p>

          <Section title="Responsibilities" items={job.responsibilities} />
          <Section title="Requirements" items={job.requirements} />
          <Section title="Benefits" items={job.benefits} />
        </article>

        <aside className="h-fit rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-black">Quick Apply</h2>
          <p className="mt-2 text-sm text-slate-600">
            Submit your interest for this role. This demo flow shows complete job board UX.
          </p>

          <div className="mt-6 grid gap-3">
            <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none" placeholder="Full name" />
            <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none" placeholder="Email address" />
            <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none" placeholder="Portfolio / LinkedIn URL" />
            <textarea className="min-h-28 rounded-2xl border border-slate-200 px-4 py-3 outline-none" placeholder="Why are you a good fit?" />
          </div>

          <button className="mt-5 w-full rounded-2xl bg-blue-600 px-5 py-3 font-bold text-white hover:bg-blue-700">
            Submit Application
          </button>

          <SaveJobButton jobId={job.id} />
        </aside>
      </section>
    </main>
  );
}

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-black text-slate-950">{title}</h2>
      <ul className="mt-4 grid gap-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-slate-700">
            <CheckCircle2 className="mt-1 shrink-0 text-green-600" size={18} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}