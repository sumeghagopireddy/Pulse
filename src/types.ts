export type NoticePeriod = 'Immediate' | '<15 days' | '<30 days' | '<60 days' | '90+ days';

export interface Candidate {
  id: string;
  headline: string;
  pulseScore: number;
  skills: string[];
  experienceYears: number;
  noticePeriod: NoticePeriod;
  isGithubVerified: boolean;
  isLeetcodeVerified: boolean;
  hasVideoPitch: boolean;
  
  // Details for drawer
  currentRole: string;
  previousCompanies?: string[];
  mockProjects: Project[];
  location: string;
  about: string;
  matchReasons: string[];
}

export interface Project {
  name: string;
  description: string;
  techStack: string[];
  stars: number;
}

export interface Filters {
  minScore: number;
  noticePeriod: NoticePeriod | 'Any';
  minExperience: number;
  techStack: string[];
  searchQuery: string;
}
