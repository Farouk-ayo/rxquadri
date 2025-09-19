import React from "react";
import Button from "@/components/ui/button";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="relative z-10 top-24  max-w-7xl   py-8 sm:py-24 px-2 sm:px-16 mx-auto text-center flex justify-center items-center gap-4">
      <div className="space-y-4 sm:space-y-6 text-center">
        <p className="text-orange-400 text-base sm:text-lg font-medium animate-fade-in">
          Hello, I am
        </p>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight animate-slide-up">
          <span className="block">Durosinmi Quadri</span>
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3 animate-fade-in-delay">
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300">
            Co-Founder & CTO
          </p>
          <div className="flex items-center space-x-1">
            <span className="text-orange-400">@</span>
            <span className="text-orange-400 font-semibold">PharmaBin</span>
            <span className="text-xl sm:text-2xl">🚀</span>
          </div>
        </div>

        <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0 text-sm sm:text-base animate-fade-in-delay-2">
          `&lsquo;`I`&apos;`m A UI/UX Designer Passionate About Creating
          Intuitive, Impactful Digital Experiences That Solve Real-World
          Problems. Beyond Design, I Co-Founded{" "}
          <span className="text-orange-400 font-semibold">PharmaBin</span> And
          Advocate For Climate Action And SDGs `&quot;`
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in-delay-3">
          <Button variant="filled" size="lg" className=" cursor-pointer">
            <Link href={"#"} className="">
              View Projects
            </Link>
          </Button>
          <Button variant="outline" size="lg" className=" cursor-pointer">
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
