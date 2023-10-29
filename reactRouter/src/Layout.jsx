import React from 'react'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Home/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout