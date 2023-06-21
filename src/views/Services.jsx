import React from "react";
import SPCard from "../commons/SPCard";
import SectionTitle from "../commons/SectionTitle"
import SectionP from "../commons/SectionP"

const Services = () => {
  return (
    <div id="Services principal">
      <section>
        <SectionTitle content={data.titulo1}/>
        <SectionP content={data.parrafo1}/>
      </section>
      <section>
        <div id="SPGrid">
          {servicios.map((servicio)=><SPCard content={servicio}/>)}
        </div>
      </section>
    </div>
  );
};

export default Services;

const data={
  titulo1:"NUESTROS SERVICIOS",
  parrafo1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo doloremque nulla eaque ab. Atque odio quibusdam earum sed! Sapiente rem perspiciatis minus quaerat esse ullam recusandae aspernatur asperiores deserunt quam?"
}

const servicios = [
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
