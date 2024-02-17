import React, { useState } from 'react'
import FormIncidentReport from '../../components/FormIncidentReport'
import './incidentReport.css'
function IncidentReport() {
  const [span, setSpan] = useState('formInfoOn')

  const changeClassInfo = ()=> {
    setSpan((changeclass)=> changeclass=== 'formInfoOn'? 'formInfoOff': 'formInfoOn')
  }
  return (
    <div className='form'>
      <span className={span}>
          <p>
            º Bem-vindo ao Registro de Ocorrência Policial Online. Esta página
            permite que você registre ocorrências policiais de forma rápida e
            conveniente. Por favor, preencha o formulário abaixo com as
            informações necessárias.
          </p>
          <p>
            º Tipos de ocorrências que podem ser registradas: roubo, furto,
            agressão, entre outros.
          </p>
          <button onClick={changeClassInfo} className="formInfoBtn">Entendido</button>
        </span>
        <FormIncidentReport/>
    </div>
  )
}

export default IncidentReport
