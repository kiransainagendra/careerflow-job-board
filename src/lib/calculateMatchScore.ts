import { Job } from "@/types/job";

export function calculateMatchScore(job: Job): number {
  let score = 70;

  score += job.tags.length * 3;

  if (job.featured) score += 6;

  if (job.location.toLowerCase().includes("hyderabad")) score += 5;

  if (job.salary) score += 4;

  if (job.experience === "Entry") score += 5;
  else if (job.experience === "Mid") score += 3;
  else if (job.experience === "Senior") score += 1;

  return Math.min(score, 98);
}