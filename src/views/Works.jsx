import React from "react";
import Slider from "../components/Slider";
import SectionTitle from "../commons/SectionTitle";
import SectionP from "../commons/SectionP";

const Works = () => {
  return (
    <div id="Works principal">
      <section>
        <SectionTitle content={data.titulo1} />
        <SectionP content={data.parrafo1} />
      </section>
      <section>
        <SectionTitle content={data.titulo2} />
        <Slider content={instalaciones} visibles={3} />
      </section>
      <section>
        <SectionTitle content={data.titulo3} />
        <Slider content={optimizaciones} visibles={3} />
      </section>
      <section>
        <SectionTitle content={data.titulo4} />
        <Slider content={relevamientos} visibles={3} />
      </section>
    </div>
  );
};

export default Works;

const data = {
  titulo1: "NUESTROS TRABAJOS",
  parrafo1:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo doloremque nulla eaque ab. Atque odio quibusdam earum sed! Sapiente rem perspiciatis minus quaerat esse ullam recusandae aspernatur asperiores deserunt quam?",
  titulo2: "INSTALACIONES",
  titulo3: "OPTIMIZACIONES",
  titulo4: "RELEVAMIENTOS",
};

const instalaciones = [
  {
    nombre: "instalacion1",
    descripcion: "un texto largo que cuenta de qué se trata",
    imagen: "la url a la imagen que haga falta",
  },
  {
    nombre: "instalacion2",
    descripcion: "un texto largo que cuenta de qué se trata",
    imagen: "la url a la imagen que haga falta",
  },
  {
    nombre: "instalacion3",
    descripcion: "un texto largo que cuenta de qué se trata",
    imagen: "la url a la imagen que haga falta",
  },
  {
    nombre: "instalacion4",
    descripcion: "un texto largo que cuenta de qué se trata",
    imagen: "la url a la imagen que haga falta",
  },
];

const optimizaciones = [
    {
      nombre: "optimizacion1",
      descripcion: "un texto largo que cuenta de qué se trata",
      imagen: "la url a la imagen que haga falta",
    },
    {
      nombre: "optimizacion2",
      descripcion: "un texto largo que cuenta de qué se trata",
      imagen: "la url a la imagen que haga falta",
    },
    {
      nombre: "optimizacion3",
      descripcion: "un texto largo que cuenta de qué se trata",
      imagen: "la url a la imagen que haga falta",
    },
    {
      nombre: "optimizacion4",
      descripcion: "un texto largo que cuenta de qué se trata",
      imagen: "la url a la imagen que haga falta",
    },
  ];

  const relevamientos = [
    {
      nombre: "relevamiento1",
      descripcion: "un texto largo que cuenta de qué se trata",
      imagen: "la url a la imagen que haga falta",
    },
    {
      nombre: "relevamiento2",
      descripcion: "un texto largo que cuenta de qué se trata",
      imagen: "la url a la imagen que haga falta",
    },
    {
      nombre: "relevamiento3",
      descripcion: "un texto largo que cuenta de qué se trata",
      imagen: "la url a la imagen que haga falta",
    },
    {
      nombre: "relevamiento4",
      descripcion: "un texto largo que cuenta de qué se trata",
      imagen: "la url a la imagen que haga falta",
    },
  ];
