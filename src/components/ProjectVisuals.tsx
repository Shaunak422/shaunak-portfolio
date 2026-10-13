import React from 'react';

export const VisualECG: React.FC = () => {
  return (
    <div className="w-full h-36 bg-[#080B12] rounded-xl p-3 flex flex-col justify-between border border-white/5 relative overflow-hidden">
      <div className="flex items-center justify-between text-[11px] mono-tag">
        <span className="text-[#35D5F5] font-semibold flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#35D5F5] animate-ping" />
          Lead I (Single-Lead Signal)
        </span>
        <span className="text-white font-bold bg-[#35D5F5]/10 px-2 py-0.5 rounded border border-[#35D5F5]/30">
          71% AUROC
        </span>
      </div>

      {/* SVG Synthetic ECG Waveform */}
      <div className="relative w-full h-16 flex items-center">
        <svg className="w-full h-full" viewBox="0 0 500 80" preserveAspectRatio="none">
          {/* Baseline Grid */}
          <line x1="0" y1="40" x2="500" y2="40" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="3 3" />
          {/* Waveform Path */}
          <path
            d="M 0 40 L 40 40 L 50 36 L 58 40 L 70 40 L 76 22 L 84 66 L 92 10 L 102 54 L 108 40 L 125 40 L 140 32 L 155 40 L 200 40 L 210 36 L 218 40 L 230 40 L 236 22 L 244 66 L 252 10 L 262 54 L 268 40 L 285 40 L 300 32 L 315 40 L 360 40 L 370 36 L 378 40 L 390 40 L 396 22 L 404 66 L 412 10 L 422 54 L 428 40 L 445 40 L 460 32 L 475 40 L 500 40"
            fill="none"
            stroke="#35D5F5"
            strokeWidth="2"
            className="drop-shadow-[0_0_8px_rgba(53,213,245,0.6)]"
          />
        </svg>
      </div>

      <div className="flex items-center justify-between text-[10px] mono-tag text-[#A4B0C0] border-t border-white/5 pt-1.5">
        <span>ResNet1D Architecture &bull; 12 Cardiac Labels</span>
        <span className="text-[#8B7CFF]">12-Lead Baseline: 80% AUROC</span>
      </div>
    </div>
  );
};

