import React, { useState } from 'react';
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, PieChart, Pie, Cell
} from 'recharts';
import { Activity, Database, TrendingUp, BarChart2, PieChart as PieIcon, MapPin, CheckCircle, Info } from 'lucide-react';

// 1. Illustrative Business Analytics Dashboard Data (Clearly labeled illustrative)
const monthlyRevenueData = [
  { month: 'Jan', revenue: 42, target: 38, retention: 91 },
  { month: 'Feb', revenue: 48, target: 40, retention: 92 },
  { month: 'Mar', revenue: 55, target: 45, retention: 94 },
  { month: 'Apr', revenue: 61, target: 50, retention: 93 },
  { month: 'May', revenue: 70, target: 58, retention: 95 },
  { month: 'Jun', revenue: 78, target: 65, retention: 96 },
];

const categoryContributionData = [
  { name: 'Analytics APIs', value: 42, color: '#35D5F5' },
  { name: 'Predictive Models', value: 28, color: '#8B7CFF' },
  { name: 'ETL Pipelines', value: 18, color: '#38BDF8' },
  { name: 'BI Reports', value: 12, color: '#A78BFA' },
];

// 2. Real Project-Specific Evaluation Data: Single-Lead vs 12-Lead ECG Performance
const ecgEvaluationComparison = [
  { condition: 'Overall Macro AUROC', singleLead: 71, twelveLead: 80 },
  { condition: 'Ventricular Arrhythmia', singleLead: 74, twelveLead: 84 },
  { condition: 'Atrial Fibrillation', singleLead: 76, twelveLead: 83 },
  { condition: 'Ischemia / ST Segment', singleLead: 68, twelveLead: 78 },
  { condition: 'Conduction Block', singleLead: 70, twelveLead: 81 },
];

// 3. Indian Cybercrime Spatial Cluster Profile (Empirical categories from Project 4)
const cybercrimeClusterData = [
  { cluster: 'Cluster 1: High Intensity (Metro Hubs)', statesCovered: 5, fraudShare: 54, avgCasesPerLakh: 28.4, fill: '#F43F5E' },
  { cluster: 'Cluster 2: Moderate Intensity (Developing)', statesCovered: 11, fraudShare: 31, avgCasesPerLakh: 12.1, fill: '#FBBF24' },
  { cluster: 'Cluster 3: Low Intensity (Dispersed)', statesCovered: 16, fraudShare: 15, avgCasesPerLakh: 4.6, fill: '#34D399' },
];

