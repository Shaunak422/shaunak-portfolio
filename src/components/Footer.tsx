import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './SocialIcons';
import { PROFILE } from '../data/profile';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#080B12] py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
        {/* Left wordmark & attribution */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <div className="text-sm font-semibold text-white">
            Designed and developed by {PROFILE.fullName}.
          </div>
          <div className="text-xs text-[#A4B0C0] mt-1 mono-tag">
            &copy; {currentYear} &bull; Maynooth University Postgraduate &bull; Ireland
          </div>
        </div>

        {/* Center / Right Links */}
        <div className="flex items-center gap-4">
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-[#A4B0C0] hover:text-[#35D5F5] transition-colors"
            title="LinkedIn Profile"
          >
            <LinkedInIcon className="w-4 h-4" />
          </a>

          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-[#A4B0C0] hover:text-[#35D5F5] transition-colors"
            title="GitHub Profile"
          >
            <GitHubIcon className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${PROFILE.email}`}
            className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-[#A4B0C0] hover:text-[#35D5F5] transition-colors"
            title="Email Shaunak"
          >
            <Mail className="w-4 h-4" />
          </a>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg bg-[#101827] border border-white/10 text-[#A4B0C0] hover:text-white transition-colors cursor-pointer ml-2"
            title="Scroll to Top"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
