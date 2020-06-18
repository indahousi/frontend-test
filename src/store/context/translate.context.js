import React, { createContext, useState } from 'react'

export const TranslateContext = createContext({
  language: '',
  options: [],
  setLanguage: undefined,
})

export const TranslateProvider = ({ children }) => {
  const localValue = localStorage.getItem('language')
  const options = [
    { value: 'pt-BR', text: 'Português' },
    { value: 'en', text: 'Inglês' },
  ]

  const lang =
    localValue !== null
      ? options.filter((o) => o.value === localValue)[0]
      : options[0]

  const [language, set] = useState(lang)

  const setLanguage = (l) => {
    const result = options.filter((o) => o.value === l)
    localStorage.setItem('language', result[0].value)
    set(result[0])
  }

  const values = { language, options, setLanguage }
  return (
    <TranslateContext.Provider value={values}>
      {children}
    </TranslateContext.Provider>
  )
}
