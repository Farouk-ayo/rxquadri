"use client";
import React, { useEffect, useState } from "react";
import SectionHeader from "../components/sectionHeader";
import Button from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { projectsData } from "@/data/projects";
import ProjectCard from "../components/projectCard";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All Projects");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const categories = [
    { name: "All Projects", count: projectsData.length },
    {
      name: "Websites",
      count: projectsData.filter((p) => p.category === "Websites").length,
    },
    {
      name: "Mobile Apps",
      count: projectsData.filter((p) => p.category === "Mobile Apps").length,
    },
    {
      name: "Web3",
      count: projectsData.filter((p) => p.category === "Web3").length,
    },
    {
      name: "NGOs",
      count: projectsData.filter((p) => p.category === "NGOs").length,
    },
  ];

  const filteredProjects =
    activeFilter === "All Projects"
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = filteredProjects.slice(
    startIndex,
    startIndex + projectsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className="min-h-screen bg-black text-white px-4 sm:px-8 lg:px-16 py-8 md:py-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader number="3" title="Projects" align="left" />

        {/* Filter Tabs */}
        <div className="flex gap-2 sm:gap-4 justify-center mb-8  max-w-7xl mx-auto overflow-x-auto overflow-y-hidden">
          <div className="flex gap-2 sm:gap-4 min-w-max">
            {categories.map((category) => (
              <Button
                key={category.name}
                size="lg"
                variant={activeFilter === category.name ? "filled" : "base"}
                onClick={() => setActiveFilter(category.name)}
                className={`relative min-w-52  ${
                  !(activeFilter === category.name)
                    ? "text-white/75 border-white/30 bg-transparent border-2 hover:border-transparent hover-border-custom-gradient hover-text-custom-gradient"
                    : "border-none"
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="relative max-w-7xl mx-auto mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {currentProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition-all duration-300 ${
                  currentPage === page
                    ? "bg-gradient-to-r from-orange-400 to-red-500 text-white"
                    : "border border-white/30 text-white/75 hover:border-white/50 hover:text-white"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        )}

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white/50 text-lg">
              No projects found in the {activeFilter} category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
