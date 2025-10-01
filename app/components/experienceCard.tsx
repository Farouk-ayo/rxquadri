import Button from "@/components/ui/button";
import React from "react";
import Tag from "@/components/ui/tag";
import { CalendarIcon, LocationIcon } from "@/components/icons";

interface ExperienceCardProps {
  experience: ExperienceProps;
  index: number;
  isLeft: boolean;
}

const ExperienceCard = ({ experience, index, isLeft }: ExperienceCardProps) => {
  return (
    <div
      className={`relative w-full ${isLeft ? "mr-auto" : "ml-auto"}`}
      data-aos={isLeft ? "fade-right" : "fade-left"}
      data-aos-delay={index * 50}
    >
      <div className="backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/30 bg-transparent transition-all duration-300 w-full">
        <Tag className="mb-4">
          <CalendarIcon />
          <span> {experience.period}</span>
        </Tag>

        <div className="mb-4 font-archivo">
          <h3 className="text-xl font-bold text-white mb-2">
            {experience.title}
          </h3>
          <div className="flex items-center gap-2 mb-2 font-sora">
            <span className="text-lg font-semibold text-custom-gradient">
              {experience.company}
            </span>
          </div>
          <div className="flex items-center gap-1 text-white text-sm font-sora">
            <LocationIcon /> {experience.location}
          </div>
        </div>

        <div className="space-y-3">
          {experience.responsibilities.map((responsibility, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-1 h-1 sm:w-2 sm:h-2 bg-custom-gradient rounded-full mt-2 flex-shrink-0" />
              <p className="text-white/75 text-sm leading-relaxed">
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
    </div>
  );
};
export default ExperienceCard;
