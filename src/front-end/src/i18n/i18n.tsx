import * as I18n from 'i18n-js';
import en from '../locales/en/Common.json';

I18n.fallbacks = true;

export const translations = {
  en,
};

// export const translate = new I18n(translations);
export const translate = translations.en.Common;
