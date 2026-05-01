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
      {/* <head> */}
        {/* Google Tag Manager */}
        {/* <script>
          (function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
            var f = d.getElementsByTagName(s)[0], j = d.createElement(s);
            j.async = true; j.src = "https://user.mustaqimkhan.com/6esaqpzxub.js?" + i;
            f.parentNode.insertBefore(j, f);s
          })(window, document, 'script', 'dataLayer', '4m60w=CxFFPSQ8TEY4JisoQyYwVRRISlRBVwUdXxgNCQQQEBoPHhAbHl8CHA8%3D');
        </script> */}
        {/* End Google Tag Manager */}
      {/* </head> */}
      <body className={`${inter.className} bg-background text-slate-200 antialiased`}>
        <InitGTM />
        <Suspense fallback={null}>
          <PageTracking />
        </Suspense>
        {children}
        {/* Google Tag Manager (noscript) */}
        {/* <noscript><iframe src="https://user.mustaqimkhan.com/ns.html?id=GTM-5ZSSR3WQ" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript> */}
        {/* End Google Tag Manager (noscript) */}
      </body>
    </html>
  );
}
