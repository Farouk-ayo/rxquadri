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
  title: "RxQuadri",
  description:
    "Portfolio of a UI/UX Designer creating intuitive digital experiences, co-founder of PharmaBin, and advocate for climate action & the SDGs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${rubik.variable} ${sora.variable} ${archivo.variable} f font-sans antialiased `}
      >
        <main className=" ">{children}</main>
      </body>
    </html>
  );
}
