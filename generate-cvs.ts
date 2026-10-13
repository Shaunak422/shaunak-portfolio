import fs from 'fs';
import PDFDocument from 'pdfkit';

function createCV(outputPath: string, title: string, summary: string, skills: { [category: string]: string }, projects: any[]) {
  const doc = new PDFDocument({
    size: 'A4',
    margins: { top: 36, bottom: 36, left: 40, right: 40 }
  });

  const stream = fs.createWriteStream(outputPath);
  doc.pipe(stream);

  // Header
  doc.fontSize(22).font('Helvetica-Bold').fillColor('#111827').text('Shaunak Manoj Dinkar', { align: 'center' });
  doc.moveDown(0.2);
  doc.fontSize(12).font('Helvetica-Bold').fillColor('#374151').text(title, { align: 'center' });
  doc.moveDown(0.2);

  doc.fontSize(9).font('Helvetica').fillColor('#4B5563').text(
    'dinkarshaunak23@gmail.com  |  +353 89 9612709  |  Ireland  |  linkedin.com/in/shaunak-dinkar-844868225  |  github.com/Shaunak422',
    { align: 'center' }
  );

  doc.moveDown(0.5);
  doc.strokeColor('#D1D5DB').lineWidth(0.8).moveTo(40, doc.y).lineTo(555, doc.y).stroke();
  doc.moveDown(0.4);

  // Section helper
  const addSection = (heading: string) => {
    doc.moveDown(0.3);
    doc.fontSize(11).font('Helvetica-Bold').fillColor('#111827').text(heading.toUpperCase());
    doc.strokeColor('#9CA3AF').lineWidth(0.5).moveTo(40, doc.y + 2).lineTo(555, doc.y + 2).stroke();
    doc.moveDown(0.3);
  };

  // SUMMARY
  addSection('Summary');
  doc.fontSize(9.5).font('Helvetica').fillColor('#374151').lineGap(2).text(summary, { align: 'justify' });

  // EXPERIENCE
  addSection('Experience');
  
  // Job 1
  doc.fontSize(10).font('Helvetica-Bold').fillColor('#111827').text('React Developer Intern, C-ACE Governance Solutions Pvt. Ltd.', { continued: true });
  doc.font('Helvetica').fillColor('#4B5563').text('   01/2025 - 07/2025 | Pune, India', { align: 'right' });
  doc.moveDown(0.2);
  doc.fontSize(9).font('Helvetica').fillColor('#374151').lineGap(1.5).list([
    'Reduced manual content-update effort by ~40% by designing reusable RESTful API integrations and front-end components using React.js, Node.js, Express.js, and MySQL, improving data consistency across systems.',
    'Automated customer interactions and real-time, location-based service delivery by integrating a Dialogflow chatbot with the Google Maps API, in Git-based, cross-functional workflows.'
  ], { bulletRadius: 1.5, textIndent: 10 });

  doc.moveDown(0.3);
  // Job 2
  doc.fontSize(10).font('Helvetica-Bold').fillColor('#111827').text('Software Development Intern, iConcile Technologies Pvt. Ltd.', { continued: true });
  doc.font('Helvetica').fillColor('#4B5563').text('   05/2024 - 06/2024 | Pune, India', { align: 'right' });
  doc.moveDown(0.2);
  doc.fontSize(9).font('Helvetica').fillColor('#374151').lineGap(1.5).list([
    'Cut UI rendering time by ~30% by optimising component and state-management logic in a production React front end.',
    'Automated structured workflow visualisations by implementing the Dagre graph layout algorithm within React Flow, eliminating manual diagram layout work.'
  ], { bulletRadius: 1.5, textIndent: 10 });

  // EDUCATION
  addSection('Education');
  doc.fontSize(9.5).font('Helvetica-Bold').fillColor('#111827').text('MSc Data Science & Analytics, Maynooth University', { continued: true });
  doc.font('Helvetica').fillColor('#4B5563').text('   2025 - Present | Ireland', { align: 'right' });
  
  doc.fontSize(9.5).font('Helvetica-Bold').fillColor('#111827').text('MSc Computer Science, Savitribai Phule Pune University', { continued: true });
  doc.font('Helvetica').fillColor('#4B5563').text('   2023 - 2025 | India', { align: 'right' });
  doc.fontSize(8.5).font('Helvetica').fillColor('#4B5563').text('CGPA: 9.48 / 10');

  doc.fontSize(9.5).font('Helvetica-Bold').fillColor('#111827').text('BSc Computer Science, Savitribai Phule Pune University', { continued: true });
  doc.font('Helvetica').fillColor('#4B5563').text('   2020 - 2023 | India', { align: 'right' });
  doc.fontSize(8.5).font('Helvetica').fillColor('#4B5563').text('CGPA: 9.45 / 10');

  // SKILLS
  addSection('Skills');
  for (const [cat, val] of Object.entries(skills)) {
    doc.fontSize(9).font('Helvetica-Bold').fillColor('#111827').text(`${cat}: `, { continued: true });
    doc.font('Helvetica').fillColor('#374151').text(val);
  }

  // CERTIFICATIONS
  addSection('Certifications');
  doc.fontSize(9).font('Helvetica').fillColor('#374151').list([
    'Google Data Analytics Professional Certificate (Google)',
    'IBM Machine Learning Professional Certificate (Coursera)'
  ], { bulletRadius: 1.5, textIndent: 10 });

  // PROJECTS
  addSection('Projects');
  projects.forEach((p) => {
    doc.fontSize(9.5).font('Helvetica-Bold').fillColor('#111827').text(p.title, { continued: true });
    doc.font('Helvetica-Oblique').fillColor('#4B5563').text(` | ${p.tech}`);
    doc.fontSize(8.5).font('Helvetica').fillColor('#374151').lineGap(1.2).list(p.points, { bulletRadius: 1.5, textIndent: 10 });
    doc.moveDown(0.2);
  });

  doc.end();
}

