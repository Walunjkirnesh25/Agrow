import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translationEN.json';
import translationIN from './locales/in/translationIN.json';


const resources = {
    en:{
        translation: translationEN
    },
    in:{
        translation: translationIN
    }
};
i18n

    .use(initReactI18next)

  .init({
    fallbackLng: 'in',
    debug: true,

    
    interpolation: {
      escapeValue: false, 
    }
  });

export default i18n;