import Link from "next/link";
import { MapPin, Clock, IndianRupee } from "lucide-react";
import { Job } from "@/types/job";
import { calculateMatchScore } from "@/lib/calculateMatchScore";

export default function JobCard({ job }: { job: Job }) {
  const matchScore = calculateMatchScore(job);

  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-blue-600">
            {job.company}
          </p>

          <div className="mt-2 inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
            AI Compatibility Score: {matchScore}%
          </div>

          <h3 className="mt-3 text-xl font-bold text-slate-950">
            {job.title}
          </h3>
        </div>

        {job.featured && (
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
            Featured
          </span>
        )}
      </div>

      <p className="mt-4 line-clamp-2 text-sm leading-6 text-slate-600">
        {job.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {job.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 grid gap-3 text-sm text-slate-600">
        <div className="flex items-center gap-2">
          <MapPin size={16} /> {job.location}
        </div>

        <div className="flex items-center gap-2">
          <Clock size={16} /> {job.type} • {job.experience}
        </div>

        <div className="flex items-center gap-2">
          <IndianRupee size={16} /> {job.salary}
        </div>
      </div>

      <Link
        href={`/jobs/${job.id}`}
        className="mt-6 inline-flex w-full justify-center rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-600"
      >
        View Details
      </Link>
    </article>
  );
}