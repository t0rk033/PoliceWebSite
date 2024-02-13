import React, { useState } from "react";
import "./formIncidentReport.css";
function FormIncidentReport() {
  //capturando digitação dos campos
  const [fullName, setFullName] = useState("");
  const [cpf, setCpf] = useState("");
  const [address, setAndress] = useState("");
  const [tel, setTel] = useState("");
  const [incidentType, setIncidentType] = useState("");
  const [IncidentDate, setIncidentDate] = useState("");
  const [local, setLocal] = useState("");
  const [detailedDescription, setDetailedDescription] = useState("");
  const [possiblesSuspects, setPossiblesSuspect] = useState("");
  const [file, setFile] = useState("");
  //form validatio
  const formValidation = () => {};
  //span
  const [span, setSpan] = useState('formInfoOn')

  const changeClassInfo = ()=> {
    setSpan((changeclass)=> changeclass=== 'formInfoOn'? 'formInfoOff': 'formInfoOn')
  }

  return (
    <div className="form">
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
      <form className="formContainer">
        <fieldset>
          <legend>Dados Pessoais:</legend>
          <label htmlFor="nome">Nome Completo:</label>
          <br />
          <input
            type="text"
            id="nome"
            name="nome"
            required
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          />
          <br />

          <label htmlFor="cpf">CPF:</label>
          <br />
          <input
            type="text"
            id="cpf"
            name="cpf"
            required
            onChange={(e) => {
              setCpf(e.target.value);
            }}
          />
          <br />

          <label htmlFor="endereco">Endereço:</label>
          <br />
          <input
            type="text"
            id="endereco"
            name="endereco"
            onChange={(e) => {
              setAndress(e.target.value);
            }}
          />
          <br />

          <label htmlFor="telefone">Telefone:</label>
          <br />
          <input
            type="tel"
            id="telefone"
            name="telefone"
            onChange={(e) => {
              setTel(e.target.value);
            }}
          />
          <br />
        </fieldset>

        <fieldset>
          <legend>Detalhes da Ocorrência:</legend>
          <label htmlFor="tipo">Tipo de Crime ou Incidente:</label>
          <br />
          <input
            type="text"
            id="tipo"
            name="tipo"
            required
            onChange={(e) => {
              setIncidentType(e.target.value);
            }}
          />
          <br />

          <label htmlFor="data_hora">Data e Hora da Ocorrência:</label>
          <br />
          <input
            type="datetime-local"
            id="data_hora"
            name="data_hora"
            required
            onChange={(e) => {
              setIncidentDate(e.target.value);
            }}
          />
          <br />

          <label htmlFor="local">Local:</label>
          <br />
          <input
            type="text"
            id="local"
            name="local"
            required
            onChange={(e) => {
              setLocal(e.target.value);
            }}
          />
          <br />

          <label htmlFor="descricao">Descrição Detalhada:</label>
          <br />
          <textarea
            id="descricao"
            name="descricao"
            rows="4"
            required
            onChange={(e) => {
              setDetailedDescription(e.target.value);
            }}
          ></textarea>
          <br />

          <label htmlFor="suspeitos">Possíveis Suspeitos:</label>
          <br />
          <input
            type="text"
            id="suspeitos"
            name="suspeitos"
            onChange={(e) => {
              setPossiblesSuspect(e.target.value);
            }}
          />
          <br />
        </fieldset>

        <fieldset>
          <legend>Anexos:</legend>
          <input type="file" id="anexo" name="anexo" />
        </fieldset>

        <input
          type="submit"
          value="Enviar"
          className="submit-button"
          onClick={formValidation}
        />
      </form>
    </div>
  );
}

export default FormIncidentReport;
