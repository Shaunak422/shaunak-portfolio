import React from 'react';
import { Briefcase, Calendar, MapPin, TrendingDown, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES } from '../data/experience';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101827] border border-white/10 mb-3">
            <Briefcase className="w-3.5 h-3.5 text-[#35D5F5]" />
            <span className="text-xs mono-tag uppercase tracking-wider text-[#A4B0C0]">Practical Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Engineering in Practice.
          </h2>
          <p className="text-[#A4B0C0] text-sm sm:text-base mt-2 max-w-2xl">
            Software development internships demonstrating production frontend component architecture, workflow visualisations, and API integrations.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#35D5F5] to-[#8B7CFF] rounded-full mt-3" />
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={exp.id}
              className="p-6 sm:p-8 rounded-2xl bg-[#101827]/80 hover:bg-[#162032] border border-white/10 hover:border-[#35D5F5]/40 transition-all duration-300 relative overflow-hidden backdrop-blur-sm flex flex-col justify-between group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#35D5F5]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Header with Title and Period */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs mono-tag text-[#35D5F5] font-semibold uppercase tracking-wider">
                    {exp.type}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs mono-tag text-[#A4B0C0]">
                    <Calendar className="w-3 h-3 text-[#35D5F5]" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-[#35D5F5] transition-colors">
                  {exp.title}
                </h3>
                
                <div className="flex items-center gap-2 text-sm text-[#A4B0C0] mb-5">
                  <span className="font-semibold text-slate-200">{exp.company}</span>
                  <span>&bull;</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#8B7CFF]" /> {exp.location}
                  </span>
                </div>

                {/* Key Verified Impact Metrics Pill */}
                <div className="mb-5 p-3 rounded-xl bg-[#080B12]/80 border border-white/5 space-y-1.5">
                  {exp.impactMetrics.map((metric, mIdx) => (
                    <div key={mIdx} className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                      <TrendingDown className="w-3.5 h-3.5 shrink-0" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>

                {/* Bullet Contributions */}
                <ul className="space-y-3 mb-6">
                  {exp.contributions.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#A4B0C0] leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#35D5F5] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] mono-tag px-2.5 py-1 rounded-md bg-white/5 text-slate-300 border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
