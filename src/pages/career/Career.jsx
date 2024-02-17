import React from 'react'
import './career.css'
function Career() {

  return (
    <div>
        <h1>Página em construção</h1>
      <form className='formRegisterForPolice'>
    <div className='groupInput'>
        <label htmlFor="nameRegister">Nome Completo</label>
        <input type="text" name="nameRegister" id="nameRegister" />
    </div>
    <div className='groupInput'>
        <label htmlFor="emailRegister">Email</label>
        <input type="email" name="emailRegister" id="emailRegister" />
    </div>
   <div className='groupInput'>
       <label htmlFor="telRegister">Celular</label>
       <input type="number" name="telRegister" id="telRegister" />
       <input type="submit" value="Enviar" />
   </div>
          </form>
    </div>
  )
}

export default Career
