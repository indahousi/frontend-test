import React from 'react'
import { TranslateProvider } from './translate.context'
import { NavbarProvider } from './navbar.context'
import { WindowProvider } from './window.context'

export const RootProvider = ({ children }) => (
  <TranslateProvider>
    <WindowProvider>
      <NavbarProvider>{children}</NavbarProvider>
    </WindowProvider>
  </TranslateProvider>
)
