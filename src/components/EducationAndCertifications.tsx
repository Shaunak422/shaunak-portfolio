import React from 'react';
import { GraduationCap, Award, MapPin, Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';
import { EDUCATION, CERTIFICATIONS } from '../data/education';

export const EducationAndCertifications: React.FC = () => {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#080B12]/60">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101827] border border-white/10 mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-[#35D5F5]" />
            <span className="text-xs mono-tag uppercase tracking-wider text-[#A4B0C0]">Academic Pedigree</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Academic Foundation.
          </h2>
          <p className="text-[#A4B0C0] text-sm sm:text-base mt-2 max-w-2xl">
            Postgraduate specialization in Data Science & Analytics alongside distinction-level computer science degree foundations.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#35D5F5] to-[#8B7CFF] rounded-full mt-3" />
        </div>

        {/* Education Timeline / Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-20 text-left">
          {EDUCATION.map((item, idx) => (
            <div
              key={item.id}
              className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 relative flex flex-col justify-between ${
                item.isPrimary
                  ? 'bg-[#162032]/85 border-[#35D5F5]/40 shadow-xl shadow-[#35D5F5]/5'
                  : 'bg-[#101827]/70 border-white/10 hover:border-white/20'
              }`}
            >
              <div>
                {/* Degree Badge / Highlight */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs mono-tag text-[#35D5F5] font-semibold uppercase">
                    {item.isPrimary ? 'Primary Postgraduate' : `Degree 0${idx + 1}`}
                  </span>
                  {item.grade && (
                    <span className="text-[11px] mono-tag px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                      {item.grade}
                    </span>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {item.degree}
                </h3>

                <div className="text-sm font-medium text-slate-300 mb-1">
                  {item.institution}
                </div>

                <div className="flex items-center gap-3 text-xs text-[#A4B0C0] mb-5">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#8B7CFF]" /> {item.location}
                  </span>
                  <span>&bull;</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#35D5F5]" /> {item.period}
                  </span>
                </div>

                {/* Highlights */}
                <ul className="space-y-2 border-t border-white/5 pt-4">
                  {item.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2 text-xs text-[#A4B0C0] leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#35D5F5] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {item.isPrimary && (
                <div className="mt-6 pt-3 border-t border-[#35D5F5]/20 text-[11px] mono-tag text-[#35D5F5] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#35D5F5] animate-pulse" />
                  <span>Current Academic Affiliation (Ireland)</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="text-left">
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-5 h-5 text-[#8B7CFF]" />
            <h3 className="text-2xl font-bold text-white">Professional Certifications</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                className="p-6 rounded-2xl bg-[#101827]/80 border border-white/10 flex flex-col justify-between hover:border-[#8B7CFF]/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs mono-tag text-[#8B7CFF] uppercase font-semibold">
                      {cert.issuer}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] mono-tag text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      <ShieldCheck className="w-3 h-3" /> {cert.status}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-4">
                    {cert.title}
                  </h4>

                  <div className="text-xs text-[#A4B0C0] mb-2">Curriculum Domain Competencies:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsCovered.map((s) => (
                      <span key={s} className="text-[10px] mono-tag px-2 py-0.5 rounded bg-white/5 text-slate-300">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
