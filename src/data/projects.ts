import type { Locale } from '@/locales/types';
import type { ProjectDetail, ProjectGalleryItem, ProjectHighlight, ProjectLink } from '@/data/projectTypes';
import { projectsEn } from '@/data/projects.en';
import { projectsTr } from '@/data/projects.tr';

// Narratives: `projects.en.ts` (English) and `projects.tr.ts` (Turkish). Slugs and links match in both.
// The "Musing" app uses slug `music-app` on purpose; the display title remains "Musing".

export type { ProjectDetail, ProjectGalleryItem, ProjectHighlight, ProjectLink };

export const getProjects = (locale: Locale): ProjectDetail[] =>
  locale === 'tr' ? projectsTr : projectsEn;

export const getProjectBySlug = (slug: string, locale: Locale) =>
  getProjects(locale).find((project) => project.slug === slug);

export const getFeaturedProject = (locale: Locale) =>
  getProjects(locale).find((project) => project.featured);
