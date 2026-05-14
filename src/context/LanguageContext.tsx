import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { en, type MessageDict } from '@/locales/en';
import { tr } from '@/locales/tr';
import { isLocale, LOCALE_STORAGE_KEY, type Locale } from '@/locales/types';

type LanguageContextValue = {
  locale: Locale;
  // Parameter name is for documentation; ESLint counts it as unused in type position.
  // eslint-disable-next-line no-unused-vars
  setLocale: (next: Locale) => void;
  messages: MessageDict;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const readStoredLocale = (): Locale => {
  if (typeof window === 'undefined') {
    return 'tr';
  }
  const raw = window.localStorage.getItem(LOCALE_STORAGE_KEY);
  return raw && isLocale(raw) ? raw : 'tr';
};

const dictionaries: Record<Locale, MessageDict> = {
  tr,
  en,
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>(() => readStoredLocale());

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
  }, []);

  const messages = useMemo(() => dictionaries[locale], [locale]);

  useEffect(() => {
    document.documentElement.lang = locale === 'tr' ? 'tr' : 'en';
  }, [locale]);

  useEffect(() => {
    document.title = messages.meta.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) {
      desc.setAttribute('content', messages.meta.description);
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', messages.meta.title);
    }
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', messages.meta.description);
    }
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) {
      twTitle.setAttribute('content', messages.meta.title);
    }
    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) {
      twDesc.setAttribute('content', messages.meta.description);
    }
  }, [messages]);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      messages,
    }),
    [locale, setLocale, messages],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

// Hook is colocated with provider; Fast Refresh allows this pattern for context modules.
// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = (): LanguageContextValue => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return ctx;
};
