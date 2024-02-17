import React, { useState, useEffect } from "react";
import "./incidentReportForAgents.css";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import FormIncidentReport from "../../components/FormIncidentReport";

function IncidentReportForAgents() {
  const [incidents, setIncidents] = useState([]);
  const [openIncident, setOpenIncident] = useState("on");
  const [selectedIncident, setSelectedIncident] = useState(null);
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

  const changeClass = (incident) => {
    setOpenIncident((change) => (change === "on" ? "off" : "on"));
    setSelectedIncident(incident);
  };

  useEffect(() => {
    const fetchIncidents = async () => {
      try {
        const incidentsCollectionRef = collection(db, 'incidentReports');
        const snapshot = await getDocs(incidentsCollectionRef);
        const incidentsData = snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() }));
        setIncidents(incidentsData);
      } catch (error) {
        console.error('Erro ao recuperar boletins:', error);
      }
    };

    fetchIncidents();
  }, []);

  return (
    <div className="agentAdmContainer">
      <aside className="menuOptionsAdm">
        <ul className="linksMenuOptions">
          <li>
            <Link>Boletins</Link>
          </li>
          <li>
            <Link>Em aberto</Link>
          </li>
          <li>
            <Link>Fechados</Link>
          </li>
          <li>
            <Link>Requerimentos</Link>
          </li>
        </ul>
      </aside>
      <ul className={`newincidents ${openIncident}`}>
        {incidents.map(incident => (
          <li className="incident" key={incident.id}>
            <span className="circleNew">new</span>
            <Link onClick={() => changeClass(incident)}>
              {incident.data.detailedDescription.substring(0,100)}
            </Link>
          </li>
        ))}
      </ul>
  
       <div className={`formIncident ${openIncident}`}>
        <button className="backForm" onClick={() => setOpenIncident((change) => (change === "on" ? "off" : "on"))}><i className='bx bx-left-arrow-circle'></i></button>
      
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
          value={selectedIncident ? selectedIncident.data.fullName : ''}
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
          value={selectedIncident ? selectedIncident.data.cpf : ''}
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
          value={selectedIncident ? selectedIncident.data.address : ''}
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
          value={selectedIncident ? selectedIncident.data.tel : ''}
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
          value={selectedIncident ? selectedIncident.data.incidentType : ''}
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
          value={selectedIncident ? selectedIncident.data.incidentDate : ''}
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
          value={selectedIncident ? selectedIncident.data.local : ''}
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
          value={selectedIncident ? selectedIncident.data.detailedDescription : ''}
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
          value={selectedIncident ? selectedIncident.data.possiblesSuspects : ''}
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
    </form>
    </div>
    </div>
  );
}

export default IncidentReportForAgents;
