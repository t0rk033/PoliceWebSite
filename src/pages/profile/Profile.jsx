import React, { useState, useEffect, } from 'react';
import { auth, } from '../../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import './profile.css';

function Profile() {
    //pegar dados 
    const [email, setEmail] = useState('')
   useEffect(()=>{
     const unsubscribe = onAuthStateChanged(auth, (user)=>{
       if(user){
         setEmail(user.email)
         
       }else{
         setEmail(' ')
         
       }

      
     })
     return ()=> unsubscribe()
   }, [])

useEffect(()=>{
    const signOut = ()=>{
        signOut(auth).then(()=>{
            console.log('deslogado')
        }).catch((error)=>{
            console.log(error)
        })
     }
},[])


  return (
    <div className='profileContainer'>
        <button onClick={()=>signOut}>sair</button>
      <div className="profileHeader">
        <h2>Seu Perfil</h2>
      </div>
      <form className='profileForm'>
        <div className='formGroup'>
          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" id="name"  />
        </div>
        <div className='formGroup'>
          <label htmlFor="age">Idade:</label>
          <input type="number" name="age" id="age"   />
        </div>
        <div className='formGroup'>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" value={email}  />
        </div>
        <div className='formGroup'>
          <label htmlFor="address">Endereço:</label>
          <input type="text" name="address" id="address"   />
        </div>
        <div className='formGroup'>
          <label htmlFor="city">Cidade:</label>
          <input type="text" name="city" id="city"   />
        </div>
        <div className='formGroup'>
          <label htmlFor="phone">Telefone:</label>
          <input type="text" name="phone" id="phone"   />
        </div>
        <button type="submit">Salvar Alterações</button>
      </form>
    </div>
  );
}

export default Profile;
