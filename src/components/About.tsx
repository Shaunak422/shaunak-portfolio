import React from 'react';
import { Cpu, BarChart3, Code, Sparkles, Compass, CheckCircle2 } from 'lucide-react';
import { PROFILE } from '../data/profile';

export const About: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Cpu: <Cpu className="w-6 h-6 text-[#35D5F5]" />,
    BarChart3: <BarChart3 className="w-6 h-6 text-[#8B7CFF]" />,
    Code: <Code className="w-6 h-6 text-[#35D5F5]" />,
  };

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101827] border border-white/10 mb-3">
            <Compass className="w-3.5 h-3.5 text-[#35D5F5]" />
            <span className="text-xs mono-tag uppercase tracking-wider text-[#A4B0C0]">Profile Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            {PROFILE.about.heading}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#35D5F5] to-[#8B7CFF] rounded-full mt-3" />
        </div>

        {/* Introduction Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Narrative text */}
          <div className="lg:col-span-7 flex flex-col gap-5 text-left text-[#A4B0C0] text-base sm:text-lg leading-relaxed">
            <p className="text-white font-medium text-lg sm:text-xl leading-relaxed">
              {PROFILE.about.lead}
            </p>
            <p>
              {PROFILE.about.body}
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#101827] border border-white/5 text-xs text-white">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#35D5F5]" />
                <span>MSc Data Science & Analytics (Maynooth University)</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#101827] border border-white/5 text-xs text-white">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#8B7CFF]" />
                <span>MSc Computer Science (CGPA: 9.48 / 10)</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#101827] border border-white/5 text-xs text-white">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#35D5F5]" />
                <span>BSc Computer Science (CGPA: 9.45 / 10)</span>
              </div>
            </div>
          </div>

          {/* Quick Snapshot Card */}
          <div className="lg:col-span-5 rounded-2xl bg-[#101827]/80 border border-white/10 p-6 sm:p-7 relative overflow-hidden backdrop-blur-sm text-left">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#35D5F5]/10 rounded-full blur-2xl pointer-events-none" />
            <h3 className="text-sm mono-tag uppercase text-[#35D5F5] font-semibold mb-4 tracking-wider">
              Core Capabilities Matrix
            </h3>

            <div className="space-y-4">
              <div className="border-l-2 border-[#35D5F5] pl-3">
                <div className="text-sm font-semibold text-white">Machine Learning & GenAI</div>
                <div className="text-xs text-[#A4B0C0]">PyTorch, ResNet1D, LangChain, ChromaDB, Llama 3.3, Groq</div>
              </div>
              <div className="border-l-2 border-[#8B7CFF] pl-3">
                <div className="text-sm font-semibold text-white">Statistical Analytics & Visualisation</div>
                <div className="text-xs text-[#A4B0C0]">SQL, R, Power BI, Spatial Clustering (sf), ANOVA, Excel</div>
              </div>
              <div className="border-l-2 border-emerald-400 pl-3">
                <div className="text-sm font-semibold text-white">Production Software Engineering</div>
                <div className="text-xs text-[#A4B0C0]">React, Node.js, Express.js, MySQL, REST APIs, Git, Docker</div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#A4B0C0]">
              <span>Based in: Ireland</span>
              <span className="text-[#35D5F5] font-mono">Status: Ready for Hire</span>
            </div>
          </div>
        </div>

        {/* Three Distinct Focus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROFILE.about.focusCards.map((card, idx) => (
            <div
              key={card.title}
              className="group p-6 sm:p-7 rounded-2xl bg-[#101827]/70 hover:bg-[#162032] border border-white/10 hover:border-[#35D5F5]/40 transition-all duration-300 text-left relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#35D5F5]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#080B12] border border-white/10 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  {iconMap[card.icon]}
                </div>
                <div className="text-xs mono-tag text-[#35D5F5] mb-1 font-semibold">0{idx + 1} // FOCUS AREA</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#35D5F5] transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-[#A4B0C0] leading-relaxed">
                  {card.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-xs text-[#35D5F5] opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Aligned with real project implementations &rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
