import React, { createContext, useState, useEffect, useContext } from 'react'

export const NavbarContext = createContext({
  asLandingPage: false,
  customColor: undefined,
  customTextColor: undefined,
  customLogoColor: undefined,
  loginVisible: undefined,
  setLoginVisible: () => {},
  setAsLandingPage: () => {},
  setCustomColor: () => {},
  setCustomTextColor: () => {},
  setCustomLogoColor: () => {},
})

export const NavbarProvider = ({ children }) => {
  const [asLandingPage, setAsLandingPage] = useState(false)
  const [customColor, setCustomColor] = useState('primary')
  const [customTextColor, setCustomTextColor] = useState('white')
  const [customLogoColor, setCustomLogoColor] = useState('white')
  const [loginVisible, setLoginVisible] = useState(false)

  return (
    <NavbarContext.Provider
      value={{
        asLandingPage,
        setAsLandingPage,
        customColor,
        setCustomColor,
        customTextColor,
        setCustomTextColor,
        customLogoColor,
        setCustomLogoColor,
        loginVisible,
        setLoginVisible,
      }}
    >
      {children}
    </NavbarContext.Provider>
  )
}

export const useLandingPage = () => {
  const { setAsLandingPage } = useContext(NavbarContext)
  const destroy = () => {
    setAsLandingPage(false)
  }
  const init = () => {
    setAsLandingPage(true)
    return destroy
  }
  useEffect(init, [])
}

export const useNavCustomColor = (color) => {
  const { setCustomColor } = useContext(NavbarContext)

  const destroy = () => {
    setCustomColor('primary')
  }
  const init = () => {
    setCustomColor(color)
    return destroy
  }
  useEffect(init, [])
}

export const useNavCustomTextColor = (color) => {
  const { setCustomTextColor } = useContext(NavbarContext)

  const destroy = () => {
    setCustomTextColor('white')
  }
  const init = () => {
    setCustomTextColor(color)
    return destroy
  }
  useEffect(init, [])
}

export const useNavCustomLogoColor = (color) => {
  const { setCustomLogoColor } = useContext(NavbarContext)

  const destroy = () => {
    setCustomLogoColor('white')
  }
  const init = () => {
    setCustomLogoColor(color)
    return destroy
  }
  useEffect(init, [])
}
