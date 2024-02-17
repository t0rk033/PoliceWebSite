import React, { useState } from "react";
import "./incidentReportForAgents.css";
import { Link } from "react-router-dom";
import FormIncidentReport from "../../components/FormIncidentReport";
function IncidentReportForAgents() {
  const [openIncident, setOpenIncident] = useState("on");

  const changeClass = () => {
    setOpenIncident((change) => (change == "on" ? "off" : "on"));
  };
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
        <li className="incident">
          <span className="circleNew">new</span>
          <Link onClick={changeClass}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit...{" "}
          </Link>
        </li>
        <li className="incident">
          <span className="circleNew">new</span>
          <Link>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit...{" "}
          </Link>
        </li>
        <li className="incident">
          <span className="circleNew">new</span>
          <Link>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit...{" "}
          </Link>
        </li>
      </ul>
      <div className={`formIncident ${openIncident}`}>
        <button className="backForm" onClick={changeClass}><i class='bx bx-left-arrow-circle'></i></button>
        <FormIncidentReport />
      </div>
    </div>
  );
}

export default IncidentReportForAgents;
