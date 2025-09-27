"use client";
import React from "react";
import SectionHeader from "../components/sectionHeader";
import Image from "next/image";

const GetInTouch = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:durosinmiquadril@gmail.com";
  };

  const handleBuyMeCoffeeClick = () => {
    // Replace with your actual Buy Me a Coffee link
    window.open("https://buymeacoffee.com/quadri", "_blank");
  };

  return (
    <section className=" bg-black text-white px-4 sm:px-8 lg:px-16 py-8 md:py-10 ">
      <div className="max-w-7xl mx-auto w-full">
        <SectionHeader number="5" title="Get In Touch" align="left" />

        <div className="mt-16 w-full mx-auto">
          <div className="backdrop-blur-sm rounded-3xl border border-white/20 bg-transparent p-8 sm:p-12 lg:p-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-medium mb-8">
                Thanks for stopping by{" "}
                <span className="inline-block animate-bounce">👋</span>
              </h2>

              <p className="text-white/75 text-lg sm:text-xl leading-relaxed max-w-4xl mx-auto mb-8 font-light font-sora">
                Contact me if you are interested in having me on your team,
                working on your project, seeking mentorship, or just want to say
                hello. If you think we might be a good fit for one another, send
                me an email to{" "}
                <button
                  onClick={handleEmailClick}
                  className="text-custom-gradient hover:text-orange-400 transition-colors duration-300 underline decoration-orange-400/50 hover:decoration-orange-400 underline-offset-4"
                >
                  durosinmiquadril@gmail.com
                </button>
              </p>
            </div>
          </div>
        </div>
        {/* Buy Me a Coffee Section */}
        <div className="text-center flex items-center gap-1 justify-center py-15">
          <p className="text-white/75 text-lg">
            Would you like to support my journey?
          </p>
          <div className="cursor-pointer">
            <Image
              src="/buy-me-coffee.png"
              alt="buy me coffee"
              width={200}
              objectFit="cover"
              height={50}
              onClick={handleBuyMeCoffeeClick}
              className="transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
      {/* Copyright */}
      <footer className="bg-black text-white border-t border-white/20 py-8 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2  ">
              <span className="text-lg">©</span>
              <span>2025 All rights reserved</span>
            </div>

            {/* Credits */}
            <div className="text-white font text-sm md:text-base text-center md:text-right">
              <span>Designed by </span>
              <button
                onClick={() => window.open("mailto:rxqu@dri", "_blank")}
                className="text-custom-yellow transition-colors duration-300"
              >
                RxQu@dri
              </button>
              <span> & Developed by </span>
              <button
                onClick={() =>
                  window.open("https://devfarouk.vercel.app", "_blank")
                }
                className="text-custom-red transition-colors duration-300"
              >
                DevFarouk
              </button>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default GetInTouch;
