import React, { useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { TranslateContext } from '../../store/context/translate.context'
import { redirect } from '../../store'

export const LanguageMiddleware = () => {
  const { pathname } = useLocation()
  const { setLanguage } = useContext(TranslateContext)

  const setAndRedirect = (lang, preffix) => {
    setLanguage(lang)
    const newPath = pathname.split(preffix)
    redirect(newPath[1])
  }

  const pathEffect = () => {
    if (pathname.includes('/pt/')) {
      setAndRedirect('pt-br', 'pt')
    } else if (pathname.includes('/en/')) {
      setAndRedirect('en', 'en')
    } else {
      redirect('/')
    }
  }

  useEffect(pathEffect, [pathname])

  return <div />
}
