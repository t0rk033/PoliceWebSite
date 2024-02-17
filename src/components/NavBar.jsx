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
      const email = user.email
       if(user){
         setChangeUserName(user.email)
         setProfile('/profile')
         setClassOf("")
       }
       else{
         setChangeUserName('Acesse')
         setProfile('/login')
       }
       if (email === 'guimaraes@police.com'){
        setIncidentReportForAgents('/IncidentReportForAgents')
       }else{
        setIncidentReportForAgents('/IncidentReport')
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
            <li><a href="#">Recursos</a></li>
            <li><a href="#">Sobre nós</a></li>
            <li><Link to={incidentReportForAgents}>Boletim Online</Link></li>
            <li><Link to="/sos" href="#">Emergência</Link></li>
        </ul>
      </div>
      <div className="rightNavBar">
      <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Carreiras</a></li>
            <li><a href="#">Noticias/Comunicados</a></li>
            <li><Link to={profile}><i class='bx bxs-user'></i> {changeUserName} </Link> <button onClick={handleLogout} className={clasOff}>Sair</button></li>
        </ul>
      </div>
      <i className='bx bx-menu' onClick={changeClass}></i>
    </div>
  )
}

export default NavBar
