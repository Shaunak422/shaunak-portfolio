import { SkillCategory } from '../types/portfolio';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "programming-data",
    title: "Programming & Data",
    subtitle: "Core languages and foundational computational data science libraries",
    skills: [
      { name: "Python", levelDescription: "Primary language for ML, DL, and end-to-end data pipelines", tags: ["Primary", "ML/DL", "Scripting"], highlight: true },
      { name: "SQL", levelDescription: "Relational querying, aggregations, schema design & ETL", tags: ["Database", "Querying"], highlight: true },
      { name: "PostgreSQL", levelDescription: "Complex querying and database management", tags: ["RDBMS"] },
      { name: "MySQL", levelDescription: "Production database queries used in internship projects", tags: ["RDBMS"] },
      { name: "R", levelDescription: "Statistical analysis, spatial data processing (sf), tidyverse", tags: ["Statistics", "Spatial"] },
      { name: "JavaScript", levelDescription: "Full-stack development, modern ES6+, UI logic", tags: ["Frontend", "Fullstack"] },
      { name: "Pandas", levelDescription: "High-performance data manipulation, wrangling & transformation", tags: ["Data Manipulation"] },
      { name: "NumPy", levelDescription: "Numerical vector operations and matrix computations", tags: ["Numerical"] }
    ]
  },
  {
    id: "ml-dl",
    title: "Machine Learning & Deep Learning",
    subtitle: "Architectures, neural modeling, evaluation pipelines, and hyperparameter tuning",
    skills: [
      { name: "PyTorch", levelDescription: "Deep learning models, custom neural layers, tensor operations", tags: ["Core Framework"], highlight: true },
      { name: "PyTorch Lightning", levelDescription: "Structured, reproducible deep learning training loops", tags: ["Pipelines"], highlight: true },
      { name: "TensorFlow", levelDescription: "CNN modeling, multi-block vision architectures, callbacks", tags: ["Deep Learning"] },
      { name: "Keras", levelDescription: "High-level neural network prototyping and training", tags: ["Modeling"] },
      { name: "Scikit-learn", levelDescription: "Classical ML, Decision Trees, cross-validation, metrics", tags: ["Classical ML"] },
      { name: "CNNs", levelDescription: "Convolutional neural networks for spatial and visual features", tags: ["Vision"] },
      { name: "ResNet1D", levelDescription: "Residual 1D architectures for 1D biomedical signal classification", tags: ["Biomedical AI"] },
      { name: "Feature Engineering", levelDescription: "Data normalization, encoding, domain-driven representations", tags: ["Preprocessing"] },
      { name: "Model Evaluation", levelDescription: "AUROC, AUPRC, confusion matrices, sensitivity, specificity, PPV/NPV", tags: ["Validation"], highlight: true },
      { name: "Hyperparameter Tuning", levelDescription: "Systematic ablation studies, learning rates, batch sizes, optimizers", tags: ["Optimization"] }
    ]
  },
  {
    id: "genai-nlp",
    title: "Generative AI & NLP",
    subtitle: "RAG architectures, multi-stage retrieval, vector databases, and LLM orchestration",
    skills: [
      { name: "LangChain", levelDescription: "LCEL pipelines, prompt chains, document loaders, vector stores", tags: ["Framework"], highlight: true },
      { name: "Retrieval-Augmented Generation (RAG)", levelDescription: "Multi-strategy document Q&A pipelines (Naive, Reranker, CRAG, Multi-Hop, Graph, Agentic)", tags: ["Architecture"], highlight: true },
      { name: "Large Language Models", levelDescription: "Context window utilization, instruction following, API integration", tags: ["GenAI"] },
      { name: "Llama 3.3 (70B)", levelDescription: "High-accuracy open-weights LLM integrated via Groq cloud API", tags: ["Open LLM"] },
      { name: "ChromaDB", levelDescription: "Embedded vector database for embedding indexing and similarity search", tags: ["Vector DB"] },
      { name: "Hugging Face", levelDescription: "Pretrained models, BAAI embeddings, tokenizers, transformers", tags: ["Ecosystem"] },
      { name: "Prompt Engineering", levelDescription: "Structured context design, few-shot prompts, constraint formulation", tags: ["Interaction"] },
      { name: "Reranking & Multi-Stage Retrieval", levelDescription: "MMR search with BAAI/bge-base-en + BAAI/bge-reranker-base cross-encoder", tags: ["Information Retrieval"], highlight: true }
    ]
  },
  {
    id: "analytics-viz",
    title: "Analytics & Visualisation",
    subtitle: "Business intelligence, exploratory data analysis, and publication-ready charting",
    skills: [
      { name: "Power BI", levelDescription: "Interactive dashboards, business reporting, KPI monitoring", tags: ["BI Tool"], highlight: true },
      { name: "Microsoft Excel", levelDescription: "Pivot tables, formula modeling, ad-hoc data analysis", tags: ["Spreadsheets"] },
      { name: "Matplotlib", levelDescription: "Scientific publication figures, loss curves, confusion matrices", tags: ["Python Viz"] },
      { name: "Seaborn", levelDescription: "Statistical plots, correlation heatmaps, distribution plots", tags: ["Python Viz"] },
      { name: "ggplot2", levelDescription: "Grammar-of-graphics charting, choropleths, multi-layer plots in R", tags: ["R Viz"] },
      { name: "Exploratory Data Analysis", levelDescription: "Data distribution checks, anomaly detection, hypothesis formulation", tags: ["Methodology"] },
      { name: "Statistical Modelling", levelDescription: "Hypothesis testing, ANOVA, WSS/BSS ratios, silhouette scoring", tags: ["Statistics"] },
      { name: "Data Visualisation", levelDescription: "Visual storytelling, intuitive dashboards, perceptual hierarchy", tags: ["Communication"] },
      { name: "Spatial Data Analysis", levelDescription: "Geospatial coordinate operations, spatial clustering with sf & R", tags: ["GIS / Spatial"] }
    ]
  },
  {
    id: "dev-tools",
    title: "Development & Tools",
    subtitle: "Production software development, containerization, and API integrations",
    skills: [
      { name: "Git", levelDescription: "Version control, branching strategies, collaborative workflows", tags: ["VCS"] },
      { name: "GitHub", levelDescription: "Repository management, code reviews, open-source practices", tags: ["Collaboration"] },
      { name: "Docker", levelDescription: "Containerization, environment reproducibility for ML services", tags: ["DevOps"] },
      { name: "React", levelDescription: "Component lifecycle, modern hooks, state management, React Flow", tags: ["Frontend"], highlight: true },
      { name: "Node.js", levelDescription: "Server runtime, async event loop, backend microservices", tags: ["Backend"] },
      { name: "Express.js", levelDescription: "REST API routing, middleware, JSON data endpoints", tags: ["Backend"] },
      { name: "REST APIs", levelDescription: "Contract design, endpoint security, payload optimization", tags: ["Architecture"] },
      { name: "QGIS", levelDescription: "Geographic information system mapping and spatial layer analysis", tags: ["GIS Tool"] }
    ]
  }
];
