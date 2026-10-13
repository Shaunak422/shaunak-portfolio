# Shaunak Manoj Dinkar — Premium Interactive 3D Portfolio

A production-grade, interactive 3D portfolio website built for **Shaunak Manoj Dinkar**, Data Science & Analytics postgraduate at Maynooth University, Ireland, with verified competencies spanning AI/ML engineering, deep learning research, data analytics, generative AI, and full-stack software development.

---

## 🌟 Key Features & Strategic Positioning

- **10-Second Recruiter Clarity**: Immediately presents three core strengths:
  1. *AI & Deep Learning*: ResNet1D architectures, PyTorch Lightning, CIFAR-10 CNN systematic ablation, and clinical metric evaluation.
  2. *Generative AI & LLMs*: Modular 6-strategy RAG system (Naive, Reranker, CRAG, Multi-Hop, Graph, Agentic) with Llama 3.3 70B & ChromaDB.
  3. *Data Analytics & Software Engineering*: Spatial K-means clustering (R sf), interactive dashboards, and React/Node production internship contributions (~40% content-update effort reduction, ~30% rendering optimization).
- **Interactive 3D Scene**: Custom computational neural core and data particle structure rendered with Three.js and React Three Fiber (`@react-three/fiber` + `@react-three/drei`), with automatic responsive fallback and orbital motion.
- **Strictly Honest Representation**:
  - AUROC metrics (71% single-lead vs. 80% 12-lead baseline) accurately labeled and identified as academic research investigations rather than clinical products.
  - No arbitrary skill percentages (e.g. no "Python 95%").
  - Clear labeling on synthetic demonstration dashboard components.
- **Dual Verified CV Downloads**: Instant modal selector providing:
  - `Shaunak_Manoj_Dinkar_AI_ML_Engineer_CV.pdf`
  - `Shaunak_Manoj_Dinkar_Data_Analyst_CV.pdf`
- **Interactive Data Showcase**: Dedicated analytics lab with real project ECG AUROC comparisons, geospatial clustering profiles, and business intelligence charts built with Recharts.

---

## 🛠️ Technology Stack

- **Core Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v4 + Custom Near-Black Charcoal & Electric Cyan Theme
- **3D Graphics**: Three.js + React Three Fiber + Drei
- **Data Visualisations**: Recharts
- **Icons**: Lucide React + Custom SVG Social Glyphs
- **PDF Generation**: PDFKit (automating pixel-perfect CV exports)

---

## 🚀 Getting Started

### Prerequisites
- Node.js: `v20.x` or higher
- npm: `v10.x` or higher

### Installation
```bash
# Clone or navigate to the repository
cd Portfolio

# Install dependencies
npm install
```

### Development Server
```bash
# Start local Vite development server
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build & Preview
```bash
# Build production bundle with TypeScript check
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Architecture

```
Portfolio/
├── public/
│   ├── Shaunak_Manoj_Dinkar_AI_ML_Engineer_CV.pdf
│   ├── Shaunak_Manoj_Dinkar_Data_Analyst_CV.pdf
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.tsx                   # Sticky glassmorphic navbar & wordmark
│   │   ├── Hero.tsx                     # 3D Hero section & credibility cards
│   │   ├── Scene3D.tsx                  # Three.js interactive neural computational core
│   │   ├── About.tsx                    # "Beyond the Algorithms" + 3 Focus Cards
│   │   ├── Skills.tsx                   # Interactive Category-based Skills Lab
│   │   ├── Projects.tsx                 # Project Gallery with filter controls
│   │   ├── ProjectCard.tsx              # Card with custom SVG visualisations
│   │   ├── ProjectVisuals.tsx           # Waveforms, RAG pipeline, CNN blocks & tree
│   │   ├── ProjectDetailsModal.tsx      # In-depth architecture & evaluation modal
│   │   ├── DataShowcase.tsx             # "Data, Made Tangible" analytical laboratory
│   │   ├── Experience.tsx               # "Engineering in Practice" internships timeline
│   │   ├── EducationAndCertifications.tsx# Maynooth University & Pune University
│   │   ├── CareerImpact.tsx             # "Where I Can Make an Impact" role paths
│   │   ├── Contact.tsx                  # Verified coordinates & functional dispatch
│   │   ├── Footer.tsx                   # Dynamic attribution & links
│   │   ├── CvModal.tsx                  # CV download selection modal
│   │   └── SocialIcons.tsx              # SVG GitHub & LinkedIn glyphs
│   ├── data/
│   │   ├── profile.ts                   # Verified contact, biography & links
│   │   ├── skills.ts                    # Structured technical categories
│   │   ├── projects.ts                  # 5 verified projects with evaluation details
│   │   ├── experience.ts                # Verified internship metrics & contributions
│   │   └── education.ts                 # Verified degrees, grades, and certifications
│   ├── types/
│   │   └── portfolio.ts                 # Full TypeScript contracts
│   ├── App.tsx                          # Main application layout
│   ├── index.css                        # Futuristic dark theme styling
│   └── main.tsx                         # Root entry point
├── generate-cvs.ts                      # Automated PDF generation pipeline
├── package.json
└── vite.config.ts
```

---

## 🚢 Deployment Guide

This project compiles directly into static assets (`dist/`), making it deployable on:
- **Vercel**: Simply import the repository; root directory is `.`, build command is `npm run build`, output directory is `dist`.
- **Netlify**: Set build command to `npm run build` and publish directory to `dist`.
- **GitHub Pages**: Build with `npm run build` and publish `dist` via `gh-pages` or GitHub Actions.

---

## 👤 Personal Brand Details

- **Full Name**: Shaunak Manoj Dinkar
- **Email**: [dinkarshaunak23@gmail.com](mailto:dinkarshaunak23@gmail.com)
- **LinkedIn**: [linkedin.com/in/shaunak-dinkar-844868225](https://www.linkedin.com/in/shaunak-dinkar-844868225)
- **GitHub**: [github.com/Shaunak422](https://github.com/Shaunak422)
- **Location**: Ireland
