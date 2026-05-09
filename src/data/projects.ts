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
      { label: 'YouTube demo', href: 'https://youtu.be/zky8htvPG0o' },
      { label: 'Roboflow Fire Dataset', href: 'https://universe.roboflow.com/-jwzpw/continuous_fire/dataset/6' },
      { label: 'Roboflow Smoke Dataset', href: 'https://universe.roboflow.com/orbit-w0l5f/smokedetection-orbit/dataset/2' },
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
