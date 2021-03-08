import React from "react";
import symbol from "../img/symbol.svg";
import security from "../img/security.svg";
import person from "../img/person.svg";
import search from "../img/search.svg";
import "./header.css";
// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => (
  <>
    <div className="header">
      <span className="header.parteP">
        <img className="header.img" src={symbol} alt="simbol" />
        <img className="header.security" src={security} alt="securityy"></img>

        <img className="header.person" src={person} alt="personn"></img>
        <input
          className="input"
          type="text"
          placeholder="Pesquisar..."
          id="fname"
          name="fname"
        ></input>
        <img className="header.search" src={search} alt="search" />
      </span>

      <div className="header.parteS"></div>
    </div>
  </>
);
