import React from 'react';
import { X, FileDown, CheckCircle2, ShieldCheck, Download, ExternalLink } from 'lucide-react';
import { PROFILE } from '../data/profile';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl rounded-2xl bg-[#101827] border border-white/15 p-6 sm:p-8 text-left shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#A4B0C0] hover:text-white transition-colors cursor-pointer"
          aria-label="Close CV selection modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#35D5F5]/10 border border-[#35D5F5]/30 text-[#35D5F5] text-xs mono-tag mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>VERIFIED CV REPOSITORY</span>
          </div>
          <h2 className="text-2xl font-bold text-white">
            Download Shaunak's CV
          </h2>
          <p className="text-xs sm:text-sm text-[#A4B0C0] mt-1">
            Choose the specialized CV variant aligned with your opportunity or assessment criteria.
          </p>
        </div>

        {/* Two Options Cards */}
        <div className="space-y-4 mb-6">
          {/* Option 1: AI / ML Engineer */}
          <div className="p-5 rounded-xl bg-[#080B12] border border-white/10 hover:border-[#35D5F5]/50 transition-all flex flex-col justify-between group">
            <div className="flex items-start justify-between gap-3 mb-3">
              <div>
                <span className="text-[10px] mono-tag text-[#35D5F5] uppercase tracking-wider font-semibold">
                  {PROFILE.cvFiles.aiml.badge}
                </span>
                <h3 className="text-lg font-bold text-white group-hover:text-[#35D5F5] transition-colors">
                  {PROFILE.cvFiles.aiml.name}
                </h3>
                <p className="text-xs text-[#A4B0C0] mt-1">
                  Highlights PyTorch, PyTorch Lightning, ResNet1D, 6-strategy RAG with LangChain & Llama 3.3, and CNN CIFAR-10 ablation studies.
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-white/5 flex items-center justify-between">
              <span className="text-[10px] mono-tag text-[#A4B0C0]">
                {PROFILE.cvFiles.aiml.filename}
              </span>
              <a
                href={PROFILE.cvFiles.aiml.url}
                download={PROFILE.cvFiles.aiml.filename}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#35D5F5] text-slate-950 font-bold text-xs shadow-md shadow-[#35D5F5]/20 hover:brightness-110 transition-all cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>

          {/* Option 2: Data Analyst */}
          <div className="p-5 rounded-xl bg-[#080B12] border border-white/10 hover:border-[#8B7CFF]/50 transition-all flex flex-col justify-between group">
            <div className="flex items-start justify-between gap-3 mb-3">
              <div>
                <span className="text-[10px] mono-tag text-[#8B7CFF] uppercase tracking-wider font-semibold">
                  {PROFILE.cvFiles.dataAnalyst.badge}
                </span>
                <h3 className="text-lg font-bold text-white group-hover:text-[#8B7CFF] transition-colors">
                  {PROFILE.cvFiles.dataAnalyst.name}
                </h3>
                <p className="text-xs text-[#A4B0C0] mt-1">
                  Highlights SQL, Power BI, Excel, Indian Cybercrime spatial K-means clustering with R (sf & ggplot2), and Decision Tree analysis.
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-white/5 flex items-center justify-between">
              <span className="text-[10px] mono-tag text-[#A4B0C0]">
                {PROFILE.cvFiles.dataAnalyst.filename}
              </span>
              <a
                href={PROFILE.cvFiles.dataAnalyst.url}
                download={PROFILE.cvFiles.dataAnalyst.filename}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#8B7CFF] text-slate-950 font-bold text-xs shadow-md shadow-[#8B7CFF]/20 hover:brightness-110 transition-all cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footnote */}
        <div className="text-[11px] mono-tag text-[#A4B0C0] text-center border-t border-white/5 pt-3">
          Direct contact: <a href={`mailto:${PROFILE.email}`} className="text-white underline">{PROFILE.email}</a> &bull; Ireland
        </div>
      </div>
    </div>
  );
};
