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
