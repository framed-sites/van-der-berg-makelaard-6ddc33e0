import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import { translations } from './translations'

interface LanguageContextType {
  lang: string
  setLang: (lang: string) => void
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'nl',
  setLang: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('framed-lang') || 'nl'
    }
    return 'nl'
  })

  const setLang = useCallback((newLang: string) => {
    setLangState(newLang)
    if (typeof window !== 'undefined') {
      localStorage.setItem('framed-lang', newLang)
      document.documentElement.lang = newLang
    }
  }, [])

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}

export function useTranslation() {
  const { lang } = useLanguage()
  return useCallback((key: string) => {
    const langTranslations = translations[lang as keyof typeof translations]
    if (langTranslations && key in langTranslations) {
      return (langTranslations as Record<string, string>)[key]
    }
    // Fallback to primary language
    const fallback = translations['nl' as keyof typeof translations]
    if (fallback && key in fallback) {
      return (fallback as Record<string, string>)[key]
    }
    return key
  }, [lang])
}
