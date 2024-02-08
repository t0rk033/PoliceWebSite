import React from 'react'
import './navBar.css'
import logo from '../assets/img/logo.png'
<<<<<<< HEAD
import { Link } from 'react-router-dom'
=======
>>>>>>> 8591962d7e46f3ef38a24db26ef2fe44e04a4252
function NavBar() {
  return (
    <div className='navBarContainer'>
      <div className="leftNavBar">
        <ul>
        <img src={logo} alt="Logo" className='logo'/>
            <li><a href="#">Recursos</a></li>
            <li><a href="#">Sobre nós</a></li>
            <li><a href="#">Boletim Online</a></li>
<<<<<<< HEAD
            <li><Link to="/sos" href="#">Emergência</Link></li>
=======
            <li><a href="#">Emergência</a></li>
>>>>>>> 8591962d7e46f3ef38a24db26ef2fe44e04a4252
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
    </div>
  )
}

export default NavBar
