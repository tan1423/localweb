import React from 'react'
import Header from './components/Header/Header.jsx'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer.jsx'

function App() {
  

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
