import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="Navbar">
      <Link to={"/"}>
        <div id="mainLogo">LOGO</div>
      </Link>
      {/* desktop */}
      <div id="DesktopMenu">
        <ul>
          <li className="DesktopMenuItem">
            <Link to={"/Servicios"}>Servicios</Link>
          </li>
          <li className="DesktopMenuItem">
            <Link to={"/Productos"}>Productos</Link>
          </li>
          <li className="DesktopMenuItem">
            <Link to={"/Trabajos"}>Trabajos</Link>
          </li>
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
      {/* Mobile */}
      {/* <div id="MobileMenu"></div> */}
    </div>
  );
};

export default Navbar;
