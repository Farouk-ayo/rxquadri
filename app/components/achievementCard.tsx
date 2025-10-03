import React from "react";
import { CalendarIcon } from "@/components/icons";
import Tag from "@/components/ui/tag";
import Image from "next/image";
import Link from "next/link";

interface AchievementCardProps {
  achievement: AchievementProps;
  index: number;
}

export const AchievementCard = ({
  achievement,
  index,
}: AchievementCardProps) => {
  return (
    <Link
      href={achievement.link || ""}
      target="_blank"
      rel="noopener noreferrer"
      className="relative backdrop-blur-sm rounded-xl border border-white/30 bg-transparent transition-all duration-300 w-full overflow-hidden hover:border-white/50 hover:shadow-lg hover:shadow-white/10 min-h-[450px] md:min-h-[500px] h-full cursor-pointer"
    >
      <div
        className="group relative w-full h-full"
        data-aos="fade-up"
        data-aos-delay={index * 50}
      >
        <div className="relative backdrop-blur-sm rounded-xl border border-white/30 bg-transparent transition-all duration-300 w-full overflow-hidden hover:border-white/50 min-h-[450px] md:min-h-[500px] h-full">
          <div className="absolute inset-0 w-full h-[80%]">
            <Image
              src={achievement.image || ""}
              alt={achievement.title}
              fill
              className="object-cover object-center transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          </div>
          <div className="relative z-10 p-6 flex flex-col justify-end h-full">
            <div className=" h-[50%]">
              <Tag className="mb-4 w-fit text-base ">
                <CalendarIcon />
                <span>{achievement.date}</span>
              </Tag>

              <h3 className="text-base md:text-lg font-semibold text-custom-gradient mb-2 font-sora">
                {achievement.title}
              </h3>

              <p className="text-white/75 text-xs md:text-sm leading-relaxed font-sora">
                {achievement.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AchievementCard;