// 1. AI / ML Engineer CV
createCV(
  './public/Shaunak_Manoj_Dinkar_AI_ML_Engineer_CV.pdf',
  'AI / ML Engineer',
  'Data Science & Analytics postgraduate (Maynooth University) with hands-on experience building and evaluating deep learning and GenAI systems using PyTorch, TensorFlow, and LangChain. Skilled in designing CNN and ResNet-based architectures, retrieval-augmented generation (RAG) pipelines, and rigorous model evaluation methodology, with a strong foundation in Python, SQL, end-to-end ML experimentation, and production software engineering using Git and REST APIs.',
  {
    'Programming': 'Python, SQL (PostgreSQL, MySQL), R, JavaScript',
    'Deep Learning': 'PyTorch, PyTorch Lightning, TensorFlow, Keras, CNNs, ResNet1D',
    'GenAI & NLP': 'LangChain, Retrieval-Augmented Generation (RAG), LLMs (Llama 3.3), ChromaDB, Hugging Face, Prompt Engineering',
    'Tools': 'Git, GitHub, Docker'
  },
  [
    {
      title: 'Single-Lead ECG for Structural Heart Disease Detection',
      tech: 'Python, PyTorch, PyTorch Lightning',
      points: [
        'Reached 71% AUROC from single-lead ECG input alone (vs. 80% for 12-lead ECG) by training a ResNet1D architecture with zero-masking and lead-ablation experiments across 12 cardiac conditions.',
        'Delivered a clinically-rigorous feasibility assessment for wearable ECG devices by building an evaluation pipeline with dynamic threshold optimisation across AUROC, AUPRC, sensitivity, specificity, PPV, and NPV.'
      ]
    },
    {
      title: 'Multi-Strategy Retrieval-Augmented Generation (RAG) System',
      tech: 'Python, LangChain, ChromaDB, Groq API',
      points: [
        'Engineered a modular RAG pipeline spanning 6 retrieval strategies (Naive, Reranker, Corrective, Multi-Hop, Graph, Agentic) for PDF-document QA using LangChain LCEL, ChromaDB, and Llama 3.3 70B via Groq API.',
        'Improved retrieval precision over single-stage similarity search via two-stage retrieval (BAAI/bge-base-en MMR search + BAAI/bge-reranker-base cross-encoder reranking), SHA-256 deduplication, and self-correcting CRAG query rewriting.'
      ]
    },
    {
      title: 'CNN-Based Image Classification - CIFAR-10',
      tech: 'Python, TensorFlow, Keras',
      points: [
        'Reached 80.5% validation accuracy classifying CIFAR-10 images into 10 categories by designing a 3-block CNN (Conv2D-MaxPooling-Dropout) in TensorFlow/Keras with ReLU activations and Adam optimisation.',
        'Identified batch size 64, 0.001 learning rate, and 3x3 kernels as optimal by systematically ablating depth, kernel size, learning rate, optimiser (Adam vs. SGD), and batch size across 10+ training runs.'
      ]
    }
  ]
);

