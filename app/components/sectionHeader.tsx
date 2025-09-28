"use client";
import { useState, useEffect } from "react";

interface SectionHeaderProp {
  number: string;
  title: string;
  align: "left" | "right";
}

const SectionHeader = ({
  number,
  title,
  align = "left",
}: SectionHeaderProp) => {
  const isLeft = align === "left";

  const [dotCount, setDotCount] = useState(5);

  useEffect(() => {
    const updateDotCount = () => {
      setDotCount(window.innerWidth < 640 ? 3 : 5);
    };
    updateDotCount();
    window.addEventListener("resize", updateDotCount);
    return () => window.removeEventListener("resize", updateDotCount);
  }, []);

  return (
    <div className="w-full mb-8 px-2 sm:px-0">
      <div
        className={`flex items-center gap-1 xs:gap-2 sm:gap-3 md:gap-4 w-full ${
          isLeft ? "" : "flex-row-reverse"
        }`}
      >
        <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-sora text-custom-gradient whitespace-nowrap flex-shrink-0 leading-tight">
          {title}
        </h2>

        <div className="flex items-center flex-1 min-w-0 overflow-hidden">
          <div
            className={`flex items-center flex-1 ${
              isLeft ? "" : "flex-row-reverse"
            }`}
          >
            <div
              className={`flex-1 h-0.5 sm:h-1 relative min-w-[40px] sm:min-w-[60px]`}
            >
              <div
                className="absolute inset-0 opacity-60 sm:opacity-50"
                style={{
                  background: "var(--gradient-custom)",
                  maskImage:
                    "repeating-linear-gradient(to right, transparent 0px, transparent 2px, black 2px, black 6px)",
                  WebkitMaskImage:
                    "repeating-linear-gradient(to right, transparent 0px, transparent 2px, black 2px, black 6px)",
                }}
              ></div>
              <div className="flex justify-between items-center h-full">
                {[...Array(dotCount)].map((_, i) => (
                  <div key={i} className="flex items-center w-full">
                    {!isLeft && (
                      <div className="flex-1 min-w-[20px] sm:min-w-[30px] md:min-w-[40px]"></div>
                    )}
                    <div className="w-1 h-1 xs:w-1.5 xs:h-1.5 sm:w-2 sm:h-2 bg-custom-gradient rounded-full flex-shrink-0 shadow-sm"></div>
                    {isLeft && (
                      <div className="flex-1 min-w-[20px] sm:min-w-[30px] md:min-w-[40px]"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-custom-gradient flex items-center justify-center font-semibold  text-xl lg:text-2xl xl:text-3xl font-sora flex-shrink-0 shadow-lg">
              {number}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
