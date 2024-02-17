import React, { useState, useEffect, } from 'react';
import { auth, } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import './profile.css';

import { db } from '../../firebase'; // Importe db do firebase.js
import { setDoc, doc, getDoc } from 'firebase/firestore';

function Profile() {
  const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [passwd, setPasswd] = useState('');
    const [city, setCity] = useState('');
    const [andress, setAndress] = useState('');
    const [tel, setTel] = useState('');
    const [uid, setUid] = useState('')
    //pegar dados 
   useEffect(()=>{
     const unsubscribe = onAuthStateChanged(auth, (user)=>{
       if(user){
         setEmail(user.email)
         setUid(user.uid)
       }else{
         setEmail(' ')
         
       }

      
     })
     return ()=> unsubscribe()
   }, [])

//recuperando dados
const [userData, setUserData] = useState(null)
useEffect(() => {
  const getUserData = async () => {
      try {
          const userDocRef = doc(db, 'PoliceWeb', uid);
          const userDocSnapshot = await getDoc(userDocRef);
          
          if (userDocSnapshot.exists()) {
              setUserData(userDocSnapshot.data());
          } else {
              console.log('Documento não encontrado');
          }
      } catch (error) {
          console.error('Erro ao recuperar dados do usuário:', error);
      }
  };

  getUserData();
}, [uid]); // Execute sempre que o UID mudar

if (!userData) {
  return <div>Carregando...</div>;
}


  return (
    <div className='profileContainer'>
            <div className="profileHeader">
                <h2>Perfil</h2>
            </div>
            <form className='profileForm'>
            <div className='formGroup'>
          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" id="name" value={userData.name} onChange={(e)=>{
            setName(e.target.value)
          }} />
        </div>
        <div className='formGroup'>
          <label htmlFor="age">Senha</label>
          <input type="password" name="passwd " id="passwd"  value={userData.passwd}  onChange={(e)=>{
            setPasswd(e.target.value)
          }}/>
        </div>
        <div className='formGroup'>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" value={userData.email} onChange={(e)=>{
            setEmail(e.target.value)
          }} />
        </div>
        <div className='formGroup'>
          <label htmlFor="address">Endereço:</label>
          <input type="text" name="address" id="address" value={userData.andress} onChange={(e)=>{
            setAndress(e.target.value);
          }} />
        </div>
        <div className='formGroup'>
          <label htmlFor="city">Cidade:</label>
          <input type="text" name="city" id="city" value={userData.city} onChange={(e)=>{
            setCity(e.target.value);
          }}  />
        </div>
        <div className='formGroup'>
          <label htmlFor="phone">Telefone:</label>
          <input type="text" name="phone" id="phone"  value={userData.tel} onChange={(e)=>{
            setTel(e.target.value);
          }} />
        </div>
        
        <button type="submit">Atualizar</button>
            </form>
        </div>
  );
}

export default Profile;