// 2. Data Analyst CV
createCV(
  './public/Shaunak_Manoj_Dinkar_Data_Analyst_CV.pdf',
  'Data Analyst',
  'Data Analyst with a postgraduate qualification in Data Science & Analytics from Maynooth University and hands-on experience in SQL, Python, and statistical modelling for data-driven decision-making. Skilled in data cleaning, exploratory data analysis (EDA), and predictive modelling to turn raw data into actionable business insights, with strong dashboard reporting and visualisation capability using Power BI and Excel, and a solid foundation in database management and data pipelines.',
  {
    'Programming': 'Python, SQL (PostgreSQL, MySQL), R, JavaScript',
    'Data Analysis & BI': 'Pandas, NumPy, Power BI, Excel, Matplotlib, Seaborn, ggplot2 (R)',
    'Statistical Modelling': 'Scikit-learn, Feature Engineering, Model Evaluation, Hyperparameter Tuning',
    'Tools': 'Git, GitHub, Docker, QGIS'
  },
  [
    {
      title: 'Single-Lead ECG for Structural Heart Disease Detection',
      tech: 'Python, PyTorch, PyTorch Lightning',
      points: [
        'Reached 71% AUROC from single-lead ECG input alone (vs. 80% for 12-lead ECG) by training a ResNet1D architecture with zero-masking and lead-ablation experiments across 12 cardiac conditions.',
        'Delivered a clinically-rigorous feasibility assessment for wearable ECG devices by building an evaluation pipeline with dynamic threshold optimisation across AUROC, AUPRC, sensitivity, specificity, PPV, and NPV.'
      ]
    },
    {
      title: 'Cybercrime Data Analysis & Spatial Clustering - India',
      tech: 'R, ggplot2, dplyr, sf, K-Means Clustering',
      points: [
        'Surfaced concentration patterns across 15 cybercrime categories and the top 5 Indian cities through exploratory data analysis, correlation heatmaps, treemaps, and Herfindahl-Hirschman Index (HHI) visualisations in R (dplyr, tidyr, ggplot2).',
        'Segmented Indian states into 3 crime-intensity clusters via spatial K-means clustering on geospatial coordinates (sf, rnaturalearth), validated with silhouette scoring, WSS/BSS ratios, and ANOVA.'
      ]
    },
    {
      title: 'Diabetes Prediction using Machine Learning',
      tech: 'Python, Scikit-learn, Pandas',
      points: [
        'Achieved 75% classification accuracy on the Pima Indians Diabetes dataset by benchmarking Gini vs. Entropy split criteria and tuning hyperparameters across 9 Decision Tree configurations.',
        'Confirmed model reliability for clinical-style decision support by evaluating precision and recall alongside accuracy, using confusion-matrix analysis to diagnose class-level errors.'
      ]
    }
  ]
);

console.log('CVs generated successfully in public/');
