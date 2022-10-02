import i18next from 'i18next'
import languagedetector from 'i18next-browser-languagedetector'
import backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

i18next
  .use(languagedetector)
  .use(backend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en'
  })
  .catch(console.log)

export default i18next
