import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import InitGTM from "./components/GTM/InitGTM";
import { Suspense } from "react";
import PageTracking from "./components/GTM/PageTracking";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mustaqim Khan | Full Stack Developer",
  description: "Full Stack Developer with 5+ years of experience building scalable web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-background text-slate-200 antialiased`}>
        <InitGTM />
        <Suspense fallback={null}>
          <PageTracking />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
