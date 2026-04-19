import React from "react";

export default function AbdulRahmanResume() {
  return (
    <div className="w-full max-w-3xl mx-auto p-6 space-y-8 text-white" style={{ backgroundColor: "#000000", backgroundImage: "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55))" }}>
    <div className="w-full max-w-3xl mx-auto p-6 space-y-8">
      <section className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Abdul Rahman - Software Engineer</h1>
        <p className="text-[#D1D5DB]">
          A self-taught developer specializing in Frontend (React/Next.js) with a
          passion for building awesome things with code. Currently working as a
          Frontend Engineer at Pabbl.
        </p>
        <div className="flex justify-center gap-4 pt-2">
          <a className="underline text-[#6172F3]" href="#projects">View Projects</a>
          <a className="underline text-indigo-600" href="#contact">Contact Me</a>
        </div>
      </section>

      <section id="about" className="space-y-4">
        <h2 className="text-2xl font-semibold text-indigo-600">About Me</h2>
        <ul className="space-y-2 list-disc pl-6">
          <li>
            <strong>Early Beginnings:</strong> Close to computers from an early
            age, starting with no-code tools in 2010 before learning to code.
          </li>
          <li>
            <strong>Professional Journey:</strong> Worked at a Recruitment
            Company and a SaaS Company, developing skills in various
            programming languages.
          </li>
          <li>
            <strong>Current Focus:</strong> Web & Mobile Development, Open
            Source, and Competitive Programming.
          </li>
        </ul>
      </section>

      <section id="projects" className="space-y-6">
        <h2 className="text-2xl font-semibold">My Projects</h2>
        <p>
          Explore my portfolio of web and mobile applications, from educational
          platforms to data analysis tools and practical APIs.
        </p>

        {/* Project 1 */}
        <div className="border border-[#6172F3]/30 p-4 bg-black/40 rounded-xl shadow-sm">
          <h3 className="text-xl font-bold">Featured Project: creative@home</h3>
          <p className="italic">Educational Platform</p>
          <p>
            A website providing roadmaps for various programming fields, helping
            people learn to code for free.
          </p>
          <p className="font-semibold pt-2">Technologies</p>
          <p>Built with Javascript and Sass to create an intuitive experience.</p>
          <p className="font-semibold pt-2">Impact</p>
          <p>
            Helping aspiring developers navigate their learning journey with
            structured guidance.
          </p>
        </div>

        {/* Project 2 */}
        <div className="border border-[#6172F3]/30 p-4 bg-black/40 rounded-xl shadow-sm">
          <h3 className="text-xl font-bold">Featured Project: Opiniometer</h3>
          <ul className="list-decimal pl-6 space-y-1">
            <li>
              <strong>Data Collection:</strong> Gathers recent tweets about
              specific topics.
            </li>
            <li>
              <strong>Sentiment Analysis:</strong> Uses NLP to analyze
              sentiment.
            </li>
            <li>
              <strong>Visualization:</strong> Shows results with Chart.js.
            </li>
          </ul>
        </div>

        {/* Project 3 */}
        <div className="border border-[#6172F3]/30 p-4 bg-black/40 rounded-xl shadow-sm">
          <h3 className="text-xl font-bold">Featured Project: Prayer Time API</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Access prayer times for any city worldwide.</li>
            <li>Provides today and tomorrow's prayer schedules.</li>
            <li>Built with Python, Flask, and Beautiful Soup.</li>
          </ul>
        </div>
      </section>

      <section id="articles" className="space-y-4">
        <h2 className="text-2xl font-semibold">Latest Articles</h2>
        <ul className="space-y-2 list-disc pl-6">
          <li>
            <strong>2024 Retrospective</strong> — January 21, 2025 — 6 min read
          </li>
          <li>
            <strong>Unleash Your Dev Blog with GitHub Issues</strong> — April 2,
            2024 — 3 min read
          </li>
          <li>
            <strong>Code Faster with Vim Shortcuts!</strong> — July 18, 2022 — 2
            min read
          </li>
        </ul>
      </section>

      <section id="contact" className="space-y-4">
        <h2 className="text-2xl font-semibold">Let's Connect</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Specialization:</strong> Front-end Development with React &
            Next.js
          </li>
          <li>
            <strong>Collaboration:</strong> Open to discussing new opportunities
            and projects
          </li>
          <li>
            <strong>Contact:</strong> LinkedIn, Email, or Resume
          </li>
        </ul>
        <p className="text-sm text-gray-500 pt-2">
          Designed and developed by Abdul Rahman using Next.js & Chakra UI.
          Hosted on Vercel.
        </p>
      </section>
    </div>
    </div>
  );
}
