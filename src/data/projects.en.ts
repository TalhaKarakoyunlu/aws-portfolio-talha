import type { ProjectDetail } from '@/data/projectTypes';

export const projectsEn: ProjectDetail[] = [
  {
    title: 'Fire & Smoke Detection System',
    slug: 'fire-detection',
    featured: true,
    role: 'Computer Vision Intern',
    timeline: 'Aug 2024 - Sep 2024',
    summary:
      'I developed a real-time fire and smoke detection system at AFAC Tech. I started the process by laying the image processing fundamentals with OpenCV, and after seeing the performance gap following my YOLOv5 prototypes, I migrated to the YOLOv8 architecture. I successfully optimized the model training on consumer-grade hardware with limited VRAM capacity.',
    stack: ['Python', 'YOLOv8', 'YOLOv5', 'OpenCV', 'Roboflow', 'Google Colab', 'NVIDIA CUDA'],
    highlights: [
      { label: 'Peak detection confidence', value: '~90%' },
      { label: 'Operational confidence range', value: '65 - 80%' },
      { label: 'Max training duration', value: '12+ hrs / run' },
      { label: 'Hardware', value: 'RTX 3060 (99% utilization)' },
    ],
    problem:
      'AFAC Tech needed a cost-effective solution for industrial areas and warehouses that could operate in environments without high-compute GPUs. Since real-time deep learning models typically require immense computational power on edge devices, the core engineering problem here was striking the right balance between accuracy and hardware constraints.',
    approach: [
      'Before moving on to deep learning models, I applied fundamental image processing algorithms (grayscale, blur, edge detection, erosion/dilation, contours) with OpenCV to properly understand the dataset.',
      'I spun up the initial fire prototype using YOLOv5. When I hit speed and accuracy bottlenecks, I ran benchmark tests with YOLOv8 and upgraded the architecture to the more performant version.',
      'I added smoke detection as a second class to the model. I resolved the data imbalance between the fire and smoke classes using strategic data augmentation techniques that wouldn\'t distort the model\'s learning distribution.',
      'To ensure the system wasn\'t just a demo on a screen, I integrated an alert mechanism that immediately sends an email (Gmail) with the captured frame whenever the designated confidence threshold is crossed.',
      'I started the training sessions on Google Colab since it was free. When I hit the quota limits, I moved the process to my local hardware (RTX 3060); this required adapting Linux/Colab-oriented scripts to a Windows environment and a local CUDA architecture.',
      'I ran training sessions lasting up to 16 hours with 99% GPU utilization, constantly optimizing parameters to prevent overfitting on just 6 GB of VRAM.',
    ],
    outcome: [
      'A real-time detection model that runs flawlessly on live camera feeds.',
      'Not just a model stuck in a development environment, but an end-to-end system ready for unattended monitoring, capable of sending emails upon detection.',
      'A confidence score of up to 90% in fire detection, with a stable operating performance between 65-80% in daily scenarios depending on environmental conditions.',
      'A lightweight, optimized architecture ideal for small to medium-sized industrial spaces that doesn\'t require dedicated inference hardware.',
    ],
    challenges: [
      'The limited diversity of the smoke dataset sourced from Roboflow; I had to carefully tune the boundaries during data augmentation so the model wouldn\'t lose its accuracy.',
      'Running out of my Colab GPU quota mid-project, forcing me to migrate the entire configuration to my local machine without a ready-to-use CUDA environment.',
      'Working with a consumer-grade GPU with limited capacity (6 GB VRAM), which required constant budget/performance optimization regarding batch size and model parameters.',
      'The risk of throwing an entire day away due to a single bad hyperparameter choice during 12-16 hour training runs without an early stopping mechanism.',
      'Realizing that instead of collecting my own dataset from scratch, cleaning and utilizing open-source Roboflow datasets was a much more rational engineering decision in terms of scope and time management.',
    ],
    gallery: [
      {
        src: '/fire-detection-matches.webp',
        alt: 'Fire detection inference showing 0.89 confidence on a clean fire scene',
        caption: 'Strong fire detection on a clean scene (Confidence score: 0.89).',
      },
      {
        src: '/fire-detection-factory.webp',
        alt: 'Real-world fire detection on factory CCTV footage at 0.79 confidence',
        caption: 'Test on factory CCTV provided by my supervisor (Confidence score: 0.79).',
      },
      {
        src: '/fire-detection-smoke.webp',
        alt: 'Smoke detection on vehicle exhaust scene demonstrating dual-class capability',
        caption: 'Smoke class detection on a vehicle exhaust scene.',
      },
      {
        src: '/fire-detection-alert.webp',
        alt: 'Gmail alert email sent when smoke was detected with a captured frame attached',
        caption: 'Automatic email alert sent with the captured frame when smoke is detected.',
      },
    ],
    links: [
      { label: 'YouTube presentation', href: 'https://youtu.be/zky8htvPG0o' },
      { label: 'Roboflow fire dataset', href: 'https://universe.roboflow.com/-jwzpw/continuous_fire/dataset/6' },
      { label: 'Roboflow smoke dataset', href: 'https://universe.roboflow.com/orbit-w0l5f/smoke-detection-orbit/dataset/2' },
    ],
  },
  {
    title: 'Qwen2.5 Customer Support Chatbot',
    slug: 'qwen-chatbot',
    role: 'AI Research Intern',
    timeline: 'Jun 2025 - Aug 2025',
    summary:
      'I fine-tuned the Qwen2.5 language model using LoRA to serve as a customer support assistant. I carried out the entire development process on local consumer-grade hardware and integrated a Gradio interface into the system to allow for model testing.',
    stack: ['Python', 'PyTorch', 'Qwen2.5', 'LoRA', 'bitsandbytes', 'Gradio', 'Hugging Face'],
    highlights: [
      { label: 'Base model', value: 'Qwen2.5-1.5B-Instruct' },
      { label: 'Optimization method', value: 'LoRA (r=64, alpha=16)' },
      { label: 'Quantization', value: '4-bit + FP16 (bitsandbytes)' },
      { label: 'Dataset', value: 'Bitext (8,175 examples)' },
    ],
    problem:
      'As part of a research project at AGU, there was a need for a customer support-style LLM architecture that could run entirely locally, independent of paid cloud-based APIs. The biggest challenge was maintaining the response quality of a modern AI model while keeping the training and inference processes stable under a strict 6 GB VRAM limit.',
    approach: [
      'I configured the training, inference, and model merging pipelines. I prepared the environment by resolving \'bitsandbytes\' incompatibilities on Windows that initially caused a CPU bottleneck.',
      'I discarded an insufficient, manually-labeled dataset in favor of the comprehensive Bitext CSV dataset from Kaggle. I wrote a parsing script that fixed broken UTF-8 characters, missing assistant replies, and irregular columns.',
      'To fit the model into the limited VRAM, I conducted LoRA training using 4-bit quantization, gradient accumulation, and careful learning rates (LR), coupled with FP16/FP32 fallback strategies.',
      'To prevent faulty parameters from wasting time during multi-day training runs, I implemented quick debugging tests (smoke tests) prior to the long runs.',
      'To prevent the Gradio test interface from conflicting with the GPU resources during the training process, I configured the UI to run on the CPU by default.',
    ],
    outcome: [
      'A Qwen2.5 model fine-tuned specifically for customer support scenarios, running entirely on local hardware without external dependencies.',
      'A reusable data preparation pipeline that converts noisy and irregular datasets (CSV) into a clean JSONL format suitable for model training.',
      'A CPU-focused Gradio design that allowed training processes and interface demos to run side-by-side without locking up the hardware.',
      'Developed a fail-fast practice to avoid the costs of long, unsuccessful training runs.',
    ],
    challenges: [
      'The necessity of applying 4-bit quantization to the Qwen2.5 model due to the 6 GB VRAM constraint, forcing aggressive batch sizes that skirted hardware limits.',
      'The initial fallback to CPU-only execution due to compilation issues with the \'bitsandbytes\' library on Windows, and the process of resolving these incompatibilities.',
      'Character encoding (BOM) errors and inconsistent columns in the public Bitext dataset that broke standard CSV reading operations.',
      'The need to carefully plan the learning rate to prevent the 4-bit based model from diverging during long training runs.',
      'Resource conflicts caused by loading both the Gradio interface and the model training onto the GPU simultaneously, which was solved by isolating the UI to the CPU.',
      'The decision to leverage public datasets rather than building a custom dataset in order to train a comprehensive model within a limited timeframe.',
    ],
    gallery: [
      {
        src: '/qwen-chatbot-ui.webp',
        alt: 'Gradio interface for the customer support chatbot',
        caption: 'Gradio UI powered by the merged LoRA adapter.',
      },
      {
        src: '/qwen-chatbot-training.webp',
        alt: 'Qwen2.5 LoRA training run output',
        caption: 'LoRA training on Qwen2.5-1.5B-Instruct (r=64, alpha=16, 4-bit and FP16).',
      },
    ],
    links: [{ label: 'YouTube presentation', href: 'https://youtu.be/12e_yhELeQ4', external: true }],
  },
  {
    title: 'miRKeggGSM',
    slug: 'mirkegggsm',
    role: 'Student Researcher - Capstone Project',
    timeline: 'Sep 2024 - Jan 2025',
    summary:
      'I contributed to a bioinformatics capstone project as a researcher. We developed a machine learning data pipeline that performs cancer classification by combining miRNA expression data with KEGG pathway structures. Advisors: Prof. Dr. Burcu Bakir Gungor and Prof. Dr. Malik Yousef.',
    stack: ['Python', 'R', 'KNIME', 'Random Forest', 'scikit-learn'],
    highlights: [
      { label: 'Cancer datasets', value: '12 (GEO)' },
      { label: 'Classification method', value: 'Random Forest' },
      { label: 'Best AUC score', value: '>0.99' },
      { label: 'Framework', value: 'G-S-M (KEGG pathways)' },
    ],
    problem:
      'miRNA data is typically highly dimensional and noisy. Since most classification algorithms ignore the biological relationships between miRNAs, genes, and pathways, the biological interpretability and reliability of the resulting models remain low.',
    approach: [
      'I wrote Python scripts to download 12 distinct miRNA datasets covering various cancer types from the GEO (Gene Expression Omnibus) platform and applied data preprocessing.',
      'I debugged structural errors in the existing KNIME nodes to ensure the G-S-M (Grouping, Scoring, Modeling) workflow ran flawlessly end-to-end.',
      'I ran the performance evaluation phase across all 12 datasets and reported the algorithms\' metrics.',
      'I authored the academic capstone report, detailing the applied methodologies, the results obtained, and the biological inferences.',
    ],
    outcome: [
      'A stable data pipeline running smoothly across 12 datasets containing different cancer types, such as lung, breast, gastric, and esophageal cancer.',
      'A successful AUC score above 0.99 and classification accuracies reaching up to 96% across multiple datasets.',
      'The ability to reduce hundreds of features down to fewer than 10 miRNAs without compromising model performance, thanks to KEGG-based disease grouping.',
    ],
    challenges: [
      'The necessity of undergoing a serious debugging process before starting the actual analyses, due to faulty nodes in the inherited KNIME workflow.',
      'Having to write dataset-specific parsing scripts because the data on the GEO platform possessed inconsistent formats.',
      'The KNIME analyses heavily taxing the hardware due to the volume of the datasets, with the training of some models taking entire days.',
    ],
    gallery: [
      {
        src: '/mirkegggsm-architecture.webp',
        alt: 'miRKeggGSM G-S-M pipeline architecture diagram',
        caption: 'G-S-M architecture: Grouping, scoring, and modeling phases.',
      },
      {
        src: '/mirkegggsm-workflow.webp',
        alt: 'KNIME workflow implementing the G-S-M pipeline',
        caption: 'The KNIME workflow executing the G-S-M data pipeline.',
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
    role: 'Student Developer · Group Project',
    timeline: '2023 (Abdullah Gül University)',
    summary:
      'A Flutter Android photo editing app featuring Firebase authentication, 43 built-in image filters, and AI-powered features (background removal, colorization, upscaling) via the Cutout Pro API.',
    stack: ['Flutter', 'Dart', 'Firebase', 'Cutout Pro API'],
    highlights: [
      { label: 'Filters', value: '43 Types' },
      { label: 'Authentication', value: 'Firebase Authentication' },
      { label: 'AI features', value: 'Cutout Pro API' },
      { label: 'Platform', value: 'Android (Flutter)' },
    ],
    problem:
      'For a university course, our team had to deliver a stable mobile photo editor complete with a real authentication infrastructure, gallery/camera access, and various AI integrations. The main factor complicating our project timeline was that the team was still in the process of learning the Flutter framework.',
    approach: [
      'I integrated Firebase Authentication into the project to provide user registration, login, and logout functionalities complete with error handling.',
      'I designed a module that allowed users to start their editing workflow either by selecting an image from their device gallery or by taking a photo directly with the camera.',
      'I added 43 different local filter presets into the app that could save the edited photos back to the device.',
      'I completed the Cutout Pro API integration for background removal, face detection, black-and-white colorization, and cartoonification in 11 different styles.',
      'To isolate the third-party API results before merging them into the main flow, I developed a test and validation screen that provided a before/after comparison.',
    ],
    outcome: [
      'An end-to-end Android app experience that flawlessly handles the sign-up, photo selection, editing, and saving steps.',
      '43 local filters alongside four production-ready AI features: background removal, color correction, quality upscaling, and cartoon selfie.',
      'A stable authentication flow supported by comprehensive error handling.',
    ],
    challenges: [
      'Because the Cutout Pro API was a paid service, we had to carefully manage our API calls to keep costs low during the development and testing phases.',
      'Building a complex widget structure that instantly updated filters and API results on the screen without relying on a heavy State Management library.',
      'Ensuring seamless data transfer between screens without breaking the user experience, given that the gallery, camera, and feature modules were located on different Flutter routes.',
    ],
    gallery: [
      {
        src: '/pixie-welcome.webp',
        alt: 'Pixie welcome screen with Gallery and Camera entry buttons',
        caption: 'Welcome screen: Two main entry points via gallery and camera.',
      },
      {
        src: '/pixie-editing.webp',
        alt: 'Pixie editing page showing Cutout Pro API toolbar at the bottom',
        caption: 'Editing toolbar integrated with Cutout Pro.',
      },
      {
        src: '/pixie-colorizer.webp',
        alt: 'Photo colorizer showing a black and white photo alongside the colorized result',
        caption: 'Colorizing black-and-white images using AI.',
      },
      {
        src: '/pixie-gallery.webp',
        alt: 'Pixie gallery picker with directory browser open',
        caption: 'Device gallery manager with folder structure support.',
      },
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/TalhaKarakoyunlu/Pixie', external: true }],
  },
  {
    title: 'Musing',
    slug: 'music-app', // URL slug stays `music-app` by design; the product name in the UI is "Musing".
    role: 'Student Developer · Group Project',
    timeline: 'Jun 2023 (Abdullah Gül University)',
    summary:
      'A full-stack web music app backed by the Spotify infrastructure. It is a platform with a custom interface where users can log in with their Spotify accounts to browse artists and tracks, manage playlists, and search across 6 different content types.',
    stack: ['HTML', 'CSS', 'Bootstrap 5', 'JavaScript', 'Node.js', 'Express.js', 'EJS', 'Spotify API'],
    highlights: [
      { label: 'Team size', value: '3 members' },
      { label: 'Authentication', value: 'Spotify OAuth 2.0' },
      { label: 'Search scope', value: '6 content types' },
      { label: 'Architecture', value: 'Server-side rendering (EJS)' },
    ],
    problem:
      'For our coursework, we were tasked with designing an end-to-end full-stack web application. We chose to develop a custom Spotify interface; this required us to complete OAuth 2.0 security standards, server-side rendering (SSR) without a modern framework, and a real-time API integration within a strict deadline.',
    approach: [
      'After a detailed review of the documentation, we opted for the Spotify API over YouTube Music because it offered clearer examples and better-supported endpoints within the JavaScript ecosystem.',
      'We managed all authorization processes (OAuth flow, token exchange, and accessing profile/playlist data) on the server side using Node.js and Express.js.',
      'We integrated our custom dark purple CSS design with Bootstrap 5 components and the EJS template engine. To improve performance and keep load times under 3 seconds, we filtered out unnecessary API requests.',
      'We added 6 different Spotify search options to the platform: tracks, artists, albums, podcasts, episodes, and audiobooks. Additionally, we designed a main feed composed of favorites and recommendations.',
      'We used the Bootstrap grid system to ensure the application worked responsively across both desktop and mobile devices.',
    ],
    outcome: [
      'A stable web platform featuring user profile management, public/private playlist synchronization, and playback controls.',
      'A consistent and custom user interface that scales flawlessly across different screen sizes.',
      'Analyzing conditions caused by Spotify API limitations (such as the Premium account requirement for full playback features) and documenting them in the project files.',
    ],
    challenges: [
      'Building a secure OAuth token refresh and re-authorization infrastructure on Express.js without using a pre-built authentication library like Passport.js.',
      'Planning stateful pages and routing solely through EJS templates, without the aid of a modern JavaScript framework (like React or Vue).',
      'Keeping the application\'s load speed reasonable while simultaneously hitting multiple Spotify endpoints to render a single user view.',
    ],
    gallery: [
      {
        src: '/musing-home.webp',
        alt: 'Musing home page showing favorite artists and mood filter chips',
        caption: 'Personalized main feed with favorite artists and discovery modules.',
      },
      {
        src: '/musing-playlists.webp',
        alt: 'Musing playlists page showing user playlist cards',
        caption: 'User\'s Spotify playlists and details.',
      },
      {
        src: '/musing-profile.webp',
        alt: 'Musing profile page showing followed artists',
        caption: 'Profile view, account information, and followed artists.',
      },
      {
        src: '/musing-search.webp',
        alt: 'Musing search results page showing artist results',
        caption: 'Search results using 6 different filters in the Spotify database.',
      },
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/TalhaKarakoyunlu/Music-App', external: true }],
  },
  {
    title: 'Chat App',
    slug: 'chat-app',
    summary: 'A real-time chat application developed with a Flutter client, where messages are encrypted over the network using AES-256 and securely backed up in a MySQL database.',
    stack: ['Flutter', 'MySQL', 'AES-256'],
    highlights: [
      { label: 'Live communication', value: 'Real-time messaging' },
      { label: 'Data security', value: 'AES-256 Encryption' },
      { label: 'Storage', value: 'MySQL Infrastructure' },
      { label: 'Client', value: 'Flutter Mobile App' },
    ],
    problem:
      'Building an architecture that provides users with a low-latency, instant messaging feel while simultaneously respecting data privacy and securely storing the chat history on the server.',
    approach: [
      'I designed a clean Flutter client focused on ensuring stable data transmission and reception flows.',
      'I secured data privacy by encrypting every message payload transmitted over the network using the AES-256 standard.',
      'I integrated a MySQL database in the backend to ensure the chat history was stored persistently and reliably.',
    ],
    outcome: [
      'A secure chat infrastructure where messages are end-to-end encrypted and delivered almost instantly.',
      'A consistent chat history that is retained even after different sessions or device restarts.',
    ],
    challenges: [
      'Keeping the processing overhead generated by the real-time encryption and decryption of every message below a latency threshold the user could notice.',
      'Perfectly synchronizing the local state on the mobile device\'s interface with the chat history stored in the MySQL database.',
    ],
    gallery: [
      {
        src: '/project-placeholder-3.svg',
        alt: 'Chat app conversation placeholder',
        caption: 'Conversation screen layout (Placeholder image).',
      },
      {
        src: '/project-placeholder-1.svg',
        alt: 'Chat app security placeholder',
        caption: 'Security layer illustrating encryption status (Placeholder image).',
      },
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/TalhaKarakoyunlu/Chat-App', external: true }],
  },
];