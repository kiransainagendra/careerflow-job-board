import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "CareerFlow | AI-Assisted Job Board",
  description:
    "A modern job board built with Next.js, TypeScript, Tailwind CSS, GitHub Actions, and Vercel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-950 antialiased">
        <Navbar/>
        {children}
      </body>
    </html>
  );
}