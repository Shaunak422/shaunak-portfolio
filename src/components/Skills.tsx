import React, { useState } from 'react';
import { Layers, CheckCircle2, ChevronRight, Terminal, Sparkles } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/skills';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(SKILL_CATEGORIES[0].id);

  const selectedCategory = SKILL_CATEGORIES.find((cat) => cat.id === activeCategory) || SKILL_CATEGORIES[0];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#080B12]/60">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101827] border border-white/10 mb-3">
            <Layers className="w-3.5 h-3.5 text-[#35D5F5]" />
            <span className="text-xs mono-tag uppercase tracking-wider text-[#A4B0C0]">Interactive Skills Lab</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Technical Capabilities
          </h2>
          <p className="text-[#A4B0C0] text-sm sm:text-base mt-2 max-w-2xl">
            Explore verified competencies across machine learning, generative AI, statistical analytics, and software engineering without arbitrary percentage bars.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#35D5F5] to-[#8B7CFF] rounded-full mt-3" />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-10 pb-2 border-b border-white/10">
          {SKILL_CATEGORIES.map((cat) => {
            const isActive = cat.id === activeCategory;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#35D5F5] text-slate-950 font-bold shadow-lg shadow-[#35D5F5]/20'
                    : 'bg-[#101827] text-[#A4B0C0] hover:text-white hover:bg-white/5 border border-white/5'
                }`}
              >
                <span>{cat.title}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  isActive ? 'bg-slate-950/20 text-slate-950' : 'bg-white/5 text-[#A4B0C0]'
                }`}>
                  {cat.skills.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display */}
        <div className="rounded-2xl bg-[#101827]/70 border border-white/10 p-6 sm:p-8 backdrop-blur-sm text-left">
          {/* Header of selected category */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-white/5 mb-8">
            <div>
              <div className="text-xs mono-tag text-[#35D5F5] uppercase tracking-wider mb-1">
                Category // {selectedCategory.id.replace('-', '_').toUpperCase()}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {selectedCategory.title}
              </h3>
              <p className="text-sm text-[#A4B0C0] mt-1">
                {selectedCategory.subtitle}
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#A4B0C0] mono-tag">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Verified in Academic & Internship Projects</span>
            </div>
          </div>

          {/* Grid of Skill Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {selectedCategory.skills.map((skill) => (
              <div
                key={skill.name}
                className={`p-4 sm:p-5 rounded-xl border transition-all duration-200 flex flex-col justify-between ${
                  skill.highlight
                    ? 'bg-[#162032]/80 border-[#35D5F5]/30 hover:border-[#35D5F5] shadow-sm'
                    : 'bg-[#080B12]/80 border-white/5 hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-base font-bold text-white group-hover:text-[#35D5F5]">
                      {skill.name}
                    </span>
                    {skill.highlight && (
                      <span className="inline-flex items-center gap-1 text-[10px] mono-tag text-[#35D5F5] bg-[#35D5F5]/10 px-2 py-0.5 rounded-full border border-[#35D5F5]/20">
                        <Sparkles className="w-2.5 h-2.5" /> Core
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#A4B0C0] leading-relaxed mb-4">
                    {skill.levelDescription}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] mono-tag px-2 py-0.5 rounded bg-white/5 text-[#A4B0C0]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Honest Note banner */}
          <div className="mt-8 p-3 rounded-xl bg-[#080B12]/60 border border-white/5 text-xs text-[#A4B0C0] flex items-center gap-2">
            <Terminal className="w-4 h-4 text-[#35D5F5] shrink-0" />
            <span>
              Note: Software development skills (React, Node.js, Express.js, REST APIs, MySQL) reflect internship experience alongside core machine learning & data science qualifications.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
