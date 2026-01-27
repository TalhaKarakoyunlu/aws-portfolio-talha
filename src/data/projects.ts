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
  role: string;
  timeline: string;
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
        src: '/placeholder.png',
        alt: 'Fire detection dataset samples placeholder',
        caption: 'Dataset samples used for training and validation.',
      },
      {
        src: '/placeholder.png',
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
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);

export const getFeaturedProject = () =>
  projects.find((project) => project.featured);
