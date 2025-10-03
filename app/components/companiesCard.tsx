"use client";
import Tag from "@/components/ui/tag";
import { motion } from "framer-motion";
import Image from "next/image";

const companiesData: Company[] = [
  {
    id: 1,
    name: "PharmaBin",
    logo: (
      <Image
        src="/companies/pharmabin.png"
        alt="PharmaBin"
        width={32}
        height={32}
        className="object-contain"
      />
    ),
  },
  {
    id: 2,
    name: "Apex Games",
    logo: (
      <Image
        src="/companies/apex.png"
        alt="Apex Games"
        width={32}
        height={32}
        className="object-contain"
      />
    ),
  },
  {
    id: 3,
    name: "BitQuid Labs",
    logo: (
      <Image
        src="/companies/bitquid.png"
        alt="BitQuid Labs"
        width={32}
        height={32}
        className="object-contain"
      />
    ),
  },

  {
    id: 4,
    name: "",
    logo: (
      <Image
        src="/companies/jimoh.png"
        alt="Jimoh"
        width={90}
        height={32}
        className="object-contain"
      />
    ),
  },
  {
    id: 5,
    name: "",
    logo: (
      <Image
        src="/companies/drip.png"
        alt="Drip"
        width={90}
        height={32}
        className="object-contain"
      />
    ),
  },

  {
    id: 6,
    name: "ZdsLogic Technologies",
    logo: (
      <Image
        src="/companies/zds.png"
        alt="ZdsLogic"
        width={32}
        height={32}
        className="object-contain"
      />
    ),
  },
  {
    id: 7,
    name: "Al-Burhan Media",
    logo: (
      <Image
        src="/companies/burhan.png"
        alt="Burhan"
        width={32}
        height={32}
        className="object-contain"
      />
    ),
  },

  {
    id: 8,
    name: "PANS OAU",
    logo: (
      <Image
        src="/companies/pans.png"
        alt="PANS OAU"
        width={32}
        height={32}
        className="object-contain"
      />
    ),
  },

  {
    id: 9,
    name: "",
    logo: (
      <Image
        src="/companies/upwork.png"
        alt="Upwork"
        width={90}
        height={32}
        className="object-contain"
      />
    ),
  },
  {
    id: 10,
    name: "MSSN OAU",
    logo: (
      <Image
        src="/companies/mssn.png"
        alt="Mssn"
        width={32}
        height={32}
        className="object-contain"
      />
    ),
  },

  {
    id: 11,
    name: "",
    logo: (
      <Image
        src="/companies/clienttrip.png"
        alt="ClientTrip"
        width={90}
        height={32}
        className="object-contain"
      />
    ),
  },
  {
    id: 12,
    name: "",
    logo: (
      <Image
        src="/companies/solexe.png"
        alt="Solexe"
        width={90}
        height={32}
        className="object-contain"
      />
    ),
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
                size="xl"
                className="hover:border-white/50 transition-colors duration-300 cursor-pointer flex items-center h-20"
              >
                <div> {company.logo}</div>
                <div>{company.name}</div>
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
                size="xl"
                className="hover:border-white/50 transition-colors duration-300 cursor-pointer h-20 "
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
                size="xl"
                className="hover:border-white/50 transition-colors duration-300 cursor-pointer h-20 flex justify-center"
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
