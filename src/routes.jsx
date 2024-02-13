import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Sos from './pages/sos/Sos'
import ContactUS from './components/ContactUs'
import IncidentReport from './pages/IncidentReport/IncidentReport'


function RoutesApp() {
  return (
    <HashRouter>
        <NavBar/>
        <Routes>
            <Route path='/' Component={Home}/>
            <Route path='/sos' Component={Sos}/> 
            <Route path='/contactUs' Component={ContactUS}/>
            <Route path='/IncidentReport' Component={IncidentReport} />
        </Routes>
        <Footer/>
    </HashRouter>
  )
}

export default RoutesApp
