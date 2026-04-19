"use client";

import Section from "./ui/Section";
import { } from "lucide-react";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "SkillOxygen",
    period: "2022 – Present",
    description: "Designed and built an interviewer-candidate platform using Next.js + NestJS.",
    achievements: [
      "Created dashboards, interview scheduling, and analytics.",
      "Implemented CI/CD pipeline with Docker + AWS ECS.",
      "Reduced API latency by 40% through caching strategies."
    ]
  },
  {
    role: "Frontend Developer",
    company: "TechNova",
    period: "2020 – 2022",
    description: "Migrated legacy React app to Next.js with TypeScript.",
    achievements: [
      "Improved Lighthouse performance from 62 → 95.",
      "Developed a reusable component library used across 3 products.",
      "Mentored junior developers on React best practices."
    ]
  }
];

export default function Experience() {
  return (
    <Section id="experience" className="bg-[#020617]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Professional <span className="text-gradient">Experience</span>
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-indigo-900/30 -translate-x-1/2" />
              
              <div className={`md:flex items-start justify-between gap-12 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-indigo-500 border-4 border-[#020617] -translate-x-[5px] md:-translate-x-1/2 mt-1.5 z-10 shadow-[0_0_10px_rgba(99,102,241,0.5)]" />

                <div className="w-full md:w-[45%] mb-2 md:mb-0">
                  <div className={`text-left ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <p className="text-indigo-400 font-medium mb-1">{exp.company}</p>
                    <p className="text-sm text-slate-500 mb-4">{exp.period}</p>
                  </div>
                </div>

                <div className="w-full md:w-[45%]">
                  <div className="p-6 rounded-2xl bg-[#1e1b4b]/30 border border-white/5 hover:border-indigo-500/20 transition-colors">
                    <p className="text-slate-300 mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
