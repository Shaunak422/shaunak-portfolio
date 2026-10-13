import React, { Suspense, lazy } from 'react';
import { ArrowRight, FileDown, Mail, Sparkles, Terminal, Activity, Database, GitBranch } from 'lucide-react';
import { PROFILE } from '../data/profile';

// Lazy load Three.js 3D scene
const Scene3D = lazy(() =>
  import('./Scene3D').then((module) => ({ default: module.Scene3D }))
);

interface HeroProps {
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Subtle Geometric Grid & Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #35D5F5 1px, transparent 0)`,
            backgroundSize: '36px 36px',
          }}
        />
        {/* Soft Radial Ambient Lights */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#35D5F5]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-[#8B7CFF]/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        {/* Left Column: Technical Narrative & Strategic Value Proposition */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Top Metadata Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#101827] border border-[#35D5F5]/30 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#35D5F5] animate-ping" />
            <span className="w-2 h-2 rounded-full bg-[#35D5F5] -ml-4" />
            <span className="text-[11px] mono-tag tracking-wider text-[#35D5F5] font-semibold uppercase">
              {PROFILE.hero.badge}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-4">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F4F7FB] to-[#35D5F5]">{PROFILE.shortName}</span>.
          </h1>

          {/* Supporting Headline */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-[#35D5F5] mb-5 tracking-tight">
            {PROFILE.hero.supportingHeadline}
          </h2>

          {/* Supporting Paragraph */}
          <p className="text-base sm:text-lg text-[#A4B0C0] max-w-2xl leading-relaxed mb-8">
            {PROFILE.hero.supportingParagraph}
          </p>

          {/* Fast Credibility Badges (10-second hiring signal) */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full max-w-xl mb-8 p-3 rounded-xl bg-[#101827]/70 border border-white/5 backdrop-blur-sm">
            <div className="flex items-center gap-2 p-1.5">
              <Activity className="w-4 h-4 text-[#35D5F5] shrink-0" />
              <div className="text-left">
                <div className="text-xs font-bold text-white">71% AUROC</div>
                <div className="text-[10px] text-[#A4B0C0] leading-tight">Single-Lead ECG</div>
              </div>
            </div>
            <div className="flex items-center gap-2 p-1.5 border-x border-white/5">
              <Database className="w-4 h-4 text-[#8B7CFF] shrink-0" />
              <div className="text-left">
                <div className="text-xs font-bold text-white">6 RAG Strategies</div>
                <div className="text-[10px] text-[#A4B0C0] leading-tight">Chroma & Llama 3.3</div>
              </div>
            </div>
            <div className="flex items-center gap-2 p-1.5">
              <GitBranch className="w-4 h-4 text-[#35D5F5] shrink-0" />
              <div className="text-left">
                <div className="text-xs font-bold text-white">~40% Dev Effort</div>
                <div className="text-[10px] text-[#A4B0C0] leading-tight">React & API Optim.</div>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 w-full sm:w-auto">
            {/* CTA 1: Explore My Work */}
            <button
              onClick={() => scrollTo('projects')}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#35D5F5] to-[#8B7CFF] text-slate-950 font-bold text-sm shadow-lg shadow-[#35D5F5]/20 hover:shadow-[#35D5F5]/35 hover:brightness-105 transition-all cursor-pointer"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* CTA 2: Download CV */}
            <button
              onClick={onOpenCvModal}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#101827] border border-white/15 hover:border-[#35D5F5]/50 text-white font-semibold text-sm hover:bg-white/5 transition-all cursor-pointer shadow-md"
            >
              <FileDown className="w-4 h-4 text-[#35D5F5]" />
              <span>Download CV</span>
            </button>

            {/* CTA 3: Get in Touch (Visually Quieter) */}
            <button
              onClick={() => scrollTo('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-medium text-[#A4B0C0] hover:text-white transition-colors cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5 text-[#8B7CFF]" />
              <span>Get in Touch</span>
            </button>
          </div>

          {/* Academic Anchor Note */}
          <div className="flex items-center gap-2 text-xs text-[#A4B0C0]/75 mono-tag">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Maynooth University, Ireland &bull; Actively seeking Graduate & Entry-Level Roles</span>
          </div>
        </div>

        {/* Right Column: Signature 3D Interactive Scene (45-55% composition) */}
        <div className="lg:col-span-5 h-[380px] sm:h-[460px] lg:h-[540px] w-full relative flex items-center justify-center">
          {/* Subtle Outer Frame / Data Laboratory HUD */}
          <div className="absolute inset-0 rounded-2xl bg-[#101827]/30 border border-white/5 backdrop-blur-sm pointer-events-none flex flex-col justify-between p-4">
            <div className="flex items-center justify-between text-[10px] mono-tag text-[#A4B0C0]">
              <div className="flex items-center gap-1.5">
                <Terminal className="w-3 h-3 text-[#35D5F5]" />
                <span>NEURAL_CORE // R3F_ACTIVE</span>
              </div>
              <span className="text-[#35D5F5]">STATUS: ONLINE</span>
            </div>
            <div className="flex items-center justify-between text-[10px] mono-tag text-[#A4B0C0]/60">
              <span>LAT: 53.3813° N (IRELAND)</span>
              <span>ORBITAL_CAMERA</span>
            </div>
          </div>

          {/* 3D Scene with Graceful Fallback */}
          <Suspense
            fallback={
              <div className="flex flex-col items-center justify-center gap-3 text-center p-6">
                <div className="w-16 h-16 rounded-full border-2 border-[#35D5F5]/30 border-t-[#35D5F5] animate-spin" />
                <span className="text-xs mono-tag text-[#A4B0C0]">Initializing Neural 3D Workspace...</span>
              </div>
            }
          >
            <Scene3D />
          </Suspense>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <button
        onClick={() => scrollTo('about')}
        aria-label="Scroll to About section"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#A4B0C0] hover:text-[#35D5F5] transition-colors cursor-pointer group"
      >
        <span className="text-[10px] mono-tag tracking-wider uppercase opacity-70 group-hover:opacity-100">Explore</span>
        <div className="w-4 h-7 rounded-full border border-white/20 flex items-start justify-center p-1">
          <div className="w-1 h-1.5 rounded-full bg-[#35D5F5] animate-bounce" />
        </div>
      </button>
    </section>
  );
};
