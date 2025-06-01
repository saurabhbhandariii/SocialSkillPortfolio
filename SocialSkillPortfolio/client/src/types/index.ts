export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  updated_at: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  image: string;
  stats?: string;
}

export interface Skill {
  name: string;
  color: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  type: 'work' | 'education';
}

export interface Certification {
  title: string;
  organization: string;
  status: string;
  icon: string;
}
