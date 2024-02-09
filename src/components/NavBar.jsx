import React from 'react'
import './navBar.css'
import logo from '../assets/img/logo.png'
import { Link } from 'react-router-dom'


function NavBar() {
  return (
    <div className='navBarContainer'>
        <img src={logo} alt="Logo" className='logo'/>
      <div className="leftNavBar">
        <ul>
            <li><a href="#">Recursos</a></li>
            <li><a href="#">Sobre nós</a></li>
            <li><a href="#">Boletim Online</a></li>
            <li><Link to="/sos" href="#">Emergência</Link></li>
        </ul>
      </div>
      <div className="rightNavBar">
      <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Carreiras</a></li>
            <li><a href="#">Fale Conosco</a></li>
            <li><a href="#">Noticias/Comunicados</a></li>
        </ul>
      </div>
      <i className='bx bx-menu'></i>
    </div>
  )
}

export default NavBar
