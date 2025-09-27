interface ExperienceProps {
  id: number;
  period: string;
  title: string;
  company: string;
  location: string;
  responsibilities: string[];
  liveLink: string;
  figmaLink: string;
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
