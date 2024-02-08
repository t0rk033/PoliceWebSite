import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import NavBar from './components/NavBar'
<<<<<<< HEAD
import Footer from './components/Footer'
import Sos from './pages/sos/Sos'
=======
>>>>>>> 8591962d7e46f3ef38a24db26ef2fe44e04a4252

function RoutesApp() {
  return (
    <HashRouter>
        <NavBar/>
        <Routes>
            <Route path='/' Component={Home}/>
<<<<<<< HEAD
            <Route path='/sos' Component={Sos}/> 
        </Routes>
        <Footer/>
=======
        </Routes>
>>>>>>> 8591962d7e46f3ef38a24db26ef2fe44e04a4252
    </HashRouter>
  )
}

export default RoutesApp
