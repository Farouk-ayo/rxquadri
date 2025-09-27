import React from "react";
import { motion } from "framer-motion";
import { CalendarIcon } from "@/components/icons";
import Tag from "@/components/ui/tag";
import Image from "next/image";

interface AchievementCardProps {
  achievement: AchievementProps;
  index: number;
}

const AchievementCard = ({ achievement, index }: AchievementCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative w-full h-full"
    >
      <div className="backdrop-blur-sm rounded-xl border border-white/30 bg-transparent transition-all duration-300 w-full overflow-hidden hover:border-white/50 min-h-[400px] flex flex-col h-full">
        {/* Achievement Image */}
        {achievement.image ? (
          <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden flex-shrink-0">
            <Image
              src={achievement.image}
              alt={achievement.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        ) : (
          <div className="relative w-full h-48 sm:h-56 md:h-64 bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center justify-center overflow-hidden flex-shrink-0">
            <div className="text-4xl sm:text-6xl opacity-20">🏆</div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        )}

        {/* Achievement Content */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Date Tag */}
          <Tag className="mb-4 w-fit">
            <CalendarIcon />
            <span>{achievement.date}</span>
          </Tag>

          {/* Achievement Title */}
          <div className="flex items-center gap-2 mb-2 font-sora">
            <span className="text-lg font-semibold text-custom-gradient">
              {achievement.title}
            </span>
          </div>

          {/* Achievement Description */}
          <p className="text-white/75 text-sm leading-relaxed font-sora flex-grow">
            {achievement.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AchievementCard;
