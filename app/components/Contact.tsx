"use client";

import Section from "./ui/Section";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <Section id="contact" className="bg-gradient-to-b from-[#020617] to-[#1e1b4b]">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold">
          Let&apos;s build something <br />
          <span className="text-gradient">great together.</span>
        </h2>
        
        <p className="text-slate-400 text-lg">
          I&apos;m currently available for freelance projects and open to full-time opportunities.
          If you have a project in mind or just want to say hi, feel free to reach out!
        </p>

        <div className="pt-8">
          <a 
            href="mailto:mustaqim@yourdomain.com"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-all hover:scale-105 shadow-[0_0_30px_rgba(99,102,241,0.3)]"
          >
            <Mail className="w-5 h-5" />
            mustaqim@yourdomain.com
          </a>
        </div>

        <div className="flex justify-center gap-8 pt-12 border-t border-white/5 mt-12">
          <a href="#" className="text-slate-400 hover:text-white transition-colors flex flex-col items-center gap-2 group">
            <Github className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
            <span className="text-xs">GitHub</span>
          </a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors flex flex-col items-center gap-2 group">
            <Linkedin className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
            <span className="text-xs">LinkedIn</span>
          </a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors flex flex-col items-center gap-2 group">
            <Twitter className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
            <span className="text-xs">Twitter</span>
          </a>
        </div>
        
        <footer className="pt-12 text-sm text-slate-600">
          © {new Date().getFullYear()} Mustaqim Khan. All rights reserved.
        </footer>
      </div>
    </Section>
  );
}
