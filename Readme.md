# CareerFlow AI Job Board

## Overview

CareerFlow is a modern AI-assisted job board built using Next.js, TypeScript, Tailwind CSS, GitHub Actions, and Vercel.

The platform provides an intuitive experience for both job seekers and recruiters by offering job discovery, advanced filtering, job bookmarking, application workflows, recruiter job posting, and AI-inspired job compatibility scoring.

This project was developed as part of a Software Engineer assessment with a strong focus on user experience, feature completeness, CI/CD automation, deployment, and documentation.

---

## Live Demo

**Vercel Deployment**

https://careerflow-job-board.vercel.app

**GitHub Repository**

https://github.com/kiransainagendra/careerflow-job-board

---

## Features

### Candidate Features

* Browse available job opportunities
* Search jobs by keywords
* Filter jobs by location
* Filter jobs by employment type
* View detailed job descriptions
* Submit job applications
* Save jobs for later review
* AI Compatibility Score visualization

### Recruiter Features

* Post new job opportunities
* Live preview while creating jobs
* Structured job information workflow

### User Experience Features

* Responsive design
* Custom 404 page
* Featured jobs section
* Professional landing page
* Dynamic routing
* Clean navigation
* Persistent saved jobs using LocalStorage

---

## Technology Stack

### Frontend

* Next.js 16
* TypeScript
* Tailwind CSS
* Lucide React Icons

### Deployment

* Vercel

### Version Control

* GitHub

### CI/CD

* GitHub Actions

---

## Project Structure

src/
├── app/
│ ├── jobs/
│ ├── post-job/
│ ├── saved/
│ └── not-found.tsx
│
├── components/
│ ├── Navbar.tsx
│ ├── JobCard.tsx
│ └── SaveJobButton.tsx
│
├── data/
│ └── jobs.ts
│
├── lib/
│ └── calculateMatchScore.ts
│
└── types/
└── job.ts

---

## AI Compatibility Score

The AI Compatibility Score is a simulated AI-inspired scoring mechanism designed to demonstrate how AI can assist job seekers.

The score is calculated using job metadata such as:

* Skills and tags
* Experience level
* Featured status
* Location relevance
* Salary availability

In a production environment, this feature can be enhanced using Large Language Models (LLMs) and resume-to-job matching algorithms.

---

## CI/CD Pipeline

The project uses GitHub Actions to automatically:

1. Checkout repository
2. Install dependencies
3. Build application
4. Validate production readiness

Every push to the main branch automatically triggers the workflow.

---

## Deployment

The application is deployed using Vercel.

Deployment is automatically connected to the GitHub repository, enabling continuous deployment after code updates.

---

## Future Enhancements

* Authentication
* Resume uploads
* Real recruiter dashboard
* Database integration
* AI-powered resume matching
* Email notifications
* Application tracking

---

## Author

Kiran Sai Nagendra Kappala
