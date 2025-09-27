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

  return (
    <div className="w-full mb-8">
      <div
        className={`flex items-center gap-2 sm:gap-4 w-full ${
          isLeft ? "" : "flex-row-reverse"
        }`}
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-sora text-custom-gradient whitespace-nowrap flex-shrink-0">
          {title}
        </h2>

        <div className="flex items-center flex-1 min-w-0">
          <div
            className={`flex items-center flex-1 ${
              isLeft ? "" : "flex-row-reverse"
            }`}
          >
            <div className={`flex-1   h-0.5 relative min-w-[60px]  `}>
              <div
                className="absolute inset-0 opacity-50"
                style={{
                  background: "var(--gradient-custom)",
                  maskImage:
                    "repeating-linear-gradient(to right, transparent 0px, transparent 3px, black 3px, black 8px)",
                  WebkitMaskImage:
                    "repeating-linear-gradient(to right, transparent 0px, transparent 3px, black 3px, black 8px)",
                }}
              ></div>
              <div className="flex justify-between items-center h-full ">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex items-center">
                    {!isLeft && <div className="flex-1 min-w-[40px]"></div>}
                    <div className="w-1 h-1 sm:w-2 sm:h-2 bg-custom-gradient rounded-full flex-shrink-0"></div>
                    {isLeft && <div className="flex-1 min-w-[40px]"></div>}{" "}
                  </div>
                ))}
              </div>
            </div>

            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-20 md:h-20 rounded-full bg-custom-gradient flex items-center justify-center  font-semibold text-sm sm:text-xl md:text-[32px] font-sora flex-shrink-0">
              {number}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
