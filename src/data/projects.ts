import { Project } from '../types/portfolio';

export const PROJECTS: Project[] = [
  {
    id: "ecg-structural-heart-disease",
    title: "Single-Lead ECG for Structural Heart Disease Detection",
    category: "Deep Learning / Healthcare AI",
    badge: "71% AUROC (Single-Lead) vs 80% (12-Lead)",
    shortDescription: "Investigated whether structural heart disease can be detected using single-lead ECG signals, assessing the feasibility of reduced-lead ECG systems for wearable devices.",
    fullDescription: "Investigated whether structural heart disease can be detected using single-lead ECG signals, with the goal of assessing the feasibility of reduced-lead ECG systems for wearable devices. Developed a ResNet1D architecture trained on signal recordings, conducting lead-ablation and zero-masking experiments across 12 distinct cardiac conditions.",
    technologies: ["Python", "PyTorch", "PyTorch Lightning", "ResNet1D", "SciPy"],
    keyResult: "Achieved 71% AUROC using single-lead ECG input (compared to 80% AUROC for 12-lead ECG baseline).",
    metricType: "AUROC",
    metricValue: "71% AUROC",
    architectureDetails: [
      "1D Residual Convolutional Neural Network (ResNet1D) designed specifically for sequential cardiac electrophysiology waveforms.",
      "Lead-ablation and zero-masking pipeline systematically isolating Lead I/II inputs to simulate compact wearable single-electrode sensors.",
      "End-to-end reproducible training pipelines orchestrated via PyTorch Lightning."
    ],
    methodology: [
      "Zero-masking ablation across 12 cardiac condition labels to quantify diagnostic degradation when moving from hospital-grade 12-lead to single-lead.",
      "Evaluation against baseline 12-lead ResNet1D model (which reached 80% AUROC).",
      "Dynamic threshold optimisation to fine-tune decision boundaries per condition."
    ],
    evaluationApproach: [
      "Primary Metric: Area Under the Receiver Operating Characteristic curve (AUROC) — 71% on single lead, 80% on 12-lead.",
      "Comprehensive metric suite: Area Under Precision-Recall Curve (AUPRC), Sensitivity, Specificity, Positive Predictive Value (PPV), and Negative Predictive Value (NPV).",
      "Strict evaluation protocol preventing data leakage between patient cohorts."
    ],
    lessonsLearned: [
      "Single-lead signals preserve substantial morphological cues for gross structural anomalies, providing strong evidence for wearable pre-screening feasibility.",
      "Dynamic thresholding is critical for handling extreme prevalence imbalances in clinical multi-label datasets."
    ],
    githubUrl: "https://github.com/Shaunak422",
    visualType: "ecg-waveform",
    honestNote: "This project represents an academic deep learning feasibility investigation using research datasets. It is not a clinically approved diagnostic product, and figures reflect specific experimental test partitions."
  },
  {
    id: "multi-strategy-rag-system",
    title: "Multi-Strategy Retrieval-Augmented Generation (RAG) System",
    category: "Generative AI / NLP",
    badge: "6 Retrieval Strategies & Two-Stage Reranking",
    shortDescription: "Built a modular retrieval-augmented generation system for answering questions from PDF documents, exploring multiple retrieval strategies and improving the quality of retrieved context.",
    fullDescription: "Built a modular retrieval-augmented generation system for answering questions from PDF documents, exploring multiple retrieval strategies and improving the quality of retrieved context. Engineered with LangChain LCEL, ChromaDB, and Llama 3.3 70B via Groq API.",
    technologies: ["Python", "LangChain", "ChromaDB", "Groq API", "Llama 3.3 70B", "BAAI/bge-reranker"],
    keyResult: "Implemented 6 retrieval strategies (Naive, Reranker, Corrective, Multi-Hop, Graph, Agentic) with two-stage cross-encoder reranking.",
    metricType: "Evaluation",
    metricValue: "6 Strategies Evaluated",
    architectureDetails: [
      "Document processing pipeline: PDF ingestion -> Text extraction -> Recursive character chunking -> SHA-256 deduplication.",
      "Vector Storage: ChromaDB embedded with BAAI/bge-base-en dense embeddings.",
      "Two-Stage Retrieval: Initial Maximal Marginal Relevance (MMR) retrieval followed by BAAI/bge-reranker-base cross-encoder reranking.",
      "LLM Synthesis: Llama 3.3 70B inference powered via ultra-low latency Groq Cloud API using LangChain Expression Language (LCEL)."
    ],
    methodology: [
      "Implemented and benchmarked 6 distinct retrieval paradigms: Naive similarity, Cross-encoder Reranker, Corrective RAG (CRAG), Multi-Hop QA, Knowledge Graph traversal, and Agentic routing.",
      "Self-correcting CRAG module evaluates document relevance prior to generation, triggering query rewriting if retrieved context is insufficient.",
      "SHA-256 chunk hash deduplication to eliminate redundancy across document versions."
    ],
    evaluationApproach: [
      "Qualitative and structural evaluation of generated answers for factual grounding, hallucinations, and context recall across multi-page technical documents.",
      "Benchmarked retrieval precision comparing single-stage dense vector search against two-stage reranked context sets."
    ],
    lessonsLearned: [
      "Two-stage reranking (dense retrieval + cross-encoder) substantially improves precision by evaluating token interactions that single vector embeddings miss.",
      "Query rewriting in CRAG is essential for colloquial or ambiguous user prompts."
    ],
    githubUrl: "https://github.com/Shaunak422",
    visualType: "rag-pipeline",
    honestNote: "System explores architectural strategies and context quality; benchmarks describe qualitative pipeline behavior rather than arbitrary synthetic latency numbers."
  },
  {
    id: "cnn-image-classification",
    title: "CNN-Based Image Classification — CIFAR-10",
    category: "Computer Vision / Deep Learning",
    badge: "80.5% Validation Accuracy",
    shortDescription: "Designed and evaluated a convolutional neural network for classifying CIFAR-10 images into ten categories, identifying optimal hyperparameters across 10+ experimental runs.",
    fullDescription: "Designed and evaluated a convolutional neural network for classifying CIFAR-10 images into ten categories. Reached 80.5% validation accuracy using a systematically optimized three-block CNN architecture in TensorFlow and Keras.",
    technologies: ["Python", "TensorFlow", "Keras", "CNNs", "Matplotlib", "NumPy"],
    keyResult: "Achieved 80.5% validation accuracy across 10 classes through systematic ablation over 10+ training runs.",
    metricType: "Accuracy",
    metricValue: "80.5% Val Accuracy",
    architectureDetails: [
      "Three-block convolutional neural network architecture: [Conv2D -> Conv2D -> MaxPooling2D -> Dropout] x 3.",
      "Non-linear activations: ReLU throughout hidden layers, Softmax on final 10-class dense layer.",
      "Regularization: Spatial dropout and batch normalization to mitigate overfitting on 32x32 color images."
    ],
    methodology: [
      "Systematic ablation study exploring kernel sizes (3x3 vs 5x5), network depth (1 to 4 blocks), learning rates (0.01 to 0.0001), optimizers (Adam vs. SGD), and batch sizes (32, 64, 128).",
      "Completed more than 10 controlled training runs logged with loss and accuracy curves.",
      "Identified batch size 64, learning rate 0.001, and 3x3 kernels with Adam optimizer as the optimal configuration."
    ],
    evaluationApproach: [
      "Hold-out validation accuracy evaluated on 10,000 CIFAR-10 test set images.",
      "Validation loss convergence monitoring to identify the onset of overfitting.",
      "Per-class confusion matrix analysis distinguishing challenging categories like cat vs. dog."
    ],
    lessonsLearned: [
      "Smaller 3x3 filter cascades provide stronger representational capacity with fewer parameters than large 5x5 kernels.",
      "Adam optimizer with lr=0.001 achieved far faster loss convergence than standard SGD on this scale."
    ],
    githubUrl: "https://github.com/Shaunak422",
    visualType: "cnn-blocks",
    honestNote: "Evaluated on the standardized CIFAR-10 benchmark. Results represent true logged validation accuracy from experimental training runs."
  },
  {
    id: "cybercrime-spatial-clustering",
    title: "Cybercrime Data Analysis and Spatial Clustering — India",
    category: "Data Analytics / Geospatial Intelligence",
    badge: "15 Categories, 3 Clusters, ANOVA Validated",
    shortDescription: "Analysed Indian cybercrime data to investigate geographic concentration patterns and segment states according to crime intensity using exploratory analysis and spatial K-means.",
    fullDescription: "Analysed Indian cybercrime data to investigate geographic concentration patterns and segment states according to crime intensity. Examined 15 cybercrime categories and patterns across the top five Indian cities using R, ggplot2, and spatial clustering.",
    technologies: ["R", "ggplot2", "dplyr", "tidyr", "sf", "K-Means", "rnaturalearth"],
    keyResult: "Identified geographic concentration patterns across 15 categories and segmented Indian states into 3 crime-intensity clusters validated by silhouette scoring and ANOVA.",
    metricType: "Clusters",
    metricValue: "3 Distinct Clusters",
    architectureDetails: [
      "Data wrangling and harmonization pipeline utilizing R tidyverse (dplyr, tidyr).",
      "Spatial feature engineering utilizing the 'sf' (Simple Features) package with geospatial state boundary coordinates.",
      "Analytical dashboard visualizations: correlation heatmaps, treemaps, and Herfindahl-Hirschman Index (HHI) concentration curves."
    ],
    methodology: [
      "Examined concentration across 15 statutory cybercrime classifications across top 5 metropolitan centres.",
      "Applied spatial K-means clustering on standardized crime incidence and geospatial coordinates to segment states into 3 intensity clusters (High, Moderate, Low).",
      "Cluster validation performed via silhouette analysis, within-cluster sum of squares (WSS), between-cluster sum of squares (BSS) ratio, and ANOVA tests."
    ],
    evaluationApproach: [
      "Statistical validation of cluster separability using ANOVA (p < 0.05 across key crime vectors).",
      "Silhouette score assessment to establish optimal k value without subjective bias.",
      "Herfindahl-Hirschman Index calculation to quantify geographic market concentration of specific offenses."
    ],
    lessonsLearned: [
      "Certain categories of cyber financial fraud exhibit severe geographical clustering, whereas identity theft showed broader diffusion.",
      "Incorporating geospatial coordinates alongside raw crime metrics prevented arbitrary administrative boundary skew."
    ],
    githubUrl: "https://github.com/Shaunak422",
    visualType: "geo-cluster",
    honestNote: "Based on empirical Indian NCRB crime dataset records; analysis highlights relative cluster segments rather than fabricated absolute city rankings."
  },
  {
    id: "diabetes-prediction-ml",
    title: "Diabetes Prediction Using Machine Learning",
    category: "Predictive Analytics / Classification",
    badge: "75% Accuracy & 9 Configuration Benchmarks",
    shortDescription: "Developed and evaluated a decision tree classification model using the Pima Indians Diabetes dataset, examining how split criteria and hyperparameter choices affect predictive performance.",
    fullDescription: "Developed and evaluated a decision tree classification model using the Pima Indians Diabetes dataset, examining how split criteria and hyperparameter choices affect predictive performance. Benchmarked Gini vs. Entropy and 9 parameter configurations in Scikit-learn.",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Decision Trees", "Seaborn"],
    keyResult: "Achieved 75% classification accuracy; evaluated precision, recall, and confusion-matrix trade-offs across 9 configurations.",
    metricType: "Accuracy",
    metricValue: "75% Accuracy",
    architectureDetails: [
      "Decision Tree Classifier with tree-depth pruning and minimum leaf sample constraints.",
      "Data preprocessing pipeline handling missing/zero physiological measurements (glucose, blood pressure, insulin) using Pandas.",
      "Visual model tree extraction and decision boundary plots."
    ],
    methodology: [
      "Comparative benchmark between Gini Impurity and Information Gain (Entropy) split criteria.",
      "Evaluated 9 tree configurations with varying max_depth (3, 5, 7, unlimited) and min_samples_split.",
      "Diagnosed class-level errors and false-negative clinical risks through confusion matrix breakdown."
    ],
    evaluationApproach: [
      "Holistic classification assessment: Accuracy (75%), Precision, Recall (Sensitivity), and F1-score.",
      "Confusion matrix evaluation to specifically monitor false negatives (unidentified diabetic patients).",
      "K-fold cross-validation to assess stability across test folds."
    ],
    lessonsLearned: [
      "Unpruned decision trees overfit severely on small physiological datasets; restricting tree depth to 4-5 improved generalization on unseen test subjects.",
      "In healthcare-adjacent screening, recall must be prioritized over raw accuracy to prevent false negatives."
    ],
    githubUrl: "https://github.com/Shaunak422",
    visualType: "decision-tree",
    honestNote: "Experimental machine learning study on the Pima Indians Diabetes dataset for educational & analytical purposes; not a medical diagnostic tool."
  }
];
