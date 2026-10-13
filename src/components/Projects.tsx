import React, { useState } from 'react';
import { FolderGit2, Sparkles, Filter } from 'lucide-react';
import { PROJECTS } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectDetailsModal } from './ProjectDetailsModal';
import { Project } from '../types/portfolio';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = [
    { label: 'All Projects', value: 'all' },
    { label: 'Deep Learning / AI', value: 'deep-learning' },
    { label: 'Generative AI & NLP', value: 'genai' },
    { label: 'Data Analytics & Spatial', value: 'analytics' },
    { label: 'Predictive ML', value: 'predictive' },
  ];

  const filteredProjects = PROJECTS.filter((p) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'deep-learning') return p.category.includes('Deep Learning') || p.category.includes('Vision');
    if (selectedFilter === 'genai') return p.category.includes('Generative AI');
    if (selectedFilter === 'analytics') return p.category.includes('Data Analytics');
    if (selectedFilter === 'predictive') return p.category.includes('Predictive');
    return true;
  });

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101827] border border-white/10 mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-[#35D5F5]" />
            <span className="text-xs mono-tag uppercase tracking-wider text-[#A4B0C0]">Interactive Project Lab</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Featured Systems & Studies
          </h2>
          <p className="text-[#A4B0C0] text-sm sm:text-base mt-2 max-w-2xl">
            Five verified engineering systems and research investigations with empirical metrics, rigorous evaluation pipelines, and honest reporting.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#35D5F5] to-[#8B7CFF] rounded-full mt-3" />
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          <span className="text-xs text-[#A4B0C0] mr-2 flex items-center gap-1">
            <Filter className="w-3 h-3 text-[#35D5F5]" /> Filter:
          </span>
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setSelectedFilter(f.value)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer ${
                selectedFilter === f.value
                  ? 'bg-gradient-to-r from-[#35D5F5] to-[#8B7CFF] text-slate-950 font-bold shadow-md shadow-[#35D5F5]/20'
                  : 'bg-[#101827] text-[#A4B0C0] hover:text-white border border-white/5 hover:border-white/15'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Detail Modal */}
        <ProjectDetailsModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};
