"use client";

import Section from "./ui/Section";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "BrMart eCommerce Platform",
    description: "A scalable eCommerce solution with SSR using Next.js 15, TypeScript, and Prisma. Includes product management, cart persistence, authentication, and admin dashboard.",
    image: "/project1.png", // Placeholder, user can replace
    tech: ["Next.js", "Node.js", "Prisma", "PostgreSQL", "Tailwind"],
    highlights: [
      "Dynamic product filtering and variant pricing",
      "Optimized SSR + ISR for fast SEO",
      "JWT-based authentication"
    ],
    links: {
      demo: "#",
      github: "#",
      caseStudy: "#"
    }
  },
  {
    title: "TaskFlow SaaS",
    description: "Project management tool for remote teams with real-time updates and Kanban boards.",
    image: "/project2.png",
    tech: ["React", "Firebase", "Tailwind", "Zustand"],
    highlights: [
      "Real-time collaboration with Socket.io",
      "Drag and drop Kanban board",
      "Team workspace management"
    ],
    links: {
      demo: "#",
      github: "#",
      caseStudy: "#"
    }
  },
  {
    title: "DevLearn LMS",
    description: "Learning management system for coding bootcamps with video streaming and code playgrounds.",
    image: "/project3.png",
    tech: ["Next.js", "Mux Video", "Monaco Editor", "Stripe"],
    highlights: [
      "Interactive code playground",
      "Video course progression tracking",
      "Subscription payments with Stripe"
    ],
    links: {
      demo: "#",
      github: "#",
      caseStudy: "#"
    }
  }
];

export default function Projects() {
  return (
    <Section id="projects" className="bg-[#020617]">
      <div className="space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-400">
            A selection of projects that demonstrate my technical depth and architectural thinking.
          </p>
        </div>

        <div className="grid gap-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative grid md:grid-cols-2 gap-8 items-center p-8 rounded-3xl bg-[#1e1b4b]/20 border border-white/5 hover:border-indigo-500/20 transition-all hover:bg-[#1e1b4b]/30"
            >
              {/* Image Side */}
              <div className={`relative aspect-video rounded-xl overflow-hidden bg-slate-800 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent opacity-60 z-10" />
                {/* Placeholder for project image */}
                <div className="absolute inset-0 flex items-center justify-center text-slate-600 font-medium bg-slate-900">
                  Project Screenshot
                </div>
              </div>

              {/* Content Side */}
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-400 mb-2 uppercase tracking-wider">Key Highlights</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-400">
                        <span className="w-1 h-1 rounded-full bg-indigo-500" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a href={project.links.demo} className="flex items-center gap-2 text-white hover:text-indigo-400 transition-colors font-medium">
                    <ExternalLink className="w-4 h-4" /> View Live
                  </a>
                  <a href={project.links.github} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                    <Github className="w-4 h-4" /> Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
