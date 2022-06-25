
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './en'
import ar from './ar'
import { I18nManager } from 'react-native'

i18n

// load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)

// pass the i18n instance to react-i18next.

  .use(initReactI18next)

// init i18next

// for all options read: https://www.i18next.com/overview/configuration-options

  .init({
    resources: {
      en,
      ar
    },
    lng: I18nManager.isRTL ? 'ar' : 'en',
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    }
  })

export default i18n
