"use client";

import Section from "./ui/Section";
import { Layout, Server, Terminal, Cpu } from "lucide-react";

const techStack = [
  {
    category: "Frontend",
    icon: <Layout className="w-6 h-6 text-indigo-400" />,
    skills: "React, Next.js, TypeScript, Tailwind CSS, Redux.js",
  },
  {
    category: "Backend",
    icon: <Server className="w-6 h-6 text-purple-400" />,
    skills: "Node.js, Express, NestJS, PostgreSQL, MongoDB",
  },
  {
    category: "DevOps",
    icon: <Cpu className="w-6 h-6 text-green-400" />,
    skills: "Docker, AWS, CI/CD (GitHub Actions)",
  },
  {
    category: "Others",
    icon: <Terminal className="w-6 h-6 text-orange-400" />,
    skills: "REST APIs, GraphQL, Prisma, Socket.io",
  },
];

export default function About() {
  return (
    <Section id="about" className="bg-background">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            About <span className="text-gradient">Me</span>
          </h2>
          
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              I’m a Full Stack Developer specializing in building robust, scalable web apps using the latest technologies. 
              Over the past five years, I’ve developed platforms across eCommerce, SaaS, and EdTech domains — optimizing 
              performance, improving UX, and leading teams toward modern architectures like Next.js and microservices.
            </p>
            <p>
              My approach combines technical depth with a product-first mindset. I don&apos;t just write code; I build solutions 
              that solve real business problems and delight users.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {techStack.map((tech, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl bg-surface/50 border border-indigo-900/20 hover:border-indigo-500/30 transition-colors group"
            >
              <div className="mb-4 p-3 rounded-xl bg-indigo-500/10 w-fit group-hover:bg-indigo-500/20 transition-colors">
                {tech.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{tech.category}</h3>
              <p className="text-sm text-slate-400">{tech.skills}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