export const VisualRAG: React.FC = () => {
  const steps = [
    { title: "PDF Ingestion", sub: "Chunks / Hash" },
    { title: "ChromaDB", sub: "bge-base MMR" },
    { title: "Reranker", sub: "Cross-Encoder" },
    { title: "Llama 3.3", sub: "Groq Cloud" }
  ];

  return (
    <div className="w-full h-36 bg-[#080B12] rounded-xl p-3 flex flex-col justify-between border border-white/5 relative overflow-hidden">
      <div className="flex items-center justify-between text-[11px] mono-tag">
        <span className="text-[#8B7CFF] font-semibold flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#8B7CFF] animate-ping" />
          Two-Stage LCEL Pipeline
        </span>
        <span className="text-white font-bold bg-[#8B7CFF]/10 px-2 py-0.5 rounded border border-[#8B7CFF]/30">
          6 Strategies
        </span>
      </div>

      <div className="grid grid-cols-4 gap-1.5 my-auto">
        {steps.map((st, i) => (
          <div key={st.title} className="bg-[#101827] border border-white/10 rounded-lg p-2 text-center flex flex-col justify-center relative">
            <div className="text-[10px] font-bold text-white truncate">{st.title}</div>
            <div className="text-[9px] mono-tag text-[#35D5F5] truncate">{st.sub}</div>
            {i < 3 && (
              <span className="absolute -right-1.5 top-1/2 -translate-y-1/2 text-white/30 text-[9px] z-10">&rsaquo;</span>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between text-[10px] mono-tag text-[#A4B0C0] border-t border-white/5 pt-1.5">
        <span>Strategies: Naive, CRAG, Multi-Hop, Graph, Agentic</span>
        <span className="text-[#35D5F5]">SHA-256 Deduplication</span>
      </div>
    </div>
  );
};

export const VisualCNN: React.FC = () => {
  return (
    <div className="w-full h-36 bg-[#080B12] rounded-xl p-3 flex flex-col justify-between border border-white/5 relative overflow-hidden">
      <div className="flex items-center justify-between text-[11px] mono-tag">
        <span className="text-[#35D5F5] font-semibold flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#35D5F5] animate-ping" />
          3-Block Conv2D Architecture
        </span>
        <span className="text-white font-bold bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/30">
          80.5% Val Acc
        </span>
      </div>

      <div className="flex items-center justify-between gap-1 my-auto px-1">
        <div className="flex flex-col items-center">
          <div className="w-8 h-12 rounded bg-gradient-to-b from-[#35D5F5]/30 to-[#101827] border border-[#35D5F5]/40 flex items-center justify-center text-[9px] font-bold text-white">
            Block 1
          </div>
          <span className="text-[8px] mono-tag text-[#A4B0C0] mt-1">3x3 Conv</span>
        </div>
        <span className="text-[#35D5F5]/40 text-xs">&rarr;</span>
        <div className="flex flex-col items-center">
          <div className="w-8 h-10 rounded bg-gradient-to-b from-[#8B7CFF]/30 to-[#101827] border border-[#8B7CFF]/40 flex items-center justify-center text-[9px] font-bold text-white">
            Block 2
          </div>
          <span className="text-[8px] mono-tag text-[#A4B0C0] mt-1">MaxPool</span>
        </div>
        <span className="text-[#35D5F5]/40 text-xs">&rarr;</span>
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 rounded bg-gradient-to-b from-[#35D5F5]/30 to-[#101827] border border-[#35D5F5]/40 flex items-center justify-center text-[9px] font-bold text-white">
            Block 3
          </div>
          <span className="text-[8px] mono-tag text-[#A4B0C0] mt-1">Dropout</span>
        </div>
        <span className="text-[#35D5F5]/40 text-xs">&rarr;</span>
        <div className="flex flex-col items-center">
          <div className="w-10 h-6 rounded bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-[9px] font-bold text-emerald-400">
            Softmax
          </div>
          <span className="text-[8px] mono-tag text-[#A4B0C0] mt-1">10 Classes</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] mono-tag text-[#A4B0C0] border-t border-white/5 pt-1.5">
        <span>Ablation: Batch 64 &bull; lr=0.001 &bull; Adam</span>
        <span className="text-white">10+ Training Runs</span>
      </div>
    </div>
  );
};

export const VisualGeo: React.FC = () => {
  return (
    <div className="w-full h-36 bg-[#080B12] rounded-xl p-3 flex flex-col justify-between border border-white/5 relative overflow-hidden">
      <div className="flex items-center justify-between text-[11px] mono-tag">
        <span className="text-[#8B7CFF] font-semibold flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#8B7CFF] animate-ping" />
          Spatial K-Means Clustering
        </span>
        <span className="text-white font-bold bg-[#8B7CFF]/10 px-2 py-0.5 rounded border border-[#8B7CFF]/30">
          3 Clusters
        </span>
      </div>

      <div className="flex items-center justify-around my-auto">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-500/80 shadow-[0_0_8px_rgba(244,63,94,0.5)]" />
          <div className="text-left">
            <div className="text-[10px] font-bold text-white">High Intensity</div>
            <div className="text-[8px] mono-tag text-[#A4B0C0]">Metropolitan Hubs</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-amber-400/80 shadow-[0_0_8px_rgba(251,191,36,0.5)]" />
          <div className="text-left">
            <div className="text-[10px] font-bold text-white">Moderate</div>
            <div className="text-[8px] mono-tag text-[#A4B0C0]">Transition Zones</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-emerald-400/80 shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
          <div className="text-left">
            <div className="text-[10px] font-bold text-white">Low Intensity</div>
            <div className="text-[8px] mono-tag text-[#A4B0C0]">Dispersed States</div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] mono-tag text-[#A4B0C0] border-t border-white/5 pt-1.5">
        <span>R sf Package &bull; HHI Concentration</span>
        <span className="text-[#35D5F5]">ANOVA p &lt; 0.05</span>
      </div>
    </div>
  );
};

export const VisualTree: React.FC = () => {
  return (
    <div className="w-full h-36 bg-[#080B12] rounded-xl p-3 flex flex-col justify-between border border-white/5 relative overflow-hidden">
      <div className="flex items-center justify-between text-[11px] mono-tag">
        <span className="text-[#35D5F5] font-semibold flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#35D5F5] animate-ping" />
          Decision Tree Benchmark
        </span>
        <span className="text-white font-bold bg-[#35D5F5]/10 px-2 py-0.5 rounded border border-[#35D5F5]/30">
          75% Accuracy
        </span>
      </div>

      <div className="flex flex-col items-center my-auto">
        <div className="px-2 py-0.5 rounded bg-[#101827] border border-[#35D5F5]/50 text-[9px] font-bold text-white mb-1">
          Glucose &le; 127.5
        </div>
        <div className="w-20 h-2 border-b border-l border-r border-white/20 mb-1" />
        <div className="flex gap-8">
          <div className="px-2 py-0.5 rounded bg-[#101827] border border-emerald-400/50 text-[8px] text-emerald-400">
            Non-Diabetic (Class 0)
          </div>
          <div className="px-2 py-0.5 rounded bg-[#101827] border border-rose-400/50 text-[8px] text-rose-400">
            Diabetic (Class 1)
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] mono-tag text-[#A4B0C0] border-t border-white/5 pt-1.5">
        <span>Pima Indians Dataset &bull; Gini vs. Entropy</span>
        <span className="text-[#8B7CFF]">9 Config Runs</span>
      </div>
    </div>
  );
};
