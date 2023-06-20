import React from "react";
import Slider from "../components/Slider";

const Services = () => {
  return (
    <div id="Services">
      <Slider content={data} visibles={3} />
    </div>
  );
};

export default Services;

const data = [
  {
    nombre: "servicio1",
    descripcion: "un texto largo que cuenta de qué se trata",
    imagen: "la url a la imagen que haga falta",
  },
  {
    nombre: "servicio2",
    descripcion: "un texto largo que cuenta de qué se trata",
    imagen: "la url a la imagen que haga falta",
  },
  {
    nombre: "servicio3",
    descripcion: "un texto largo que cuenta de qué se trata",
    imagen: "la url a la imagen que haga falta",
  },
  {
    nombre: "servicio4",
    descripcion: "un texto largo que cuenta de qué se trata",
    imagen: "la url a la imagen que haga falta",
  },
];
