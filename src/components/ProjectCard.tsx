import React from 'react';
import { ArrowUpRight, Info } from 'lucide-react';
import { GitHubIcon } from './SocialIcons';
import type { Project } from '../types/portfolio';
import { VisualECG, VisualRAG, VisualCNN, VisualGeo, VisualTree } from './ProjectVisuals';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  const renderVisual = () => {
    switch (project.visualType) {
      case 'ecg-waveform':
        return <VisualECG />;
      case 'rag-pipeline':
        return <VisualRAG />;
      case 'cnn-blocks':
        return <VisualCNN />;
      case 'geo-cluster':
        return <VisualGeo />;
      case 'decision-tree':
        return <VisualTree />;
      default:
        return null;
    }
  };

  return (
    <div className="group rounded-2xl bg-[#101827]/80 hover:bg-[#162032] border border-white/10 hover:border-[#35D5F5]/40 transition-all duration-300 p-6 flex flex-col justify-between text-left relative overflow-hidden backdrop-blur-sm shadow-md hover:shadow-xl hover:shadow-[#35D5F5]/5">
      {/* Subtle corner highlight */}
      <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-[#35D5F5]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div>
        {/* Category & Verified Key Result Badge */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="text-xs mono-tag text-[#35D5F5] uppercase tracking-wider font-semibold">
            {project.category}
          </span>
          <span className="text-[11px] mono-tag px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white font-medium">
            {project.badge}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#35D5F5] transition-colors leading-snug">
          {project.title}
        </h3>

        {/* Custom Technical Visualisation Component */}
        <div className="my-4">
          {renderVisual()}
        </div>

        {/* Short Description */}
        <p className="text-sm text-[#A4B0C0] leading-relaxed mb-5">
          {project.shortDescription}
        </p>

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[11px] mono-tag px-2.5 py-1 rounded-md bg-white/5 text-[#A4B0C0] border border-white/5 group-hover:border-white/10 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Actions */}
      <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
        <button
          onClick={() => onOpenDetails(project)}
          className="flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-[#35D5F5] hover:underline cursor-pointer"
        >
          <Info className="w-3.5 h-3.5 text-[#35D5F5]" />
          <span>View Details & Methodology</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#A4B0C0] hover:text-white transition-colors"
            title="Shaunak's GitHub profile"
          >
            <GitHubIcon className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
};
