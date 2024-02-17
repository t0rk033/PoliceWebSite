import React, { useState, useEffect } from "react";
import "./formIncidentReport.css";
import { and, doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
function FormIncidentReport() {
  //capturando digitação dos campos
  const [fullName, setFullName] = useState("");
  const [cpf, setCpf] = useState("");
  const [address, setAddress] = useState("");
  const [tel, setTel] = useState("");
  const [incidentType, setIncidentType] = useState("");
  const [incidentDate, setIncidentDate] = useState("");
  const [local, setLocal] = useState("");
  const [detailedDescription, setDetailedDescription] = useState("");
  const [possiblesSuspects, setPossiblesSuspects] = useState("");
  const [file, setFile] = useState("");
  //form validatio

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, set UID
        setUid(user.uid);
      } else {
        // No user is signed in.
      }
    });
    // Cleanup subscription
    return () => unsubscribe();
  }, []);

  const [uid, setUid] = useState(null);


  
  const handleIncident = async (e) => {
    e.preventDefault();
    try {
     
      if (!uid) {
        console.error("User not authenticated");
        return;
      }
      const incidentData = {
        fullName,
        cpf,
        address,
        tel,
        incidentType,
        incidentDate,
        local,
        detailedDescription,
        possiblesSuspects,
        file,
      };
      // Reference to the incident report document
      const incidentRef = doc(db, "incidentReports", uid);
      // Set document data
      await setDoc(incidentRef, incidentData);
      console.log("Incident report submitted successfully!");
      // Reset form fields
      setFullName("");
      setCpf("");
      setAddress("");
      setTel("");
      setIncidentType("");
      setIncidentDate("");
      setLocal("");
      setDetailedDescription("");
      setPossiblesSuspects("");
      setFile("");
    } catch (error) {
      console.error("Error submitting incident report:", error);
    }
  };

  return (
    <form className="formContainer" onSubmit={handleIncident}>
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
          value={cpf}
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
          value={address}
          required
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
        <br />

        <label htmlFor="telefone">Telefone:</label>
        <br />
        <input
          type="tel"
          id="telefone"
          name="telefone"
          value={tel}
          required
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
          value={incidentType}
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
          value={incidentDate}
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
          value={local}
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
          value={detailedDescription}
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
          value={possiblesSuspects}
          onChange={(e) => {
            setPossiblesSuspects(e.target.value);
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
       
      />
    </form>
  );
}

export default FormIncidentReport;
