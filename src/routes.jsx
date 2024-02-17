import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Sos from './pages/sos/Sos'
import ContactUS from './components/ContactUs'
import IncidentReport from './pages/IncidentReport/IncidentReport'
import Login from './pages/login/Login'
import Profile from './pages/profile/Profile'
import Register from './pages/register/Register'
import IncidentReportForAgents from './pages/IncidentReportForAgents/IncidentReportForAgents'
import About from './pages/about/About'


function RoutesApp() {
  return (
    <HashRouter>
        <NavBar/>
        <Routes>
            <Route path='/' Component={Home}/>
            <Route path='/sos' Component={Sos}/> 
            <Route path='/contactUs' Component={ContactUS}/>
            <Route path='/IncidentReport' Component={IncidentReport} />
            <Route path='/login' Component={Login} />
            <Route path='/profile' Component={Profile}/>
            <Route path='/register' Component={Register}/>
            <Route path='/IncidentReportForAgents' Component={IncidentReportForAgents} />
            <Route path='/about' Component={About} />
        </Routes>
        <Footer/>
    </HashRouter>
  )
}

export default RoutesApp
