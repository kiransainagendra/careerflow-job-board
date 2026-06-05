import Link from "next/link";
import { BriefcaseBusiness } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-slate-950">
          <span className="rounded-xl bg-blue-600 p-2 text-white">
            <BriefcaseBusiness size={20} />
          </span>
          CareerFlow
        </Link>

        <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          <Link href="/jobs" className="hover:text-blue-600">Jobs</Link>
          <Link href="/saved" className="hover:text-blue-600">Saved Jobs</Link>
          <Link href="/post-job" className="hover:text-blue-600">Post Job</Link>
          
        </div>

        <Link
          href="/jobs"
          className="rounded-full bg-slate-950 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-600"
        >
          Explore Jobs
        </Link>
      </nav>
    </header>
  );
}