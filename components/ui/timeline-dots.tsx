import { motion } from "framer-motion";

const TimelineDots = ({ count }: { count: number }) => {
  return (
    <div className="absolute left-8 top-0 h-full flex flex-col justify-between py-8">
      {[...Array(count)].map((_, i) => (
        <div key={i} className="flex items-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="w-2 h-2 sm:w-3 sm:h-3 bg-orange-500 rounded-full flex-shrink-0 relative z-10"
          />
          {i < count - 1 && (
            <div className="absolute top-3 w-0.5 h-[100px] sm:h-[120px] lg:h-[140px] bg-custom-gradient opacity-30 left-[3px] sm:left-[5px]" />
          )}
        </div>
      ))}
    </div>
  );
};
export default TimelineDots;
