import React, { useState } from 'react'
import './login.css'
import logo from '../../assets/img/logo.png'
function Login() {
    const [user, setUser] = useState('')
    const [passwd, setPasswd] = useState('')
    
    const pegarValor = () =>{
        console.log(user, passwd)
    }
  return (
    <div className="loginSection">
        <div className='loginContainer'>
            <img src={logo} alt="" className='loginImg'/>
          <form className='formLoginContainer'>
            <label htmlFor="User">Usuário</label>
            <input type="text" name="user" id="user" onChange={(e)=>{
                setUser(e.target.value)
            }}/>
            <label htmlFor="passwd">Senha</label>
            <input type="password" name="passwd" id="passwd" onChange={(e)=>{
                setPasswd(e.target.value)
            }} />
            <input type="submit" value="Entrar" onClick={pegarValor} />
          </form>
        </div>
    </div>
  )
}

export default Login
