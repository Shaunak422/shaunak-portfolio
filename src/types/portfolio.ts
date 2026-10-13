export interface Project {
  id: string;
  title: string;
  category: string;
  badge: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  keyResult: string;
  metricType: 'AUROC' | 'Accuracy' | 'Precision' | 'Clusters' | 'Evaluation';
  metricValue: string;
  architectureDetails: string[];
  methodology: string[];
  evaluationApproach: string[];
  lessonsLearned: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  visualType: 'ecg-waveform' | 'rag-pipeline' | 'cnn-blocks' | 'geo-cluster' | 'decision-tree';
  honestNote: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  skills: {
    name: string;
    levelDescription: string;
    tags: string[];
    highlight?: boolean;
  }[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  impactMetrics: string[];
  contributions: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade?: string;
  highlights: string[];
  isPrimary?: boolean;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  status: string;
  skillsCovered: string[];
}

export interface CareerPath {
  id: string;
  title: string;
  tagline: string;
  description: string;
  keyStrengths: string[];
  relatedProjectIds: string[];
}
