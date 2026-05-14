export type Locale = 'tr' | 'en';

export const LOCALE_STORAGE_KEY = 'locale';

export const isLocale = (value: string): value is Locale => value === 'tr' || value === 'en';
