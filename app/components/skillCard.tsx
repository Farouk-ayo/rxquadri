import {
  FigmaIcon,
  AdobeIcon,
  HtmlIcon,
  CssIcon,
  PrototypeIcon,
  ArchitectureIcon,
  TestingIcon,
  WireframeIcon,
  ResponsiveIcon,
  GamingIcon,
  BlockchainIcon,
  InteractionIcon,
  UiuxIcon,
  ResearchIcon,
  DefiIcon,
  NftIcon,
  VisualIcon,
  GraphicsIcon,
  SustainableIcon,
  CommunicationIcon,
  TimeIcon,
  CollaborationIcon,
  ProblemSolvingIcon,
  AttentionIcon,
  FamiliarityIcon,
  StayUpToDateIcon,
} from "@/components/icons";
import Tag from "@/components/ui/tag";
import Image from "next/image";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  id: number;
  title: string;
  skills: Skill[];
}

export const skillData: SkillCategory[] = [
  {
    id: 1,
    title: "Technical",
    skills: [
      { name: "Figma", icon: <FigmaIcon /> },
      { name: "Adobe XD", icon: <AdobeIcon /> },
      { name: "HTML", icon: <HtmlIcon /> },
      { name: "CSS", icon: <CssIcon /> },
      { name: "Prototyping", icon: <PrototypeIcon /> },
      { name: "Information Architecture", icon: <ArchitectureIcon /> },
      { name: "Usability Testing", icon: <TestingIcon /> },
      { name: "Wireframing", icon: <WireframeIcon /> },
      { name: "Responsive Web Design", icon: <ResponsiveIcon /> },
    ],
  },
  {
    id: 2,
    title: "Design",
    skills: [
      { name: "Gaming", icon: <GamingIcon /> },
      { name: "Blockchain", icon: <BlockchainIcon /> },
      { name: "Interaction", icon: <InteractionIcon /> },
      { name: "UI/UX", icon: <UiuxIcon /> },
      { name: "User Research & Testing", icon: <ResearchIcon /> },
      { name: "DeFi", icon: <DefiIcon /> },
      { name: "NFTs", icon: <NftIcon /> },
      { name: "Visual", icon: <VisualIcon /> },
      { name: "Graphic", icon: <GraphicsIcon /> },
      { name: "Sustainable & Human-Centered", icon: <SustainableIcon /> },
    ],
  },
  {
    id: 3,
    title: "Soft",
    skills: [
      { name: "Communication skill", icon: <CommunicationIcon /> },
      { name: "Time management", icon: <TimeIcon /> },
      { name: "Collaboration", icon: <CollaborationIcon /> },
      { name: "Problem solving", icon: <ProblemSolvingIcon /> },
      { name: "Attention to details", icon: <AttentionIcon /> },
      { name: "Familiarity with principles", icon: <FamiliarityIcon /> },
      {
        name: "Stay up-to-date with design trends",
        icon: <StayUpToDateIcon />,
      },
    ],
  },
  {
    id: 4,
    title: "Language",
    skills: [
      {
        name: "English (Fluent)",
        icon: (
          <Image
            src={"/globe.svg"}
            height={20}
            width={20}
            objectFit="cover"
            alt="globe"
          />
        ),
      },
    ],
  },
];

interface SkillTagProps {
  skill: Skill;
}

interface SkillCategoryProps {
  category: SkillCategory;
  index: number;
  isLeft: boolean;
}

const SkillTag = ({ skill }: SkillTagProps) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="cursor-pointer"
  >
    <Tag>
      {skill.icon}
      <span>{skill.name}</span>
    </Tag>
  </motion.div>
);

export const SkillCategory = ({
  category,
  index,
  isLeft,
}: SkillCategoryProps) => (
  <motion.div
    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.1 }}
    className={`relative w-full  ${isLeft ? "mr-auto" : "ml-auto"}`}
  >
    {" "}
    <div className="backdrop-blur-sm rounded-xl p-6 border   border-white/30 bg-transparent transition-all duration-300 w-full">
      {" "}
      <span
        className={`text-2xl font-semibold text-custom-gradient  m font-sora"`}
      >
        {category.title}
      </span>
      <motion.div className="flex flex-wrap gap-3 font-archivo mt-2">
        {category.skills.map((skill) => (
          <SkillTag key={skill.name} skill={skill} />
        ))}
      </motion.div>
    </div>
  </motion.div>
);
