import Button from "@/components/ui/button";
import React from "react";
import { motion } from "framer-motion";

interface ExperienceCardProps {
  experience: ExperienceProps;
  index: number;
  isLeft: boolean;
}

const ExperienceCard = ({ experience, index, isLeft }: ExperienceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`relative w-full  ${isLeft ? "mr-auto" : "ml-auto"}`}
    >
      {/* Card Container - matches your design */}
      <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300 w-full">
        {/* Period Badge */}
        <div className="flex items-center mb-4">
          <div className="bg-gray-800/70 px-3 py-1.5 rounded-full text-gray-300 text-sm font-medium flex items-center gap-2">
            📅 {experience.period}
          </div>
        </div>

        {/* Title and Company */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white mb-2 font-sora">
            {experience.title}
          </h3>
          {/* Company name with gradient - removed companyColor prop */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg font-semibold text-custom-gradient">
              {experience.company}
            </span>
          </div>
          {/* Location */}
          <div className="flex items-center gap-1 text-gray-400 text-sm">
            📍 {experience.location}
          </div>
        </div>

        {/* Responsibilities List */}
        <div className="space-y-3 mb-6">
          {experience.responsibilities.map((responsibility, i) => (
            <div key={i} className="flex items-start gap-3">
              {/* Orange dot bullet point */}
              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
              <p className="text-gray-300 text-sm leading-relaxed">
                {responsibility}
              </p>
            </div>
          ))}
        </div>

        {/* Action Buttons - only show if links exist */}
        {(experience.liveLink || experience.figmaLink) && (
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
        )}
      </div>
    </motion.div>
  );
};
export default ExperienceCard;
