import React from "react";
import { CalendarIcon } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface ProjectCardProps {
  project: ProjectProps;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <div
      className="group relative w-full"
      data-aos="fade-up"
      data-aos-delay={index * 50}
    >
      <div className="backdrop-blur-sm rounded-b-xl rounded-t-4xl border border-white/30 bg-transparent transition-all duration-300 w-full overflow-hidden hover:border-white/50 h-full relative">
        <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="p-6 flex flex-col  justify-start items-start h-full relative">
          <>
            <div className="mb-2 border-none px-0 py-0 m-0 flex flex-row items-center gap-2">
              <CalendarIcon />
              <span>{project.date}</span>
            </div>

            <div className="flex items-center gap-2  font-sora">
              <span className="text-lg font-semibold text-custom-gradient">
                {project.title}
              </span>
            </div>
            <p className="text-white/75 text-sm leading-relaxed mb-4 font-sora">
              {project.description}
            </p>
          </>

          <div className="flex gap-3 flex-wrap text-sm text-center mx-auto justify-center justify-self-end">
            {project.websiteLink && (
              <Link
                className="flex items-center gap-1 transition-colors duration-200 hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
                href={project.websiteLink}
              >
                <span className="text-custom-gradient">View Website</span>
                <ChevronRight className="text-custom-red" />
              </Link>
            )}
            {project.designLink && (
              <Link
                className="flex items-center gap-1 transition-colors duration-200 hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
                href={project.designLink}
              >
                <span className="text-custom-gradient">View Design</span>
                <ChevronRight className="text-custom-red" />
              </Link>
            )}
            {project.githubLink && (
              <Link
                className="flex items-center gap-1 transition-colors duration-200 hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
                href={project.githubLink}
              >
                <span className="text-custom-gradient">View Github</span>
                <ChevronRight className="text-custom-red" />
              </Link>
            )}
            {project.threadLink && (
              <Link
                className="flex items-center gap-1 transition-colors duration-200 hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
                href={project.threadLink}
              >
                <span className="text-custom-gradient">Reply Thread</span>
                <ChevronRight className="text-custom-red" />
              </Link>
            )}
            {project.caseStudyLink && (
              <Link
                className="flex items-center gap-1 transition-colors duration-200 hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
                href={project.caseStudyLink}
              >
                <span className="text-custom-gradient">View Case Study</span>
                <ChevronRight className="text-custom-red" />
              </Link>
            )}
            {project.prototypeLink && (
              <Link
                className="flex items-center gap-1 transition-colors duration-200 hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
                href={project.prototypeLink}
              >
                <span className="text-custom-gradient">View Prototype</span>
                <ChevronRight className="text-custom-red" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
