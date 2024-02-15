import React, { useEffect, useState } from 'react'
import './login.css'
import logo from '../../assets/img/logo.png'
import {onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase.jsx'
import { Link, useNavigate } from 'react-router-dom'
function Login() {
    const [user, setUser] = useState('')
    const [passwd, setPasswd] = useState('')
    //código para validar login
    const navigate = useNavigate()
    const handleLogin = async(e) =>{
      e.preventDefault()
      try{
        await signInWithEmailAndPassword(auth, user, passwd)
        navigate('/')
      }catch(error){
        alert('email ou senha incorreto')
        console.error(error.message)
      }
    }
    
    
  
  return (
  
    <div className="loginSection">
   
        <div className='loginContainer'>
            <img src={logo} alt="" className='loginImg'/>
          <form className='formLoginContainer' onSubmit={handleLogin}>
            <label htmlFor="User">Usuário</label>
            <input type="text" name="user" id="user" onChange={(e)=>{
                setUser(e.target.value)
            }}/>
            <label htmlFor="passwd">Senha</label>
            <input type="password" name="passwd" id="passwd" onChange={(e)=>{
                setPasswd(e.target.value)
            }} />
            <Link to='/register' className='registerBtn'> Não tem uma conta? <span className='registerSpan'>Cadastre-se!</span></Link>
            <input type="submit" value="Entrar" />
          </form>
        </div>
    </div>
  )
}

export default Login
