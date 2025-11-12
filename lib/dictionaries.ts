import 'server-only';

// Define your supported languages
export type Locale = 'en' | 'ro';

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  ro: () => import('@/dictionaries/ro.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  // Default to 'en' if the locale is not 'en' or 'ro'
  if (!dictionaries[locale]) {
    return dictionaries.en();
  }
  return dictionaries[locale]();
};