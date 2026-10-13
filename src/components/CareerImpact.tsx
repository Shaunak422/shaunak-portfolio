import React from 'react';
import { Target, ArrowRight, Brain, BarChart3, Bot, CheckCircle2 } from 'lucide-react';
import { CAREER_PATHS } from '../data/education';

export const CareerImpact: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    'aiml-engineer': <Brain className="w-6 h-6 text-[#35D5F5]" />,
    'data-analyst-scientist': <BarChart3 className="w-6 h-6 text-[#8B7CFF]" />,
    'genai-engineer': <Bot className="w-6 h-6 text-[#35D5F5]" />,
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="impact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101827] border border-white/10 mb-3">
            <Target className="w-3.5 h-3.5 text-[#35D5F5]" />
            <span className="text-xs mono-tag uppercase tracking-wider text-[#A4B0C0]">Role Discovery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Where I Can Make an Impact.
          </h2>
          <p className="text-[#A4B0C0] text-sm sm:text-base mt-2 max-w-2xl">
            Targeted technical pathways where my blend of deep learning research, statistical analysis, and software development provides immediate value.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#35D5F5] to-[#8B7CFF] rounded-full mt-3" />
        </div>

        {/* Impact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-left">
          {CAREER_PATHS.map((path) => (
            <div
              key={path.id}
              className="p-6 sm:p-7 rounded-2xl bg-[#101827]/80 hover:bg-[#162032] border border-white/10 hover:border-[#35D5F5]/40 transition-all duration-300 flex flex-col justify-between group backdrop-blur-sm"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#080B12] border border-white/10 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  {iconMap[path.id]}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#35D5F5] transition-colors">
                  {path.title}
                </h3>

                <div className="text-xs text-[#35D5F5] mono-tag mb-3">
                  {path.tagline}
                </div>

                <p className="text-xs sm:text-sm text-[#A4B0C0] leading-relaxed mb-6">
                  {path.description}
                </p>

                <div className="space-y-2 border-t border-white/5 pt-4">
                  <div className="text-xs mono-tag uppercase text-white font-semibold mb-2">Key Competencies:</div>
                  {path.keyStrengths.map((str, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2 text-xs text-[#A4B0C0]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#35D5F5] shrink-0 mt-0.5" />
                      <span>{str}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6">
                <button
                  onClick={() => scrollTo('projects')}
                  className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-white group-hover:text-[#35D5F5] transition-colors cursor-pointer"
                >
                  <span>Explore Relevant Projects</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
