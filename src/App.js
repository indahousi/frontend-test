import React, { Suspense } from 'react'
import { ThemeProvider } from 'styled-components'
import { Main } from './main'
import { GlobalStyle } from './assets/styles/global-style'
import {
  colors,
  breakpoints,
  fontSizes as font,
} from './assets/styles/theme-variables'
import { RootProvider } from './store/context/root.context'
import 'bootstrap/dist/css/bootstrap-grid.min.css'

import './components/translate'

function App() {
  return (
    <ThemeProvider theme={{ colors, breakpoints, font }}>
      <GlobalStyle />
      <RootProvider>
        <Suspense fallback="">
          <Main />
        </Suspense>
      </RootProvider>
    </ThemeProvider>
  )
}

export default App
