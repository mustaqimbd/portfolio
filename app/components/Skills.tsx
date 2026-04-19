"use client";

import Section from "./ui/Section";
import { Database, Layout, Settings, Terminal } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: <Layout className="w-5 h-5" />,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Zustand"]
  },
  {
    category: "Backend",
    icon: <Terminal className="w-5 h-5" />,
    items: ["Node.js", "Express", "NestJS", "GraphQL", "Socket.io", "REST APIs"]
  },
  {
    category: "Database",
    icon: <Database className="w-5 h-5" />,
    items: ["PostgreSQL", "MongoDB", "Prisma", "Redis", "Supabase"]
  },
  {
    category: "DevOps & Tools",
    icon: <Settings className="w-5 h-5" />,
    items: ["Docker", "AWS", "Git", "GitHub Actions", "Vercel", "Linux"]
  }
];

export default function Skills() {
  return (
    <Section id="skills" className="bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Technical <span className="text-gradient">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="p-8 rounded-3xl bg-surface/30 border border-white/5 hover:border-indigo-500/20 transition-all hover:bg-surface/50 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:text-indigo-300 transition-colors">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{skill.category}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {skill.items.map((item, i) => (
                  <span 
                    key={i}
                    className="px-4 py-2 rounded-lg bg-background/50 border border-white/5 text-slate-300 text-sm font-medium hover:text-white hover:border-indigo-500/30 transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
