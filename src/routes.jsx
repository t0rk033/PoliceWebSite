import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Sos from './pages/sos/Sos'
import ContactUs from './pages/contactUs/ContactUs.tsx'

function RoutesApp() {
  return (
    <HashRouter>
        <NavBar/>
        <Routes>
            <Route path='/' Component={Home}/>
            <Route path='/sos' Component={Sos}/> 
            <Route path='/contactUs' Component={ContactUs}/>
        </Routes>
        <Footer/>
    </HashRouter>
  )
}

export default RoutesApp
