import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileDown, Sparkles } from 'lucide-react';
import { PROFILE } from '../data/profile';

interface NavbarProps {
  onOpenCvModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCvModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Visualisation', href: '#visualisation' },
    { label: 'Education', href: '#education' },
    { label: 'Impact', href: '#impact' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Determine active section
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080B12]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Personal Wordmark & Geometric Neural Symbol */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, '#hero')}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#35D5F5] rounded-lg p-1"
          >
            <div className="relative w-9 h-9 rounded-lg bg-[#101827] border border-[#35D5F5]/30 flex items-center justify-center overflow-hidden group-hover:border-[#35D5F5] transition-colors">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#35D5F5]/20 to-[#8B7CFF]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              {/* Geometric Node Icon */}
              <svg className="w-5 h-5 text-[#35D5F5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3" fill="#8B7CFF" stroke="#35D5F5" />
                <circle cx="4" cy="6" r="2" fill="#35D5F5" />
                <circle cx="20" cy="6" r="2" fill="#35D5F5" />
                <circle cx="12" cy="20" r="2" fill="#35D5F5" />
                <line x1="4" y1="6" x2="12" y2="12" stroke="#35D5F5" strokeWidth="1.2" strokeDasharray="2 2" />
                <line x1="20" y1="6" x2="12" y2="12" stroke="#35D5F5" strokeWidth="1.2" strokeDasharray="2 2" />
                <line x1="12" y1="20" x2="12" y2="12" stroke="#35D5F5" strokeWidth="1.2" strokeDasharray="2 2" />
              </svg>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm font-semibold tracking-wide text-white group-hover:text-[#35D5F5] transition-colors">
                {PROFILE.fullName}
              </span>
              <span className="text-[10px] mono-tag text-[#A4B0C0] uppercase tracking-wider flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#35D5F5] animate-pulse"></span>
                AI/ML & Data
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#101827]/60 border border-white/5 rounded-full px-4 py-1.5 shadow-inner backdrop-blur-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-[#35D5F5] bg-white/5 shadow-sm font-semibold'
                      : 'text-[#A4B0C0] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenCvModal}
              className="flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white px-3.5 py-2 rounded-lg border border-white/10 hover:border-white/20 bg-white/5 transition-all cursor-pointer"
              title="Download verified CV"
            >
              <FileDown className="w-3.5 h-3.5 text-[#35D5F5]" />
              <span>CV</span>
            </button>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-gradient-to-r from-[#35D5F5] to-[#8B7CFF] text-slate-950 hover:brightness-110 shadow-lg shadow-[#35D5F5]/20 hover:shadow-[#35D5F5]/30 transition-all cursor-pointer"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenCvModal}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-white text-xs flex items-center gap-1"
              aria-label="CV Download"
            >
              <FileDown className="w-4 h-4 text-[#35D5F5]" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#35D5F5]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#080B12]/98 border-b border-white/10 px-4 pt-3 pb-6 mt-3 backdrop-blur-xl animate-in slide-in-from-top duration-200 shadow-2xl">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`text-sm px-3 py-2.5 rounded-lg border text-left transition-colors ${
                    isActive
                      ? 'bg-[#35D5F5]/10 border-[#35D5F5]/30 text-[#35D5F5] font-semibold'
                      : 'border-white/5 text-[#A4B0C0] hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <div className="flex flex-col gap-2 pt-2 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCvModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-white/15 bg-white/5 text-sm font-medium text-white"
            >
              <FileDown className="w-4 h-4 text-[#35D5F5]" />
              <span>Download CV (Select Role)</span>
            </button>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gradient-to-r from-[#35D5F5] to-[#8B7CFF] text-slate-950 font-semibold text-sm"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
