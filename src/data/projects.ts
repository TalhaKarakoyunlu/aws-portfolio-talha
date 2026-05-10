export type ProjectHighlight = {
  label: string;
  value: string;
};

export type ProjectGalleryItem = {
  src: string;
  alt: string;
  caption: string;
};

export type ProjectLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type ProjectDetail = {
  title: string;
  slug: string;
  summary: string;
  role?: string;
  timeline?: string;
  stack: string[];
  highlights: ProjectHighlight[];
  problem: string;
  approach: string[];
  outcome: string[];
  challenges: string[];
  gallery: ProjectGalleryItem[];
  links: ProjectLink[];
  featured?: boolean;
};

export const projects: ProjectDetail[] = [
  {
    title: 'Fire & Smoke Detection System',
    slug: 'fire-detection',
    featured: true,
    role: 'Computer Vision Intern',
    timeline: 'Aug 2024 - Sep 2024',
    summary:
      'Built a real-time fire and smoke detection system at AFAC Tech, progressing from OpenCV fundamentals through YOLOv5 to a production-capable YOLOv8 model - trained on consumer hardware under significant resource constraints.',
    stack: ['Python', 'YOLOv8', 'YOLOv5', 'OpenCV', 'Roboflow', 'Google Colab', 'NVIDIA CUDA'],
    highlights: [
      { label: 'Peak Detection Confidence', value: '~90%' },
      { label: 'Operational Confidence Range', value: '65 - 80%' },
      { label: 'Max Training Duration', value: '12+ hrs / run' },
      { label: 'Hardware', value: 'RTX 3060 (99% utilization)' },
    ],
    problem:
      'AFAC Tech needed a cost-effective fire and smoke detection system suitable for deployment in industrial or storage environments - places where high-end GPU infrastructure is not available. The core tension was accuracy versus hardware budget: capable real-time detection models typically demand compute that is not realistic at the edge.',
    approach: [
      'Built an OpenCV foundation first - grayscale conversion, blurring, edge detection, dilation and erosion, contour isolation, and spatial transformations. The goal was to understand image structure before touching any deep learning framework.',
      'Developed an initial fire detection prototype with YOLOv5. Quickly recognized a performance ceiling in detection speed and accuracy, and benchmarked it against YOLOv8 to confirm the gap was meaningful enough to justify migrating mid-project.',
      'Rebuilt the pipeline on YOLOv8 and extended the model scope to include smoke detection, sourcing separate public datasets from Roboflow for each class. Managing dataset imbalance between fire and smoke samples required careful augmentation to avoid corrupting the training distribution.',
      'Built an email alerting layer on top of the model - when smoke or fire crossed the confidence threshold, the system fired a Gmail notification with the captured frame attached, turning passive detection into a closed-loop alerting pipeline.',
      'Started training on Google Colab for free GPU access, but hit usage limits that blocked progress. Migrated to a local environment on an RTX 3060, which required configuring CUDA, managing drivers, and adapting the training scripts from a Linux-assumed Colab environment to Windows.',
      'Ran multi-epoch training sessions lasting up to 16 hours with GPU utilization peaking near 99%. Tuned parameters iteratively to manage overfitting risk across extended runs on limited VRAM.',
    ],
    outcome: [
      'Delivered a functional real-time fire and smoke detection model running via live camera feed.',
      'Shipped a closed-loop system, not just a model - detection events triggered Gmail alerts with frame attachments, suitable for unattended monitoring.',
      'Achieved detection confidence up to 90% for fire; operational range settled between 65 and 80% across varied conditions.',
      'Produced a lightweight, cost-effective solution viable for small industrial facilities or storage monitoring without dedicated inference hardware.',
    ],
    challenges: [
      'Smoke datasets from Roboflow lacked diversity, requiring augmentation that had to be applied conservatively to avoid degrading data quality.',
      'Google Colab GPU quotas were exhausted mid-project, forcing a full local environment migration with no pre-existing CUDA setup.',
      'Consumer hardware (RTX 3060, 6 GB VRAM) imposed hard limits on batch size and model complexity, making every training run a resource allocation exercise.',
      'Training runs of 12 - 16 hours with no early stopping meant a single bad hyperparameter choice cost an entire day.',
      'Attempted to build a custom dataset initially; abandoned it after the time cost proved disproportionate to what public Roboflow datasets could provide.',
    ],
    gallery: [
      {
        src: '/fire-detection-matches.webp',
        alt: 'Fire detection inference showing 0.89 confidence on a clean fire scene',
        caption: 'Peak detection confidence on a clean fire scene (0.89).',
      },
      {
        src: '/fire-detection-factory.webp',
        alt: 'Real-world fire detection on factory CCTV footage at 0.79 confidence',
        caption: 'Real-world test on factory CCTV footage provided by the supervisor (0.79).',
      },
      {
        src: '/fire-detection-smoke.webp',
        alt: 'Smoke detection on vehicle exhaust scene demonstrating dual-class capability',
        caption: 'Dual-class capability: smoke detected on a vehicle exhaust scene.',
      },
      {
        src: '/fire-detection-alert.webp',
        alt: 'Gmail alert email sent when smoke was detected with a captured frame attached',
        caption: 'Email alerting pipeline firing a Gmail notification with the captured frame.',
      },
    ],
    links: [
      { label: 'YouTube Presentation', href: 'https://youtu.be/zky8htvPG0o' },
      { label: 'Roboflow Fire Dataset', href: 'https://universe.roboflow.com/-jwzpw/continuous_fire/dataset/6' },
      { label: 'Roboflow Smoke Dataset', href: 'https://universe.roboflow.com/orbit-w0l5f/smoke-detection-orbit/dataset/2' },
    ],
  },
  {
    title: 'Qwen2.5 Customer Support Chatbot',
    slug: 'qwen-chatbot',
    role: 'AI Research Intern',
    timeline: 'Jun 2025 - Aug 2025',
    summary:
      'Fine-tuned Qwen2.5 with LoRA to act as a customer support assistant, with a Gradio interface for testing - all locally on consumer hardware.',
    stack: ['Python', 'PyTorch', 'Qwen2.5', 'LoRA', 'bitsandbytes', 'Gradio', 'Hugging Face'],
    highlights: [
      { label: 'Base model', value: 'Qwen2.5-1.5B-Instruct' },
      { label: 'Fine-tuning method', value: 'LoRA (r=64, alpha=16)' },
      { label: 'Quantization', value: '4-bit + FP16 (bitsandbytes)' },
      { label: 'Dataset', value: 'Bitext (8,175 examples)' },
    ],
    problem:
      "AGU's research track required a local-only LLM customer support assistant with no reliance on commercial cloud APIs. The constraint was making a modern instruction-tuned model behave like a domain assistant on consumer hardware bounded by 6 GB of VRAM, without giving up response quality or training stability.",
    approach: [
      'Set up training, inference, and merge scripts; resolved bitsandbytes compatibility issues on Windows that initially forced CPU-only runs.',
      'Dropped a hand-built dataset attempt and integrated the Bitext customer support dataset from Kaggle, writing CSV-to-JSONL conversion that handled UTF-8 BOM, missing assistant replies, and inconsistent column names.',
      'Fine-tuned with LoRA, iterating on batch size, gradient accumulation, learning rate scheduling, and 4-bit / FP16 / FP32 fallback to fit the model into available VRAM.',
      'Ran short smoke tests before long training runs to catch divergence early instead of losing days to bad hyperparameters.',
      'Built a Gradio UI for interactive testing, defaulting to CPU so it would not contend with GPU training.',
    ],
    outcome: [
      'Delivered a working LoRA-fine-tuned Qwen2.5 customer support assistant running entirely on local consumer hardware.',
      'Produced a reusable dataset pipeline that turned a noisy public CSV into clean instruction-tuning JSONL, reusable for any similar Hugging Face dataset.',
      'Shipped a Gradio UI for interactive testing, decoupled from the training GPU so experiments and demos could run side by side.',
      'Established a smoke-test-before-long-run discipline that kept hyperparameter iteration fast and recoverable on limited hardware.',
    ],
    challenges: [
      'VRAM limits on consumer hardware forced 4-bit quantization, gradient accumulation, and aggressive batch-size tuning to fit Qwen2.5 into 6 GB.',
      'bitsandbytes Windows compatibility initially forced CPU-only training; required chasing through environment, build, and CUDA-version mismatches before GPU training was usable.',
      'The Bitext customer support dataset shipped with UTF-8 BOM artifacts, missing assistant replies, and inconsistent column names that broke naive CSV ingestion.',
      'Long training runs needed careful learning rate scheduling and FP16 / FP32 fallback paths to avoid divergence on the 4-bit base model.',
      'Gradio UI and training jobs both wanted the GPU; defaulting the UI to CPU sidestepped contention without disrupting active training.',
      'Abandoned the initial hand-built dataset once the time-vs-quality trade-off proved unjustified, mirroring the AFAC lesson about custom vs. public data.',
    ],
    gallery: [
      {
        src: '/qwen-chatbot-ui.webp',
        alt: 'Gradio interface for the customer support chatbot',
        caption: 'Gradio UI testing the merged LoRA adapter.',
      },
      {
        src: '/qwen-chatbot-training.webp',
        alt: 'Qwen2.5 LoRA training run output',
        caption: 'LoRA fine-tuning run on Qwen2.5-1.5B-Instruct (r=64, alpha=16, 4-bit + FP16).',
      },
    ],
    links: [
      { label: 'YouTube Presentation', href: 'https://youtu.be/12e_yhELeQ4', external: true },
    ],
  },
  {
    title: 'miRKeggGSM',
    slug: 'mirkegggsm',
    role: 'Student Researcher - Capstone Project',
    timeline: 'Sep 2024 - Jan 2025',
    summary:
      'Contributed to a bioinformatics research project developing a machine learning pipeline for cancer classification using miRNA expression data and KEGG pathway knowledge. Supervised by Prof. Burcu Bakir Gungor and Prof. Malik Yousef.',
    stack: ['Python', 'R', 'KNIME', 'Random Forest', 'scikit-learn'],
    highlights: [
      { label: 'Cancer datasets', value: '12 (GEO)' },
      { label: 'Classification method', value: 'Random Forest' },
      { label: 'Best AUC', value: '>0.99' },
      { label: 'Framework', value: 'G-S-M (KEGG pathways)' },
    ],
    problem:
      'High-dimensional miRNA expression data is noisy and hard to interpret. Existing methods ignore biologically meaningful relationships between miRNAs, genes, and pathways, leading to less interpretable cancer classification models.',
    approach: [
      'Wrote Python scripts to collect and preprocess 12 miRNA expression datasets from GEO across multiple cancer types.',
      'Debugged and resolved errors in the existing KNIME workflow nodes to get the G-S-M pipeline running end-to-end.',
      'Ran the full evaluation pipeline across all 12 datasets and compiled results.',
      'Wrote the final capstone report documenting methodology, results, and conclusions.',
    ],
    outcome: [
      'Pipeline successfully evaluated across 12 cancer datasets including lung, breast, gastric, and esophageal cancer.',
      'Achieved AUC above 0.99 on several datasets with accuracy near 96%.',
      'Disease-enriched KEGG grouping reduced feature count from hundreds to fewer than ten miRNAs in some cases while maintaining strong performance.',
    ],
    challenges: [
      'KNIME workflow had pre-existing node errors that required troubleshooting before any experiments could run.',
      'Datasets from GEO required custom collection and preprocessing scripts to handle inconsistent formats.',
      'Large datasets pushed KNIME resource limits, with some runs taking full days to complete.',
    ],
    gallery: [
      {
        src: '/mirkegggsm-architecture.webp',
        alt: 'miRKeggGSM G-S-M pipeline architecture diagram',
        caption: 'G-S-M architecture: Grouping, Scoring, and Modeling pipeline.',
      },
      {
        src: '/mirkegggsm-workflow.webp',
        alt: 'KNIME workflow implementing the G-S-M pipeline',
        caption: 'KNIME workflow implementing the G-S-M pipeline.',
      },
    ],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/malikyousef/Groups-Filtering-Scoring-in-G-S-M-',
        external: true,
      },
    ],
  },
  {
    title: 'Pixie',
    slug: 'pixie',
    summary: 'Lightweight mobile photo editor with smooth, mobile-first UI.',
    stack: ['Flutter', 'Dart', 'Mobile'],
    highlights: [
      { label: 'Mobile-first UI', value: 'Touch friendly' },
      { label: 'Editing tools', value: 'Core adjustments' },
      { label: 'Performance', value: 'Lightweight build' },
      { label: 'Export flow', value: 'Quick sharing' },
    ],
    problem:
      'Mobile users needed a fast, simple editor for quick photo touch-ups without heavy tooling.',
    approach: [
      'Designed a Flutter UI with touch-first controls and clear editing affordances.',
      'Implemented core adjustment tools with a streamlined export flow.',
      'Optimized rendering to keep interactions responsive on mid-range devices.',
    ],
    outcome: [
      'Delivered a lightweight editor with a smooth, mobile-first experience.',
      'Created a reusable component set for consistent editing workflows.',
    ],
    challenges: [
      'Balancing image processing with UI responsiveness.',
      'Keeping the app footprint small while supporting core tools.',
      'Maintaining smooth gesture interactions across devices.',
    ],
    gallery: [
      {
        src: '/project-placeholder-1.svg',
        alt: 'Pixie editing interface placeholder',
        caption: 'Mobile-first editing layout placeholder.',
      },
      {
        src: '/project-placeholder-2.svg',
        alt: 'Pixie adjustment tools placeholder',
        caption: 'Core adjustment tools and export flow placeholder.',
      },
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/TalhaKarakoyunlu/Pixie', external: true },
    ],
  },
  {
    title: 'Music App',
    slug: 'music-app',
    summary: 'Web app for music browsing and playlist management.',
    stack: ['EJS', 'Spotify API', 'JavaScript'],
    highlights: [
      { label: 'Music discovery', value: 'Search + browse' },
      { label: 'Playlist flow', value: 'Organized queues' },
      { label: 'API integration', value: 'Spotify API' },
      { label: 'Web UI', value: 'Responsive views' },
    ],
    problem:
      'Needed a clean web experience for browsing music and organizing playlists in one place.',
    approach: [
      'Built server-rendered views with EJS for fast, simple navigation.',
      'Integrated the Spotify API to power search and catalog browsing.',
      'Designed a playlist workflow focused on clarity and speed.',
    ],
    outcome: [
      'Delivered a lightweight web app for discovering tracks and managing playlists.',
      'Provided a structured UI that keeps music exploration organized.',
    ],
    challenges: [
      'Keeping API-driven pages responsive under varying data sizes.',
      'Balancing search depth with fast navigation.',
    ],
    gallery: [
      {
        src: '/project-placeholder-2.svg',
        alt: 'Music app browsing placeholder',
        caption: 'Music discovery and browsing placeholder.',
      },
      {
        src: '/project-placeholder-3.svg',
        alt: 'Playlist management placeholder',
        caption: 'Playlist management and queueing placeholder.',
      },
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/TalhaKarakoyunlu/Music-App', external: true },
    ],
  },
  {
    title: 'Chat App',
    slug: 'chat-app',
    summary: 'Real-time messaging with AES-256 encrypted communication.',
    stack: ['Flutter', 'MySQL', 'AES-256'],
    highlights: [
      { label: 'Realtime chat', value: 'Live messaging' },
      { label: 'Encryption', value: 'AES-256' },
      { label: 'Storage', value: 'MySQL' },
      { label: 'Mobile', value: 'Flutter UI' },
    ],
    problem:
      'Needed a secure, real-time chat experience for users who value privacy and reliability.',
    approach: [
      'Built a Flutter client focused on responsive messaging flows.',
      'Implemented encrypted message payloads using AES-256.',
      'Stored conversation history in MySQL for persistence.',
    ],
    outcome: [
      'Delivered a secure chat experience with real-time delivery.',
      'Maintained consistent messaging flows across sessions.',
    ],
    challenges: [
      'Balancing encryption overhead with message latency.',
      'Ensuring consistent sync between client and stored history.',
    ],
    gallery: [
      {
        src: '/project-placeholder-3.svg',
        alt: 'Chat app conversation placeholder',
        caption: 'Conversation UI and message flow placeholder.',
      },
      {
        src: '/project-placeholder-1.svg',
        alt: 'Chat app security placeholder',
        caption: 'Encrypted messaging status placeholder.',
      },
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/TalhaKarakoyunlu/Chat-App', external: true },
    ],
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);

export const getFeaturedProject = () =>
  projects.find((project) => project.featured);