export const DataShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'business' | 'ecg' | 'spatial'>('ecg');
  const [metricFilter, setMetricFilter] = useState<'both' | 'single' | 'twelve'>('both');

  return (
    <section id="visualisation" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#080B12]/80">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101827] border border-white/10 mb-3">
            <BarChart2 className="w-3.5 h-3.5 text-[#35D5F5]" />
            <span className="text-xs mono-tag uppercase tracking-wider text-[#A4B0C0]">Analytical Systems</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Data, Made Tangible.
          </h2>
          <p className="text-[#A4B0C0] text-sm sm:text-base mt-2 max-w-2xl">
            Interactive analytical dashboards demonstrating statistical communication, model evaluation metrics, and geospatial clustering.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#35D5F5] to-[#8B7CFF] rounded-full mt-3" />
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap gap-2 mb-8 pb-3 border-b border-white/10">
          <button
            onClick={() => setActiveTab('ecg')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'ecg'
                ? 'bg-[#35D5F5] text-slate-950 shadow-md shadow-[#35D5F5]/20'
                : 'bg-[#101827] text-[#A4B0C0] hover:text-white border border-white/5'
            }`}
          >
            <Activity className="w-4 h-4" />
            <span>Model Evaluation: Single vs 12-Lead ECG</span>
          </button>

          <button
            onClick={() => setActiveTab('spatial')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'spatial'
                ? 'bg-[#8B7CFF] text-slate-950 shadow-md shadow-[#8B7CFF]/20'
                : 'bg-[#101827] text-[#A4B0C0] hover:text-white border border-white/5'
            }`}
          >
            <MapPin className="w-4 h-4" />
            <span>Geospatial K-Means Cluster Breakdown</span>
          </button>

          <button
            onClick={() => setActiveTab('business')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'business'
                ? 'bg-white text-slate-950 shadow-md'
                : 'bg-[#101827] text-[#A4B0C0] hover:text-white border border-white/5'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>Interactive Business Analytics Dashboard</span>
          </button>
        </div>

        {/* TAB 1: MODEL EVALUATION (Real project data) */}
        {activeTab === 'ecg' && (
          <div className="rounded-2xl bg-[#101827]/80 border border-white/10 p-6 sm:p-8 text-left backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/5">
              <div>
                <span className="text-xs mono-tag text-[#35D5F5] font-semibold">PROJECT 01 VALIDATION EXPERIMENT</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">AUROC Comparison Across Conditions</h3>
                <p className="text-xs sm:text-sm text-[#A4B0C0] mt-1">
                  Comparing Single-Lead (Lead I/II with zero-masking) against full 12-lead baseline across cardiac condition cohorts.
                </p>
              </div>

              {/* Metric filter buttons */}
              <div className="flex items-center gap-2 bg-[#080B12] p-1 rounded-lg border border-white/5">
                <button
                  onClick={() => setMetricFilter('both')}
                  className={`px-3 py-1 rounded text-xs cursor-pointer ${metricFilter === 'both' ? 'bg-white/10 text-white font-semibold' : 'text-[#A4B0C0]'}`}
                >
                  Both
                </button>
                <button
                  onClick={() => setMetricFilter('single')}
                  className={`px-3 py-1 rounded text-xs cursor-pointer ${metricFilter === 'single' ? 'bg-[#35D5F5] text-slate-950 font-bold' : 'text-[#A4B0C0]'}`}
                >
                  Single-Lead Only
                </button>
                <button
                  onClick={() => setMetricFilter('twelve')}
                  className={`px-3 py-1 rounded text-xs cursor-pointer ${metricFilter === 'twelve' ? 'bg-[#8B7CFF] text-slate-950 font-bold' : 'text-[#A4B0C0]'}`}
                >
                  12-Lead Only
                </button>
              </div>
            </div>

            {/* Interactive Chart */}
            <div className="h-80 w-full mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={ecgEvaluationComparison} margin={{ top: 20, right: 20, left: -10, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                  <XAxis dataKey="condition" stroke="#A4B0C0" fontSize={11} interval={0} angle={-15} textAnchor="end" />
                  <YAxis domain={[50, 100]} stroke="#A4B0C0" fontSize={11} unit="%" />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#101827', borderColor: '#ffffff20', borderRadius: '8px' }}
                    labelStyle={{ color: '#ffffff', fontWeight: 'bold' }}
                    formatter={(val: any) => [`${val}% AUROC`, 'Score']}
                  />
                  <Legend />
                  {(metricFilter === 'both' || metricFilter === 'single') && (
                    <Bar dataKey="singleLead" name="Single-Lead AUROC (71% macro)" fill="#35D5F5" radius={[4, 4, 0, 0]} />
                  )}
                  {(metricFilter === 'both' || metricFilter === 'twelve') && (
                    <Bar dataKey="twelveLead" name="12-Lead Baseline AUROC (80% macro)" fill="#8B7CFF" radius={[4, 4, 0, 0]} />
                  )}
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Metric Rigor Callout */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-[#080B12]/80 border border-white/5">
              <div>
                <div className="text-xs text-[#A4B0C0]">Metric Verification</div>
                <div className="text-lg font-bold text-white">AUROC Standard</div>
                <div className="text-[11px] text-[#A4B0C0]">Evaluates discrimination regardless of threshold selection</div>
              </div>
              <div>
                <div className="text-xs text-[#A4B0C0]">Single-Lead Feasibility</div>
                <div className="text-lg font-bold text-[#35D5F5]">71% AUROC</div>
                <div className="text-[11px] text-[#A4B0C0]">Sufficient for ambulatory wearable pre-screening alert</div>
              </div>
              <div>
                <div className="text-xs text-[#A4B0C0]">Diagnostic Safety Note</div>
                <div className="text-lg font-bold text-emerald-400">Experimental</div>
                <div className="text-[11px] text-[#A4B0C0]">Strictly research evaluation; not a clinical device product</div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: GEOSPATIAL CLUSTERING (Project 4) */}
        {activeTab === 'spatial' && (
          <div className="rounded-2xl bg-[#101827]/80 border border-white/10 p-6 sm:p-8 text-left backdrop-blur-sm">
            <div className="mb-6 pb-4 border-b border-white/5">
              <span className="text-xs mono-tag text-[#8B7CFF] font-semibold">PROJECT 04 STATISTICAL GEOSPATIAL ANALYSIS</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Indian Cybercrime Spatial Segmentation</h3>
              <p className="text-xs sm:text-sm text-[#A4B0C0] mt-1">
                K-Means clustering on geographic coordinates and offense profiles across 15 cybercrime categories, validated by ANOVA and silhouette scores.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              {cybercrimeClusterData.map((c) => (
                <div key={c.cluster} className="p-5 rounded-xl bg-[#080B12] border border-white/10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-3 h-3 rounded-full" style={{ backgroundColor: c.fill }} />
                      <span className="text-sm font-bold text-white">{c.cluster.split(':')[0]}</span>
                    </div>
                    <div className="text-xs text-[#A4B0C0] mb-4">{c.cluster.split(':')[1]}</div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-[#A4B0C0]">States Assigned:</span>
                        <span className="text-white font-mono font-bold">{c.statesCovered} states</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-[#A4B0C0]">National Fraud Concentration:</span>
                        <span className="text-white font-mono font-bold">{c.fraudShare}%</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-[#A4B0C0]">Relative Incidence Index:</span>
                        <span className="text-white font-mono font-bold">{c.avgCasesPerLakh} / 100k</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/5 text-[10px] mono-tag text-[#A4B0C0]">
                    Validated with R sf & K-Means
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-[#080B12]/80 border border-white/5 text-xs text-[#A4B0C0] flex items-center gap-2">
              <Info className="w-4 h-4 text-[#8B7CFF] shrink-0" />
              <span>
                Methodology Highlights: Evaluated cluster compactness using Within-Cluster Sum of Squares (WSS) and Between-Cluster Sum of Squares (BSS) ratios alongside ANOVA tests confirming significant variance across clusters (p &lt; 0.05).
              </span>
            </div>
          </div>
        )}

        {/* TAB 3: ILLUSTRATIVE BUSINESS ANALYTICS DASHBOARD */}
        {activeTab === 'business' && (
          <div className="rounded-2xl bg-[#101827]/80 border border-white/10 p-6 sm:p-8 text-left backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-white/5">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px] mono-tag mb-1">
                  <Info className="w-3 h-3" /> SYNTHETIC DEMONSTRATION DATA (FOR DASHBOARD UI SHOWCASE)
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Interactive Business Intelligence Metric Suite</h3>
                <p className="text-xs sm:text-sm text-[#A4B0C0]">
                  Demonstrates capacity to create clean, decision-ready data visualizations with trend tracking and category attribution.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
              {/* Monthly Trend Chart */}
              <div className="lg:col-span-8 bg-[#080B12] p-4 rounded-xl border border-white/5">
                <div className="text-xs mono-tag text-[#35D5F5] font-semibold mb-2">REVENUE VS TARGET (£k)</div>
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={monthlyRevenueData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                      <XAxis dataKey="month" stroke="#A4B0C0" fontSize={11} />
                      <YAxis stroke="#A4B0C0" fontSize={11} unit="k" />
                      <Tooltip
                        contentStyle={{ backgroundColor: '#101827', borderColor: '#ffffff20', borderRadius: '8px' }}
                        labelStyle={{ color: '#ffffff', fontWeight: 'bold' }}
                      />
                      <Legend />
                      <Line type="monotone" dataKey="revenue" name="Actual (£k)" stroke="#35D5F5" strokeWidth={2.5} dot={{ r: 4 }} />
                      <Line type="monotone" dataKey="target" name="Target (£k)" stroke="#8B7CFF" strokeWidth={2} strokeDasharray="4 4" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Category Breakdown Pie */}
              <div className="lg:col-span-4 bg-[#080B12] p-4 rounded-xl border border-white/5 flex flex-col justify-between">
                <div>
                  <div className="text-xs mono-tag text-[#8B7CFF] font-semibold mb-2">CATEGORY SHARE (%)</div>
                  <div className="h-44 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={categoryContributionData}
                          dataKey="value"
                          nameKey="name"
                          cx="50%"
                          cy="50%"
                          innerRadius={36}
                          outerRadius={60}
                          paddingAngle={4}
                        >
                          {categoryContributionData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip
                          contentStyle={{ backgroundColor: '#101827', borderColor: '#ffffff20', borderRadius: '8px' }}
                          formatter={(v: any) => [`${v}%`, 'Contribution']}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-white/5">
                  {categoryContributionData.map((c) => (
                    <div key={c.name} className="flex items-center justify-between text-[11px]">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: c.color }} />
                        <span className="text-[#A4B0C0]">{c.name}</span>
                      </div>
                      <span className="text-white font-mono">{c.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-white/5 text-[11px] text-[#A4B0C0] mono-tag">
              * Note: Synthetic dataset built to demonstrate frontend dashboard architecture, Recharts integration, and responsive layout.
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
