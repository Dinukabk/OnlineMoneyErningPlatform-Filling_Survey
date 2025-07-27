import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from '../assets/translations/en.json';
import siTranslations from '../assets/translations/si.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      si: { translation: siTranslations }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;