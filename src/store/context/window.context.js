import React, { createContext, useState, useEffect, useContext } from 'react'

export const WindowContext = createContext({
  windowWidth: window.innerWidth,
  setWindowWidth: () => {},
})

export const WindowProvider = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  return (
    <WindowContext.Provider value={{ windowWidth, setWindowWidth }}>
      {children}
    </WindowContext.Provider>
  )
}

export const useWindowWidth = () => {
  const { windowWidth, setWindowWidth } = useContext(WindowContext)

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowWidth(document.body.clientWidth)
    })
  }, [setWindowWidth])

  return { windowWidth }
}
