"use client";
import { PharmaBinIcon } from "@/components/icons";
import Tag from "@/components/ui/tag";
import { motion } from "framer-motion";

const companiesData: Company[] = [
  {
    id: 1,
    name: "PharmaBin",
    logo: <PharmaBinIcon />,
  },
  {
    id: 2,
    name: "PharmaBin",
    logo: <PharmaBinIcon />,
  },
  {
    id: 3,
    name: "PharmaBin",
    logo: <PharmaBinIcon />,
  },
  {
    id: 4,
    name: "PharmaBin",
    logo: <PharmaBinIcon />,
  },
  {
    id: 5,
    name: "PharmaBin",
    logo: <PharmaBinIcon />,
  },
  {
    id: 6,
    name: "PharmaBin",
    logo: <PharmaBinIcon />,
  },
  {
    id: 7,
    name: "PharmaBin",
    logo: <PharmaBinIcon />,
  },
  {
    id: 8,
    name: "PharmaBin",
    logo: <PharmaBinIcon />,
  },
];

export const infiniteCompaniesData = [
  ...companiesData,
  ...companiesData,
  ...companiesData,
];

const CompaniesCard = () => {
  return (
    <div className="mt-1 overflow-hidden">
      {/* First Row - Left to Right */}
      <div className="relative mb-8">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 60,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex gap-6 w-fit"
        >
          {infiniteCompaniesData.map((company, index) => (
            <div key={`${company.id}-${index}`} className="flex-shrink-0">
              <Tag
                size="lg"
                className="hover:border-white/50 transition-colors duration-300 cursor-pointer"
              >
                {company.logo}
                <span>{company.name}</span>
              </Tag>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Second Row - Right to Left */}
      <div className="relative mb-8">
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            duration: 60,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex gap-6 w-fit"
        >
          {infiniteCompaniesData.reverse().map((company, index) => (
            <div
              key={`reverse-${company.id}-${index}`}
              className="flex-shrink-0"
            >
              <Tag
                size="lg"
                className="hover:border-white/50 transition-colors duration-300 cursor-pointer"
              >
                {company.logo}
                <span>{company.name}</span>
              </Tag>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Third Row - Left to Right (Slower) */}
      <div className="relative">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 60,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex gap-6 w-fit"
        >
          {infiniteCompaniesData.map((company, index) => (
            <div key={`slow-${company.id}-${index}`} className="flex-shrink-0">
              <Tag
                size="lg"
                className="hover:border-white/50 transition-colors duration-300 cursor-pointer"
              >
                {company.logo}
                <span>{company.name}</span>
              </Tag>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CompaniesCard;
