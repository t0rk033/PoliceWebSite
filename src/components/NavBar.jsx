import React, { useEffect, useState } from 'react'
import './navBar.css'
import logo from '../assets/img/logo.png'
import { Link } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'
function NavBar() {
  //mudar o nome no lugar de acesse
  
   const [changeUserName, setChangeUserName] = useState('Acesse')
    //trocar url das pages
 const [profile, setProfile] = useState('/login')
 const [incidentReportForAgents, setIncidentReportForAgents] = useState('/IncidentReport')
 //Adicionar botão de sair
 const [clasOff, setClassOf] = useState('logoutBtn off')
   useEffect(()=>{
     const unsubscribe = onAuthStateChanged(auth, (user)=>{
      if (user) {
    // Se o usuário existe e não é nulo
    const email = user.email; // Aqui ocorre o erro se user for null
    if (email) {
      // Verificar se email não é null ou undefined
      setChangeUserName(user.email);
      setProfile('/profile');
      setClassOf('');
      if (email === 'guimaraes@police.com') {
        setIncidentReportForAgents('/IncidentReportForAgents');
      } else {
        setIncidentReportForAgents('/IncidentReport');
      }
    }
  } else {
    setChangeUserName('Acesse');
    setProfile('/login');
    setClassOf('logoutBtn off');
  }

     })
     return ()=> unsubscribe()
   }, [])
 //Realizar logout
 const navigate = useNavigate()
 
 
 const handleLogout = async()=>{
  try{
    await auth.signOut()
    navigate('/login')
    setClassOf("logoutBtn off")
    
  }catch(error){
    console.error('erro durante o logout', error)
  }
  
 }
 
  

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
            <li><Link to='/about' onClick={changeClass}>Sobre nós</Link></li>
            <li><Link onClick={changeClass} to={incidentReportForAgents}>Boletim Online</Link></li>
            <li><Link to="/sos" href="#" onClick={changeClass}>Emergência</Link></li>
        </ul>
      </div>
      <div className="rightNavBar">
      <ul>
            <li><Link onClick={changeClass} to='/'>Home</Link></li>
            <li><Link to='/news'>Área do agente</Link></li>
            <li><Link onClick={changeClass} to={profile}><i class='bx bxs-user'></i> {changeUserName} </Link> <button onClick={handleLogout} className={clasOff}>Sair</button></li>
        </ul>
      </div>
      <i className='bx bx-menu' onClick={changeClass}></i>
    </div>
  )
}

export default NavBar
