import React from "react";
import { socialLinks } from "../components/socialIcons";
import Link from "next/link";
import Button from "@/components/ui/button";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[calc(100vh-200px)]">
        {/* Mobile Social Links */}
        <div className="lg:hidden order-3 col-span-1">
          <div className="flex gap-3 justify-center">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800/50 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-orange-400 hover:border-orange-400 hover:bg-gray-800 transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-8 order-1 lg:order-1 text-center lg:text-left">
          <div className="space-y-4 sm:space-y-6">
            <p className="text-orange-400 text-base sm:text-lg font-medium animate-fade-in">
              Hello, I am
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight animate-slide-up">
              <span className="block">Durosinmi</span>
              <span className="block">Quadri</span>
            </h1>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-3 animate-fade-in-delay">
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
              <span className="text-orange-400 font-semibold">PharmaBin</span>{" "}
              And Advocate For Climate Action And SDGs `&quot;`
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 animate-fade-in-delay-3">
              <Button variant="filled">View Projects</Button>
              <Button variant="outline">Get In Touch</Button>
            </div>
          </div>
        </div>

        {/* Profile Image */}
        <div className="lg:col-span-4 order-2 lg:order-2">
          <div className="relative animate-float">
            <div className="w-full max-w-sm lg:max-w-md mx-auto">
              <div className="aspect-[4/5] relative">
                <Image
                  width={500}
                  src="/api/placeholder/400/500"
                  height={500}
                  alt="Durosinmi Quadri"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
                {/* Orange accent border */}
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl -z-10 opacity-20 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
