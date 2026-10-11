'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '@/types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  highContrast: boolean;
  toggleHighContrast: () => void;
  t: (en: string, hi: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [highContrast, setHighContrast] = useState<boolean>(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('sehatsaathi_lang') as Language;
    if (savedLang === 'en' || savedLang === 'hi') {
      setLanguageState(savedLang);
    }
    const savedContrast = localStorage.getItem('sehatsaathi_contrast');
    if (savedContrast === 'true') {
      setHighContrast(true);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('sehatsaathi_lang', lang);
  };

  const toggleLanguage = () => {
    const nextLang = language === 'en' ? 'hi' : 'en';
    setLanguage(nextLang);
  };

  const toggleHighContrast = () => {
    setHighContrast((prev) => {
      const next = !prev;
      localStorage.setItem('sehatsaathi_contrast', String(next));
      return next;
    });
  };

  const t = (en: string, hi: string) => {
    return language === 'hi' ? hi : en;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        highContrast,
        toggleHighContrast,
        t,
      }}
    >
      <div className={highContrast ? 'contrast-high filter-none' : ''}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
