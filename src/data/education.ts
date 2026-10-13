import { EducationItem, CertificationItem, CareerPath } from '../types/portfolio';

export const EDUCATION: EducationItem[] = [
  {
    id: "msc-data-science",
    degree: "MSc Data Science & Analytics",
    institution: "Maynooth University",
    location: "Ireland",
    period: "2025 – Present",
    isPrimary: true,
    highlights: [
      "Specialized in deep learning architectures, statistical data modelling, and big data analytical pipelines.",
      "Conducted extensive research on reduced-lead ECG biomedical signals, spatial clustering, and advanced RAG architectures.",
      "Rigorous experimental design, model evaluation standards, and data ethics."
    ]
  },
  {
    id: "msc-computer-science",
    degree: "MSc Computer Science",
    institution: "Savitribai Phule Pune University",
    location: "India",
    period: "2023 – 2025",
    grade: "CGPA: 9.48 / 10",
    highlights: [
      "Advanced coursework in algorithms, database design, software architecture, and artificial intelligence.",
      "Graduated with distinction (9.48 / 10 CGPA).",
      "Hands-on project work integrating distributed backend systems with machine learning prototypes."
    ]
  },
  {
    id: "bsc-computer-science",
    degree: "BSc Computer Science",
    institution: "Savitribai Phule Pune University",
    location: "India",
    period: "2020 – 2023",
    grade: "CGPA: 9.45 / 10",
    highlights: [
      "Core computing foundations: data structures, operating systems, object-oriented programming, and computer networks.",
      "Graduated with distinction (9.45 / 10 CGPA).",
      "Early hands-on work with Python scripting, SQL database design, and web technologies."
    ]
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "google-data-analytics",
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google",
    status: "Verified Credential",
    skillsCovered: ["Data Analysis", "Spreadsheets", "SQL", "Tableau", "R Programming", "Data Cleaning", "Data Ethics"]
  },
  {
    id: "ibm-machine-learning",
    title: "IBM Machine Learning Professional Certificate",
    issuer: "Coursera / IBM",
    status: "Verified Credential",
    skillsCovered: ["Supervised Learning", "Unsupervised Learning", "Deep Learning", "Reinforcement Learning", "Scikit-learn", "SciPy"]
  }
];

export const CAREER_PATHS: CareerPath[] = [
  {
    id: "aiml-engineer",
    title: "AI / Machine Learning Engineer",
    tagline: "Bridging mathematical theory and scalable neural architectures",
    description: "Deep learning, model development, experimentation, rigorous evaluation, computer vision, and intelligent applications.",
    keyStrengths: [
      "Deep learning with PyTorch, PyTorch Lightning & TensorFlow",
      "Biomedical signal processing & ResNet1D architectures",
      "Rigorous evaluation: AUROC, AUPRC, dynamic thresholding",
      "Hyperparameter tuning across systematic ablation experiments"
    ],
    relatedProjectIds: ["ecg-structural-heart-disease", "cnn-image-classification"]
  },
  {
    id: "data-analyst-scientist",
    title: "Data Analyst / Data Scientist",
    tagline: "Translating messy, high-dimensional data into decisive business clarity",
    description: "SQL, Python, statistical analysis, exploratory data analysis, predictive modelling, dashboarding, and data-driven decision support.",
    keyStrengths: [
      "Advanced SQL querying & relational data modeling",
      "Exploratory Data Analysis (EDA) & hypothesis testing in R & Python",
      "Spatial clustering, ANOVA, silhouette scoring & HHI concentration",
      "Business Intelligence dashboards with Power BI & Excel"
    ],
    relatedProjectIds: ["cybercrime-spatial-clustering", "diabetes-prediction-ml"]
  },
  {
    id: "genai-engineer",
    title: "Generative AI Engineer",
    tagline: "Engineering production-grade RAG and agentic LLM systems",
    description: "RAG architectures, LLM integration, vector databases, retrieval optimisation, and AI application development.",
    keyStrengths: [
      "Modular RAG pipelines with LangChain Expression Language (LCEL)",
      "Two-stage retrieval: dense vector search + cross-encoder rerankers",
      "Vector indexing & chunk deduplication in ChromaDB",
      "Self-correcting CRAG & query rewriting with Llama 3.3 70B"
    ],
    relatedProjectIds: ["multi-strategy-rag-system"]
  }
];
