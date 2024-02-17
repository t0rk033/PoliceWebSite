import React, { useEffect, useState } from 'react';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { db } from '../../firebase'; // Importe db do firebase.js
import { setDoc, doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { uid } from '@nlux/core';
function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [passwd, setPasswd] = useState('');
    const [city, setCity] = useState('');
    const [andress, setAndress] = useState('');
    const [tel, setTel] = useState('');
    const location = useNavigate()
    //create User
    const handleLogin = async(e) =>{
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, passwd).then(data => {
                const uid = data.user.uid;

                const policeWebRef = doc(db, 'PoliceWeb', uid); 
                setDoc(policeWebRef, {
                    name: name, 
                    city: city, 
                    andress: andress, 
                    tel: tel
                });

            });
            location('/')
        } catch(error) {
            console.error(error.message);
        }
    };



    return (
        <div className='profileContainer'>
            <div className="profileHeader">
                <h2>Cadastre-se</h2>
            </div>
            <form className='profileForm' onSubmit={handleLogin}>
            <div className='formGroup'>
          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" id="name" value={name} onChange={(e)=>{
            setName(e.target.value)
          }} />
        </div>
        <div className='formGroup'>
          <label htmlFor="age">Senha</label>
          <input type="password" name="passwd " id="passwd"  value={passwd}  onChange={(e)=>{
            setPasswd(e.target.value)
          }}/>
        </div>
        <div className='formGroup'>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" value={email} onChange={(e)=>{
            setEmail(e.target.value)
          }} />
        </div>
        <div className='formGroup'>
          <label htmlFor="address">Endereço:</label>
          <input type="text" name="address" id="address" value={andress} onChange={(e)=>{
            setAndress(e.target.value);
          }} />
        </div>
        <div className='formGroup'>
          <label htmlFor="city">Cidade:</label>
          <input type="text" name="city" id="city" value={city} onChange={(e)=>{
            setCity(e.target.value);
          }}  />
        </div>
        <div className='formGroup'>
          <label htmlFor="phone">Telefone:</label>
          <input type="text" name="phone" id="phone"  value={tel} onChange={(e)=>{
            setTel(e.target.value);
          }} />
        </div>
        
        <button type="submit">Criar Conta</button>
            </form>
        </div>
    );
}

export default Register;
