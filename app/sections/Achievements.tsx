"use client";
import React, { useEffect, useState } from "react";
import SectionHeader from "../components/sectionHeader";
import Button from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { achievementsData } from "@/data/achievements";
import AchievementCard from "../components/achievementCard";

const Achievements = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All Achievements");
  const [currentPage, setCurrentPage] = useState(1);
  const achievementsPerPage = 6;

  const categories = [
    { name: "All Achievements", count: achievementsData.length },
    {
      name: "Hackathon",
      count: achievementsData.filter((a) => a.category === "Hackathon").length,
    },
    {
      name: "Innovation Challenge",
      count: achievementsData.filter(
        (a) => a.category === "Innovation Challenge"
      ).length,
    },
    {
      name: "Professional",
      count: achievementsData.filter((a) => a.category === "Professional")
        .length,
    },
  ];

  const filteredAchievements =
    activeFilter === "All Achievements"
      ? achievementsData
      : achievementsData.filter(
          (achievement) => achievement.category === activeFilter
        );

  // Calculate pagination
  const totalPages = Math.ceil(
    filteredAchievements.length / achievementsPerPage
  );
  const startIndex = (currentPage - 1) * achievementsPerPage;
  const currentAchievements = filteredAchievements.slice(
    startIndex,
    startIndex + achievementsPerPage
  );

  // Reset to page 1 when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section
      className=" bg-black text-white px-4 sm:px-8 lg:px-16 pt-28 py-12"
      id="achievements"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader number="4" title="Achievements" align="left" />

        {/* Filter Tabs */}
        <div className="flex justify-center mb-8 max-w-7xl mx-auto px-4">
          <div className="flex gap-2 sm:gap-4 flex-wrap flex-1  max-w-full">
            {categories.map((category) => (
              <Button
                key={category.name}
                size="lgMb"
                variant={activeFilter === category.name ? "filled" : "base"}
                onClick={() => setActiveFilter(category.name)}
                className={`relative min-w-28 md:min-w-52  ${
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

        {/* Achievements Grid */}
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
                {currentAchievements.map((achievement, index) => (
                  <AchievementCard
                    key={achievement.id}
                    achievement={achievement}
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
        {filteredAchievements.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white/50 text-lg">
              No achievements found in the {activeFilter} category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Achievements;
