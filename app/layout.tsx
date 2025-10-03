import type { Metadata } from "next";
import { Archivo, Rubik, Sora } from "next/font/google";
import "./globals.css";

export const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-rubik",
});

export const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-sora",
});

export const archivo = Archivo({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "RxQuadri | Product Designer & Healthcare Innovator Portfolio",
  description:
    "Durosinmi Quadri is a Product Designer specializing in healthcare solutions, Web3 platforms, and sustainable innovation. Co-founder of PharmaBin, advocate for climate action and the SDGs. Explore my design portfolio showcasing UI/UX work across mobile apps, websites, and Web3 projects.",
  keywords: [
    "RxQuadri",
    "Durosinmi Quadri",
    "Quadri Durosinmi",
    "Product Designer Portfolio",
    "UI/UX Designer",
    "Healthcare Design",
    "Pharmabin",
    "PharmaBin Co-founder",
    "Web3 Designer",
    "Sustainable Innovation",
    "Climate Action Advocate",
    "SDG Advocate",
    "Nigerian Designer",
    "Obafemi Awolowo University",
    "OAU Designer",
    "Pharmacy Student Designer",
    "Medical App Design",
    "Blockchain Design",
    "NFT Marketplace Design",
    "Mobile App Design",
    "Website Design",
    "Landing Page Design",
    "Healthcare Innovation",
    "Pharmaceutical Waste Management",
    "Mental Health App Design",
    "Fintech Design",
    "Educational Platform Design",
    "NGO Website Design",
    "Figma Designer",
    "Design System",
    "User Experience Design",
    "User Interface Design",
    "Product Design Portfolio",
    "Design Case Studies",
    "Award-winning Designer",
    "Innovation Challenge Winner",
    "Hackathon Winner",
    "Medlenna Winner",
    "SAYPHIIN Winner",
    "Top 10 African Youth Voices",
    "Climate Health Innovation",
    "Hult Prize Winner",
    "PAGIA Award",
    "Young Researcher",
    "Design Thinking",
    "Human-Centered Design",
    "Accessible Design",
    "Inclusive Design",
    "Designer in Nigeria",
    "Designer in Ile-Ife",
    "Freelance Designer",
    "Design for Social Impact",
  ],
  robots: "index, follow",
  openGraph: {
    title: "RxQuadri | Product Designer & Healthcare Innovator Portfolio",
    description:
      "Explore the portfolio of Durosinmi Quadri (RxQuadri), a Product Designer creating impactful healthcare solutions, Web3 platforms, and sustainable innovations. Co-founder of PharmaBin and advocate for climate action.",
    url: "https://rxquadri.vercel.app",
    type: "website",
    images: [
      {
        url: "https://rxquadri.vercel.app/rxquadri-og.png",
        alt: "RxQuadri | Product Designer & Healthcare Innovator Portfolio",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RxQuadri | Product Designer & Healthcare Innovator",
    description:
      "Product Designer specializing in healthcare solutions, Web3 platforms, and sustainable innovation. Co-founder of PharmaBin. Discover my design work and case studies.",
    images: "https://rxquadri.vercel.app/rxquadri-og.png",
    creator: "@DUROSINMIQUADR1",
  },
  authors: [
    {
      name: "Durosinmi Quadri",
      url: "https://rxquadri.vercel.app",
    },
  ],
  creator: "Durosinmi Quadri (RxQuadri)",
  publisher: "RxQuadri",
  alternates: {
    canonical: "https://rxquadri.vercel.app",
  },
  category: "Design Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${rubik.variable} ${sora.variable} ${archivo.variable} font-sans antialiased `}
      >
        <main className=" ">{children}</main>
      </body>
    </html>
  );
}
