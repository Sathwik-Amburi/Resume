export interface PersonalData {
  name: string;
  jobTitle: string;
  location: string;
  phone: string;
  email: string;
  avatar: string;
  programmingLanguages: Skill[];
  technologies: Skill[];
  experiences: Experience[];
  education: Education[];
  projects: Project[];
  publications: Publication[];
}

export interface Skill {
  name: string;
  proficiency: string;
  projects: string[];
  certifications: string[];
  yearsOfExperience: number;
}

export interface Experience {
  id: string;
  type: string;
  company: string;
  location: string;
  jobTitle: string;
  date: string;
  description: string;
  images?: string[];
}

export interface Education {
  type: string;
  institution: string;
  degree: string;
  date: string;
  location: string;
  description: string;
}

export interface Project {
  name: string;
  description: string;
  date: string;
  technologies: string[];
  role: string;
}

export interface Publication {
  title: string;
  publisher: string;
  date: string;
  description: string;
  link: string;
}

export interface ProfileInfoProps {
  name: string;
  location: string;
  phone: string;
  email: string;
  avatar: string;
}

export interface HeaderProps {
  name: string;
  avatar: string;
}

export interface SkillsSectionProps {
  title: string;
  skills: string[];
}

export interface ProjectProps {
  name: string;
  description: string;
  date: string;
  technologies: string[];
  role: string;
}

export interface PublicationProps {
  title: string;
  publisher: string;
  date: string;
  description: string;
  link: string;
}
