import Button from "@/components/ui/button";
import React from "react";
import { motion } from "framer-motion";

const ExperienceCard = ({
  experience,
  index,
}: {
  experience: ExperienceProps;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300 mb-6 ml-16"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="bg-gray-800/50 px-3 py-1 rounded-full text-gray-300 text-sm font-medium">
          📅 {experience.period}
        </div>
      </div>

      {/* Title and Company */}
      <div className="mb-4">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-sora">
          {experience.title}
        </h3>
        <div className="flex items-center gap-2 mb-2">
          <span className={`text-lg font-semibold ${experience.companyColor}`}>
            {experience.company}
          </span>
        </div>
        <div className="flex items-center gap-1 text-gray-400 text-sm">
          📍 {experience.location}
        </div>
      </div>

      {/* Responsibilities */}
      <div className="space-y-3 mb-6">
        {experience.responsibilities.map((responsibility, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {responsibility}
            </p>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 flex-wrap">
        {experience.liveLink && (
          <Button variant="outline" size="sm">
            Live Website
          </Button>
        )}
        {experience.figmaLink && (
          <Button variant="link" size="sm">
            Figma Link
          </Button>
        )}
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
