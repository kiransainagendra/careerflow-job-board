export type JobType = "Full-time" | "Part-time" | "Contract" | "Internship";
export type ExperienceLevel = "Entry" | "Mid" | "Senior";

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: JobType;
  experience: ExperienceLevel;
  salary: string;
  postedAt: string;
  tags: string[];
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  featured: boolean;
  
}