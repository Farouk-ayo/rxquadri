interface ExperienceProps {
  id: number;
  period: string;
  title: string;
  company: string;
  location: string;
  responsibilities: string[];
}

interface EducationProps {
  id: number;
  period: string;
  title: string;
  company: string;
  location: string;
  responsibilities: string[];
  liveLink: string;
  figmaLink: string;
}

interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface Company {
  id: number;
  name: string;
  logo: React.ReactNode;
}

type ProjectCategory =
  | "All Projects"
  | "Websites"
  | "Mobile Apps"
  | "Web3"
  | "NGOs";

interface ProjectProps {
  id?: number;
  title: string;
  description: string;
  date: string;
  category: ProjectCategory[];
  image: string;
  websiteLink?: string;
  designLink?: string;
  githubLink?: string;
  threadLink?: string;
  caseStudyLink?: string;
  prototypeLink?: string;
  tags?: string[];
}

interface AchievementProps {
  id: number;
  title: string;
  description: string;
  date: string;
  category:
    | "All Achievements"
    | "Hackathon"
    | "Innovation Challenge"
    | "Professional";
  image?: string;
  link?: string;
}
