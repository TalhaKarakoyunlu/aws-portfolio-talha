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
    title: 'Fire & Smoke Detection',
    slug: 'fire-detection',
    summary:
      'Real-time fire and smoke detection pipeline trained on public datasets and optimized for limited hardware.',
    role: 'Computer Vision Intern',
    timeline: 'Aug 2024 - Sep 2024',
    stack: ['Python', 'OpenCV', 'YOLOv5', 'YOLOv8', 'Roboflow', 'RTX 3060'],
    highlights: [
      { label: 'Realtime inference', value: 'Camera-ready pipeline' },
      { label: 'Fire confidence', value: '65-90% range' },
      { label: 'Smoke detection', value: 'Added class support' },
      { label: 'Dataset handling', value: 'Roboflow + augmentation' },
    ],
    problem:
      'AFAC Tech needed a cost-effective detection system that could identify fire and smoke in real time without relying on high-end infrastructure.',
    approach: [
      'Built OpenCV preprocessing routines to understand image structure and filtering options.',
      'Trained a YOLOv5 baseline and evaluated detection speed vs. accuracy trade-offs.',
      'Migrated to YOLOv8 for faster inference and stronger confidence scores.',
      'Integrated smoke datasets and balanced samples to reduce false negatives.',
      'Optimized training locally on an RTX 3060 while managing resource constraints.',
    ],
    outcome: [
      'Delivered a working fire and smoke detection pipeline capable of real-time camera inference.',
      'Improved overall confidence and speed by upgrading to YOLOv8.',
      'Established a repeatable workflow for dataset intake, training, and evaluation.',
    ],
    challenges: [
      'Dataset imbalance across fire vs. smoke samples.',
      'Long training cycles (12+ hours) under limited GPU memory.',
      'Balancing detection accuracy with real-time performance.',
    ],
    gallery: [
      {
        src: '/featured-fire-detection-1.svg',
        alt: 'Fire detection dataset samples placeholder',
        caption: 'Dataset samples used for training and validation.',
      },
      {
        src: '/featured-fire-detection-2.svg',
        alt: 'Real-time fire detection overlay placeholder',
        caption: 'Real-time detection overlay during testing.',
      },
    ],
    links: [
      { label: 'Email me', href: 'mailto:karakoyunlutalha34@gmail.com' },
      { label: 'Download resume', href: '/resume.pdf' },
    ],
    featured: true,
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
