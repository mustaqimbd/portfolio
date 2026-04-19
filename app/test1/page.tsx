import Image from "next/image";

const gradients = [
  "bg",
  // "bg-gradient-to-br from-[#0B1318] to-[#1C242B]",
  // "bg-gradient-to-br from-[#0D1A20] to-[#203040]",
  // "bg-gradient-to-br from-[#122022] to-[#254148]",
  // "bg-gradient-to-br from-[#0F1C17] to-[#1E392E]",
  // "bg-gradient-to-br from-[#0A1411] to-[#18322D]",
  "bg-algo-gradient-1",
  "bg-algo-gradient-2",
  "bg-algo-gradient-3",
  "bg-algo-gradient-4",
  "bg-algo-gradient-5",
  "bg-algo-sim-1",
  "bg-algo-sim-2",
  "bg-algo-sim-3",
  "bg-algo-sim-4",
  "bg-algo-sim-5",
];

export default function Home() {
  return (
    <>
      {gradients.map((gradient, index) => (
        <section key={index} className={`min-h-screen mb-10 flex flex-col justify-center items-center text-center px-4 ${gradient} relative`}>
          <div className="absolute inset-0 -z-10 bg-linear-to from-green-900/30 via-transparent to-transparent"></div>
          <h1 className="text-5xl md:text-6xl font-bold text-gradient">
            Building Scalable & Elegant Web Apps
          </h1>
          <p className="mt-4 text-secondary max-w-2xl">
            I’m Mustaqim Khan — a full stack developer with 5 years of experience specializing in React, Next.js, Node.js and TypeScript.
          </p>
          <button className="mt-8 btn-primary">
            View My Work
          </button>
        </section>
      ))}

      <section className="min-h-screen bg-secondary flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-gradient">
          Building Scalable & Elegant Web Apps
        </h1>
        <p className="mt-4 text-secondary max-w-2xl">
          I’m Mustaqim Khan — a full stack developer with 5 years of experience specializing in React, Next.js, Node.js and TypeScript.
        </p>
        <button className="mt-8 btn-primary">
          View My Work
        </button>
      </section>

      <div className="flex h-[430px] items-center justify-center bg-linear-to-r from-[#020617] to-[#0B1A3C]">

      </div>
      <div className="flex h-[430px] mt-10 items-center justify-center bg-linear-to-r from-[#050B1F] via-[#0A1A4A] to-[#2563EB]">

      </div>
      <div className="flex h-[430px] mt-10 items-center justify-center bg-linear-to-r from-[#2563EB] via-[#3B82F6] to-[#60A5FA]">

      </div>
    </>
  );
}
