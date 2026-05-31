import { createContext, useContext, useState, type ReactNode } from 'react'

export type Lang = 'kk' | 'ru'

interface LangContextType {
  lang: Lang
  setLang: (l: Lang) => void
}

const LangContext = createContext<LangContextType>({ lang: 'kk', setLang: () => {} })

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => (localStorage.getItem('lang') as Lang) || 'kk')

  function changeLang(l: Lang) {
    setLang(l)
    localStorage.setItem('lang', l)
  }

  return <LangContext.Provider value={{ lang, setLang: changeLang }}>{children}</LangContext.Provider>
}

export function useLang() {
  return useContext(LangContext)
}
