import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, Copy, Check, MessageSquare } from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './SocialIcons';
import { PROFILE } from '../data/profile';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all required fields.');
      return;
    }

    setFormStatus('submitting');

    // Functional email dispatch integration via mailto link as transparent client-side handler
    setTimeout(() => {
      setFormStatus('submitted');
      // Create prefilled mailto draft as actual functional fallback
      const subject = encodeURIComponent(formData.subject || `Inquiry from Portfolio - ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    }, 600);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#080B12]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101827] border border-white/10 mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-[#35D5F5]" />
            <span className="text-xs mono-tag uppercase tracking-wider text-[#A4B0C0]">Initiate Contact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Let's Build Something Meaningful.
          </h2>
          <p className="text-[#A4B0C0] text-sm sm:text-base mt-2 max-w-2xl">
            Interested in discussing an opportunity, collaborating on a technical project, or connecting over AI and data? I'd be glad to hear from you.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#35D5F5] to-[#8B7CFF] rounded-full mt-3" />
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start text-left">
          {/* Left Column: Direct verified coordinates */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#101827]/80 border border-white/10 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white mb-2">Direct Communication</h3>
              <p className="text-xs text-[#A4B0C0] mb-6">
                Feel free to email directly or connect on LinkedIn. Open to discussions regarding AI/ML Engineering, Data Science, and Data Analytics roles.
              </p>

              {/* Email Card with Quick Copy */}
              <div className="p-4 rounded-xl bg-[#080B12] border border-white/10 flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-lg bg-[#35D5F5]/10 text-[#35D5F5] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[10px] mono-tag text-[#A4B0C0]">EMAIL ADDRESS</div>
                    <a
                      href={`mailto:${PROFILE.email}`}
                      className="text-sm font-semibold text-white hover:text-[#35D5F5] transition-colors truncate block"
                    >
                      {PROFILE.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#A4B0C0] hover:text-white transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Social Channels */}
              <div className="space-y-3">
                {/* LinkedIn */}
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#080B12] border border-white/10 hover:border-[#35D5F5]/40 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#8B7CFF]/10 text-[#8B7CFF]">
                      <LinkedInIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white group-hover:text-[#35D5F5] transition-colors">
                        LinkedIn Profile
                      </div>
                      <div className="text-[10px] text-[#A4B0C0]">shaunak-dinkar-844868225</div>
                    </div>
                  </div>
                  <span className="text-xs text-[#A4B0C0] group-hover:text-white">&rarr;</span>
                </a>

                {/* GitHub */}
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#080B12] border border-white/10 hover:border-[#35D5F5]/40 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/5 text-white">
                      <GitHubIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white group-hover:text-[#35D5F5] transition-colors">
                        GitHub Profile
                      </div>
                      <div className="text-[10px] text-[#A4B0C0]">github.com/Shaunak422</div>
                    </div>
                  </div>
                  <span className="text-xs text-[#A4B0C0] group-hover:text-white">&rarr;</span>
                </a>
              </div>
            </div>

            {/* Geographical Base */}
            <div className="p-4 rounded-xl bg-[#101827]/50 border border-white/5 text-xs text-[#A4B0C0] flex items-center justify-between mono-tag">
              <span>Location: Ireland</span>
              <span className="text-[#35D5F5]">Phone: +353 89 9612709</span>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#101827]/80 border border-white/10 backdrop-blur-sm relative">
              <h3 className="text-xl font-bold text-white mb-1">Send a Message</h3>
              <p className="text-xs text-[#A4B0C0] mb-6">
                Submit this form to launch your email client with your message prefilled and ready to send directly.
              </p>

              {formStatus === 'submitted' ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center animate-in fade-in">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-white mb-1">Message Prepared!</h4>
                  <p className="text-xs text-[#A4B0C0] mb-4">
                    Your email client should have opened with the message ready. If it didn't, feel free to email Shaunak directly at <span className="text-white font-mono">{PROFILE.email}</span>.
                  </p>
                  <button
                    onClick={() => setFormStatus('idle')}
                    className="px-4 py-2 rounded-lg bg-white/10 text-white text-xs font-semibold hover:bg-white/15 cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5" htmlFor="name">
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Dr. Fiona Gallagher"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#080B12] border border-white/10 text-white text-sm focus:outline-none focus:border-[#35D5F5] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5" htmlFor="email">
                        Your Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="fiona@technology.ie"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#080B12] border border-white/10 text-white text-sm focus:outline-none focus:border-[#35D5F5] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5" htmlFor="subject">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Graduate Data Scientist Role / Technical Collaboration"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#080B12] border border-white/10 text-white text-sm focus:outline-none focus:border-[#35D5F5] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5" htmlFor="message">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Shaunak, we were impressed by your single-lead ECG evaluation and RAG system..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#080B12] border border-white/10 text-white text-sm focus:outline-none focus:border-[#35D5F5] transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-[#35D5F5] to-[#8B7CFF] text-slate-950 font-bold text-sm shadow-lg shadow-[#35D5F5]/20 hover:brightness-105 transition-all cursor-pointer disabled:opacity-50"
                    >
                      {formStatus === 'submitting' ? (
                        <span>Preparing email dispatch...</span>
                      ) : (
                        <>
                          <span>Transmit Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
