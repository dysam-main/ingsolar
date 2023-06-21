import React from "react";
import SPCard from "../commons/SPCard";
import SectionTitle from "../commons/SectionTitle"
import SectionP from "../commons/SectionP"

const Products = () => {
  return (
    <div id="Products principal">
      <section>
        <SectionTitle content={data.titulo1}/>
        <SectionP content={data.parrafo1}/>
      </section>
      <section>
        <div id="SPGrid">
          {productos.map((producto)=><SPCard content={producto}/>)}
        </div>
      </section>
    </div>
  );
};

export default Products;

const data={
  titulo1:"NUESTROS PRODUCTOS",
  parrafo1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo doloremque nulla eaque ab. Atque odio quibusdam earum sed! Sapiente rem perspiciatis minus quaerat esse ullam recusandae aspernatur asperiores deserunt quam?"
}

const productos = [
  {
    nombre: "producto1",
    descripcion: "un texto largo que cuenta de qué se trata",
    imagen: "la url a la imagen que haga falta",
  },
  {
    nombre: "producto2",
    descripcion: "un texto largo que cuenta de qué se trata",
    imagen: "la url a la imagen que haga falta",
  },
  {
    nombre: "producto3",
    descripcion: "un texto largo que cuenta de qué se trata",
    imagen: "la url a la imagen que haga falta",
  },
  {
    nombre: "producto4",
    descripcion: "un texto largo que cuenta de qué se trata",
    imagen: "la url a la imagen que haga falta",
  },
];
