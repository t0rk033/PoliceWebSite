import React, { useEffect, useState } from 'react'
import './navBar.css'
import logo from '../assets/img/logo.png'
import { Link } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import auth from '../firebase'

function NavBar() {
  //mudar o nome no lugar de acesse
  
  // const [changeUserName, setChangeUserName] = useState('acesse')

  // useEffect(()=>{
  //   const unsubscribe = onAuthStateChanged(auth, (user)=>{
  //     if(user){
  //       setChangeUserName(user.email)
  //     }else{
  //       setChangeUserName('Acesse')
  //     }
  //   })
  //   return ()=> unsubscribe()
  // }, [])
 
  //função para realização do click no menu da barra de navegação
 const [navBar, setNavBar] = useState('')
 const changeClass = () =>{
  setNavBar((change) => change ==="" ? "active": "")
 }
  return (
    <div className={`navBarContainer ${navBar}`}>
        <img src={logo} alt="Logo" className='logo'/>
      <div className="leftNavBar">
        <ul>
            <li><a href="#">Recursos</a></li>
            <li><a href="#">Sobre nós</a></li>
            <li><Link to={'/IncidentReport'}>Boletim Online</Link></li>
            <li><Link to="/sos" href="#">Emergência</Link></li>
        </ul>
      </div>
      <div className="rightNavBar">
      <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Carreiras</a></li>
            <li><a href="#">Noticias/Comunicados</a></li>
            <li><Link to='/login'><i class='bx bxs-user'></i> Acesse</Link></li>
        </ul>
      </div>
      <i className='bx bx-menu' onClick={changeClass}></i>
    </div>
  )
}

export default NavBar
