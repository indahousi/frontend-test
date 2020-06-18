import React from 'react'
import { BrowserRouter, Router } from 'react-router-dom'
import Routes from './routes'
import { history } from '../store'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export const Main = () => {
  return (
    <>
      <BrowserRouter
        basename={process.env.NODE_ENV !== 'production' ? '/' : '/'}
      >
        <Router history={history}>
          <Navbar />
          <Routes />
          <Footer />
        </Router>
      </BrowserRouter>
    </>
  )
}
