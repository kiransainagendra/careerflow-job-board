import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="text-8xl font-black tracking-tight text-blue-600">
  404
</h1>
      <h2 className="mt-4 text-3xl font-bold text-slate-900">
  Page Not Found
</h2>
      <p className="mt-4 max-w-md text-slate-600">
        The page you are looking for does not exist or may have been moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-2xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700"
      >
        Back to Home
      </Link>
    </main>
  );
}