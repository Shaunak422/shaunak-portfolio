import { ExperienceItem } from '../types/portfolio';

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "c-ace-governance",
    title: "React Developer Intern",
    company: "C-ACE Governance Solutions Pvt. Ltd.",
    location: "Pune, India",
    period: "01/2025 – 07/2025",
    type: "Internship",
    impactMetrics: [
      "~40% Reduction in manual content-update effort",
      "Real-time location-based automation with Google Maps & Dialogflow"
    ],
    contributions: [
      "Reduced manual content-update effort by approximately 40% by designing reusable RESTful API integrations and frontend components using React.js, Node.js, Express.js, and MySQL, improving data consistency across systems.",
      "Automated customer interactions and real-time, location-based service delivery by integrating a Dialogflow chatbot with the Google Maps API.",
      "Collaborated in Git-based, agile, cross-functional engineering workflows ensuring high code quality and data synchronization."
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MySQL", "REST APIs", "Dialogflow", "Google Maps API", "Git"]
  },
  {
    id: "iconcile-technologies",
    title: "Software Development Intern",
    company: "iConcile Technologies Pvt. Ltd.",
    location: "Pune, India",
    period: "05/2024 – 06/2024",
    type: "Internship",
    impactMetrics: [
      "~30% Reduction in UI rendering time",
      "Automated graph layout replacing manual diagram work"
    ],
    contributions: [
      "Cut UI rendering time by approximately 30% by optimising component lifecycle and state-management logic in a production React frontend.",
      "Implemented the Dagre hierarchical graph layout algorithm within React Flow, automating structured workflow visualisations and eliminating manual diagram layout work.",
      "Engineered clean state synchronization patterns for dynamic node graphs and edge interactions."
    ],
    technologies: ["React.js", "React Flow", "Dagre Graph Algorithm", "JavaScript (ES6+)", "State Management", "Git"]
  }
];
