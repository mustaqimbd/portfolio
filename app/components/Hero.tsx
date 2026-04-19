"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-gradient-premium pt-32">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-start relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left space-y-6"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-sm">
            <span className="text-sm font-medium text-indigo-400 tracking-wider">FULL STACK DEVELOPER</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I&apos;m <span className="text-gradient">Mustaqim Khan</span> <span className="animate-wave inline-block">👋</span>
          </h1>

          <p className="text-slate-300 text-lg md:text-xl max-w-xl mx-auto md:mx-0 leading-relaxed">
            I craft scalable, high-performance web apps with modern technologies like Next.js, TypeScript, Node.js, and PostgreSQL.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <a href="#projects" className="btn-primary cursor-pointer flex items-center justify-center gap-2 group">
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="cursor-pointer px-8 py-3 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition backdrop-blur-md font-medium flex items-center justify-center gap-2">
              Contact Me
            </a>
          </div>

          <div className="flex gap-6 justify-center md:justify-start py-6 text-slate-400">
            <a href="#" className="hover:text-indigo-400 transition-colors"><Github className="w-6 h-6" /></a>
            <a href="#" className="hover:text-indigo-400 transition-colors"><Linkedin className="w-6 h-6" /></a>
            <a href="#" className="hover:text-indigo-400 transition-colors"><Twitter className="w-6 h-6" /></a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center md:justify-end relative"
        >
          <div className="relative w-full max-w-lg aspect-square">
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-linear-to-tr from-indigo-600/30 to-purple-600/30 rounded-full blur-3xl -z-10 animate-pulse" />
            
            <Image
              src="/hero.png"
              alt="Mustaqim Khan"
              fill
              className="object-contain drop-shadow-2xl animate-float"
              priority
            />
            
            {/* Floating Code Block Animation (Optional decoration) */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 md:bottom-10 md:-left-10 bg-surface/90 backdrop-blur-md p-4 rounded-xl border border-indigo-500/30 shadow-xl hidden md:block"
            >
              <div className="flex gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <pre className="text-xs text-indigo-300 font-mono">
                <code>
                  <span className="text-purple-400">const</span> <span className="text-indigo-400">developer</span> = {"{"}<br/>
                  &nbsp;&nbsp;name: <span className="text-green-400">&quot;Mustaqim&quot;</span>,<br/>
                  &nbsp;&nbsp;exp: <span className="text-orange-400">5</span>,<br/>
                  &nbsp;&nbsp;love: <span className="text-green-400">&quot;Code&quot;</span><br/>
                  {"}"}
                </code>
              </pre>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
