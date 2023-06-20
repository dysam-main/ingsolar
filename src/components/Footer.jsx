import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="Footer">
      <div id="FooterLeft">
        <ul id="FooterList1">
          <li className="DesktopMenuItem">
            <Link to={"/Servicios"}>Servicios</Link>
          </li>
          <li className="DesktopMenuItem">
            <Link to={"/Productos"}>Productos</Link>
          </li>
          <li className="DesktopMenuItem">
            <Link to={"/Trabajos"}>Trabajos</Link>
          </li>
        </ul>
        <ul id="FooterList2">
          <li className="DesktopMenuItem">
            <Link to={"/Nosotros"}>Nosotros</Link>
          </li>
          <li className="DesktopMenuItem">
            <Link to={"/Preguntas"}>Preguntas</Link>
          </li>
          <li className="DesktopMenuItem">
            <Link to={"/Contacto"}>Contacto</Link>
          </li>
        </ul>
      </div>
      <div id="FooterRight">
      <ul id="FooterSocial">
          <li className="DesktopMenuItem">
            <Link to={"/Nosotros"}>FACEBOOK</Link>
          </li>
          <li className="DesktopMenuItem">
            <Link to={"/Preguntas"}>INSTAGRAM</Link>
          </li>
          <li className="DesktopMenuItem">
            <Link to={"/Contacto"}>CONTACTANOS</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
