"use client";

import React from "react";
import Button from "@/components/ui/button";
import Link from "next/link";
import Typewriter from "typewriter-effect";

const Hero: React.FC = () => {
  return (
    <section
      className="relative z-10   max-w-5xl    px-2 sm:px-16 mx-auto text-center flex justify-center items-center gap-4 min-h-screen"
      id="home"
    >
      <div className="space-y-4 sm:space-y-6 text-center">
        <p className="text-custom-gradient text-2xl sm:text-4xl font-normal ">
          Hello, I am
        </p>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[84px] font-bold leading-tight animate-slide-up">
          <span className="block">Durosinmi Quadri</span>
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3 ">
          <div className="text-lg sm:text-xl lg:text-[32px] min-h-[1.2em] flex items-center justify-center">
            <Typewriter
              options={{
                strings: [
                  "Founder & CEO @ PharmaBin 🚀",
                  "Pharmacist 👦",
                  "UI/UX Designer 🎨",
                  "Top 10 African Youth Voices in Climate-Health Innovation 🎤",
                  "PAGIA 2024 Awardee 🥇",
                  "SDGs & Climate Action Advocate 🌍",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 30,
                cursor: "|",
                wrapperClassName: "typewriter-wrapper",
                cursorClassName: "typewriter-cursor",
              }}
            />
          </div>
        </div>

        <p className=" leading-relaxed  mx-auto  font-light text-sm sm:text-xl text-white/75 ">
          &quot;I &apos;m A UI/UX Designer Passionate About Creating Intuitive,
          Impactful Digital Experiences That Solve Real-World Problems. Beyond
          Design, I Co-Founded{" "}
          <span className="text-custom-red font-normal">PharmaBin</span> And
          Advocate For Climate Action And SDGs&quot;
        </p>

        <div className="flex flex-col  sm:flex-row gap-4 justify-center items-center pt-4">
          <Button
            variant="filled"
            size="lg"
            className=" cursor-pointer min-w-56
            "
          >
            <Link href={"#"} className="">
              View Projects
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className=" cursor-pointer min-w-56"
          >
            <Link href={"#"} className="">
              Get In Touch
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
