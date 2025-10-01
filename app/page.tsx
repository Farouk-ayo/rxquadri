"use client";

import Navbar from "./components/navbar";
import SocialLinks from "./components/socialIcons";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Companies from "./sections/Companies";
import Projects from "./sections/Projects";
import Achievements from "./sections/Achievements";
import GetInTouch from "./sections/GetInTouch";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Navbar />
      <SocialLinks />
      <main>
        <Hero />
        <About />
        <Companies />
        <Projects />
        <Achievements />
        <GetInTouch />
      </main>
    </div>
  );
}
