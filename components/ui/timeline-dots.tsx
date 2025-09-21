import { motion } from "framer-motion";

const TimelineDots = ({ count }: { count: number }) => {
  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 h-full z-10">
      {/* Main timeline container */}
      <div className="w-0.5 h-full relative">
        {/* Dashed gradient line background */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background: "var(--gradient-custom)",
            maskImage:
              "repeating-linear-gradient(to bottom, transparent 0px, transparent 3px, black 3px, black 8px)",
            WebkitMaskImage:
              "repeating-linear-gradient(to bottom, transparent 0px, transparent 3px, black 3px, black 8px)",
          }}
        />

        {/* Timeline dots positioned along the line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full flex flex-col justify-between ">
          {[...Array(count)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: i * 0.15 + 0.3,
                duration: 0.4,
                ease: "easeOut",
              }}
              className="w-1 h-1 sm:w-2 sm:h-2 bg-custom-gradient rounded-full flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineDots;
