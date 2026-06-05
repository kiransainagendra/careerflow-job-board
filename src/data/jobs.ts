import { Job } from "@/types/job";

export const jobs: Job[] = [
  {
    id: "frontend-engineer",
    title: "Frontend Engineer",
    company: "GlobalCo",
    location: "Hyderabad",
    type: "Full-time",
    experience: "Mid",
    salary: "₹8L - ₹14L",
    postedAt: "2 days ago",
    tags: ["React", "Next.js", "TypeScript"],
    description:
      "Build responsive, high-quality user interfaces for a fast-growing global hiring platform.",
    responsibilities: [
      "Develop accessible and reusable UI components",
      "Collaborate with designers and backend engineers",
      "Improve performance and user experience across the platform",
    ],
    requirements: [
      "Strong knowledge of React and TypeScript",
      "Experience with responsive design",
      "Understanding of API integration and frontend architecture",
    ],
    benefits: ["Health insurance", "Learning budget", "Career growth support"],
    featured: true,
  },
  {
    id: "backend-engineer",
    title: "Backend Engineer",
    company: "CloudNova",
    location: "Bengaluru",
    type: "Full-time",
    experience: "Mid",
    salary: "₹10L - ₹18L",
    postedAt: "1 day ago",
    tags: ["Node.js", "PostgreSQL", "APIs"],
    description:
      "Design scalable APIs and backend services for enterprise-grade recruitment workflows.",
    responsibilities: ["Build secure REST APIs", "Design database schemas", "Optimize backend performance"],
    requirements: ["Experience with Node.js", "Good understanding of databases", "Knowledge of API security"],
    benefits: ["Flexible leave", "Mentorship", "Performance bonus"],
    featured: true,
  },
  {
    id: "software-engineer-night-shift",
    title: "Software Engineer - Night Shift",
    company: "GlobalCo",
    location: "Hitech City, Hyderabad",
    type: "Full-time",
    experience: "Entry",
    salary: "₹5L - ₹9L",
    postedAt: "Today",
    tags: ["JavaScript", "Problem Solving", "Onsite"],
    description:
      "Join an onsite engineering team supporting global clients during night shift operations.",
    responsibilities: ["Develop web application features", "Debug production issues", "Work with client-facing teams"],
    requirements: ["JavaScript fundamentals", "Willingness to work night shift onsite", "Good communication"],
    benefits: ["Shift allowance", "Cab support", "Global client exposure"],
    featured: true,
  },
];