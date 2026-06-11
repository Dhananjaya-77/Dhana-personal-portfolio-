export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  screenshot: string;
  altText: string;
}

export interface SkillGroup {
  category: string;
  skills: { name: string; iconName: string }[];
}
