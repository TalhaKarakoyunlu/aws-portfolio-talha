import type { Locale } from '@/locales/types';

const RESUME_PATHS: Record<Locale, string> = {
  tr: '/CV_TR_ATS_Talha_Karakoyunlu.pdf',
  en: '/CV_EN_ATS_Talha_Karakoyunlu.pdf',
};

export const getResumePath = (locale: Locale) => RESUME_PATHS[locale];
