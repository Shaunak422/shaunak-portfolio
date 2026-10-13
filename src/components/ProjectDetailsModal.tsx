import React from 'react';
import { X, CheckCircle2, AlertTriangle, Layers, GitBranch, Cpu } from 'lucide-react';
import { GitHubIcon } from './SocialIcons';
import type { Project } from '../types/portfolio';
import { VisualECG, VisualRAG, VisualCNN, VisualGeo, VisualTree } from './ProjectVisuals';

interface ProjectDetailsModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({ project, onClose }) => {
  if (!project) return null;

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
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#101827] border border-white/15 p-6 sm:p-8 text-left shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#A4B0C0] hover:text-white transition-colors cursor-pointer"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Metadata */}
        <div className="mb-4">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-xs mono-tag text-[#35D5F5] font-semibold uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-xs mono-tag px-2.5 py-0.5 rounded-full bg-[#35D5F5]/10 text-white border border-[#35D5F5]/20">
              {project.keyResult}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            {project.title}
          </h2>
        </div>

        {/* Visual Component Preview */}
        <div className="my-5">
          {renderVisual()}
        </div>

        {/* Full Narrative */}
        <div className="mb-6">
          <h3 className="text-xs mono-tag text-[#A4B0C0] uppercase tracking-wider mb-2">
            Project Overview & Objective
          </h3>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {project.fullDescription}
          </p>
        </div>

        {/* Architecture & Tech Stack */}
        <div className="mb-6 p-4 rounded-xl bg-[#080B12]/80 border border-white/10">
          <div className="flex items-center gap-2 text-xs mono-tag text-[#35D5F5] font-bold mb-3">
            <Cpu className="w-4 h-4" />
            <span>Architecture & Components</span>
          </div>
          <ul className="space-y-2">
            {project.architectureDetails.map((detail, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#A4B0C0]">
                <CheckCircle2 className="w-4 h-4 text-[#35D5F5] shrink-0 mt-0.5" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Methodology */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs mono-tag text-[#8B7CFF] font-bold mb-3">
            <Layers className="w-4 h-4" />
            <span>Experimental Methodology</span>
          </div>
          <ul className="space-y-2">
            {project.methodology.map((m, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#A4B0C0]">
                <span className="text-[#8B7CFF] font-mono text-xs mt-0.5">&bull;</span>
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Evaluation Approach & Rigour */}
        <div className="mb-6 p-4 rounded-xl bg-[#162032]/60 border border-white/5">
          <div className="flex items-center gap-2 text-xs mono-tag text-emerald-400 font-bold mb-3">
            <GitBranch className="w-4 h-4" />
            <span>Evaluation Protocol & Verified Metrics</span>
          </div>
          <ul className="space-y-2">
            {project.evaluationApproach.map((evalItem, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                <span className="text-emerald-400 font-bold text-xs mt-0.5">&check;</span>
                <span>{evalItem}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Lessons Learned */}
        <div className="mb-6">
          <h4 className="text-xs mono-tag text-[#A4B0C0] uppercase tracking-wider mb-2">
            Engineering Insights & Key Takeaways
          </h4>
          <ul className="space-y-1.5">
            {project.lessonsLearned.map((lesson, idx) => (
              <li key={idx} className="text-xs sm:text-sm text-[#A4B0C0] pl-3 border-l border-white/20">
                {lesson}
              </li>
            ))}
          </ul>
        </div>

        {/* Honest Representation Disclaimer Alert */}
        <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200/90 flex items-start gap-2.5 mb-6">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <span>{project.honestNote}</span>
        </div>

        {/* Technologies and Links */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((t) => (
              <span key={t} className="text-xs mono-tag px-2.5 py-1 rounded bg-white/5 text-slate-300">
                {t}
              </span>
            ))}
          </div>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-colors"
            >
              <GitHubIcon className="w-4 h-4" />
              <span>Shaunak's GitHub Profile</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
