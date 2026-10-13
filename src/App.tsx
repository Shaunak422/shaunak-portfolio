import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { DataShowcase } from './components/DataShowcase';
import { Experience } from './components/Experience';
import { EducationAndCertifications } from './components/EducationAndCertifications';
import { CareerImpact } from './components/CareerImpact';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';

export const App: React.FC = () => {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080B12] text-[#F4F7FB] selection:bg-[#35D5F5]/25 selection:text-[#35D5F5] font-sans antialiased">
      {/* Sticky Top Navigation */}
      <Navbar onOpenCvModal={() => setIsCvModalOpen(true)} />

      {/* Main Experience Body */}
      <main>
        {/* 1. Full-screen Interactive 3D Hero */}
        <Hero onOpenCvModal={() => setIsCvModalOpen(true)} />

        {/* 2. Beyond the Algorithms (About & Focus Areas) */}
        <About />

        {/* 3. Interactive Skills Lab */}
        <Skills />

        {/* 4. Featured Projects (Deep Dive Systems) */}
        <Projects />

        {/* 5. Data, Made Tangible (Analytical Visualisations) */}
        <DataShowcase />

        {/* 6. Engineering in Practice (Internships & Production Impact) */}
        <Experience />

        {/* 7. Academic Foundation & Professional Certifications */}
        <EducationAndCertifications />

        {/* 8. Where I Can Make an Impact (Role Discovery) */}
        <CareerImpact />

        {/* 9. Contact & Interaction */}
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* CV Download Selection Modal */}
      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />
    </div>
  );
};

export default App;
