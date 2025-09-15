import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RxQuadri",
  description:
    "Portfolio of a UI/UX Designer creating intuitive digital experiences, co-founder of PharmaBin, and advocate for climate action & the SDGs",
  //   keywords: [
  //     "Farouk Mustapha",
  //     "Farouk",
  //     "Faroukayo",
  //     "Farouk Ayo",
  //     "dev_farouk",
  //     "Farouk Mustapha Portfolio",
  //     "Farouk Mustapha Frontend Engineer",
  //     "dev",
  //     "Dev Farouk",
  //     "devfarouk",
  //     "Frontend Engineer Portfolio",
  //     "React Developer",
  //     "Next.js Developer",
  //     "TypeScript Developer",
  //     "Web Developer",
  //     "Tech Career",
  //     "Developer in Lagos Nigeria",
  //     "devfarouk",
  //     "Frontend Engineer",
  //     "Web Developer Portfolio",
  //     "React Developer",
  //     "Next.js Developer",
  //     "TypeScript Developer",
  //     "Tailwind CSS",
  //     "Shadcn/ui",
  //     "Chakra UI",
  //     "Framer Motion",
  //     "Frontend Development",
  //     "Portfolio",
  //     "Web Application Development",
  //     "Tech Career",
  //     "Developer in Lagos Nigeria",
  //     "Pathpalz",
  //     "Berrystamp",
  //     "DeepFocus",
  //     "JustDo Startup",
  //     "Progressive Web Apps",
  //     "Mentorship",
  //     "React Projects",
  //     "Next.js Projects",
  //     "Frontend Skills",
  //     "Tech Collaboration",
  //     "Web Design",
  //     "Developer for hire",
  //     "Open to work",
  //   ],
  //   robots: "index, follow",
  //   openGraph: {
  //     title: "Farouk Mustapha | Frontend Engineer Portfolio",
  //     description:
  //       "Explore the portfolio of Farouk Mustapha, a Frontend Engineer skilled in React, Next.js, and TypeScript. Discover engaging web applications and progressive web app projects.",
  //     url: "https://devfarouk.vercel.app ",
  //     type: "website",
  //     images: [
  //       {
  //         url: "https://devfarouk.vercel.app/devfarouk.png",
  //         alt: " Farouk Mustapha | Frontend Engineer Portfolio",
  //         width: 1200,
  //         height: 630,
  //       },
  //     ],
  //   },
  //   twitter: {
  //     card: "summary_large_image",
  //     title: "Farouk Mustapha | Frontend Engineer Portfolio",
  //     description:
  //       "Frontend Engineer specializing in building WebApps with React, Next.js, and TypeScript. Discover my works and projects.",
  //     images: "https://devfarouk.vercel.app/devfarouk.png",
  //   },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} `}>
        <main className=" ">{children}</main>
      </body>
    </html>
  );
}
