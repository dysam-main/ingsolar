import React from "react";
import SectionTitle from "../commons/SectionTitle";
import SectionTitle2 from "../commons/SectionTitle2";
import SectionP from "../commons/SectionP";

const AboutUs = () => {
  return (
    <div id="AboutUs principal">
      <section className="Contenido">
        <SectionTitle content={data.titulo1} />
        <SectionP content={data.parrafo1} />
        <div className="trio">
          <div className="trioDiv Mision">
            <SectionTitle2 content={"Mision"} />
            <p>{data.parrafoMision}</p>
          </div>
          <div className="trioDiv Vision">
            <SectionTitle2 content={"Vision"} />
            <p>{data.parrafoVision}</p>
          </div>
          <div className="trioDiv Valores">
            <SectionTitle2 content={"Valores"} />
            <p>{data.parrafoValores}</p>
          </div>
        </div>
      </section>
      <section className="SeccionNumeros">
        <SectionTitle content={data.titulo2} />
        <SectionP content={data.parrafo2} />
        <div className="Numeros">
          <div className="numerosDiv Instalaciones">
          <SectionTitle2 content={"INSTALACIONES"} />
          <p>{data.Instalaciones}</p>
            </div>
          <div className="numerosDiv Potencia">
          <SectionTitle2 content={"POTENCIA INSTALADA"} />
          <p>{data.Potencia}</p>
            </div>
          <div className="numerosDiv Optimizadas">
          <SectionTitle2 content={"OPTIMIZACIONES"} />
          <p>{data.Instalaciones}</p>
          </div>
          <div className="numerosDiv Clientes">
          <SectionTitle2 content={"CLIENTES SATISFECHOS"} />
          <p>{data.Clientes}</p>
            </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

const data = {
  titulo1: "HISTORIA",
  parrafo1: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, fugit excepturi, ipsam pariatur fuga dolores consequatur sequi unde exercitationem alias quae odit, similique ratione. Quas quis odit voluptate. Rem, iste!
    Totam laborum ad ipsum ducimus voluptas rerum hic, consequatur fugit eos, ut iure repudiandae laudantium aliquid velit delectus alias voluptate obcaecati, esse at saepe. A voluptatum voluptatem dolores dolorem quam!`,
  titulo2: "ALGUNOS NÚMEROS",
  parrafo2: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, fugit excepturi, ipsam pariatur fuga dolores consequatur sequi unde exercitationem alias quae odit, similique ratione. Quas quis odit voluptate. Rem, iste!
    Totam laborum ad ipsum ducimus voluptas rerum hic, consequatur fugit eos, ut iure repudiandae laudantium aliquid velit delectus alias voluptate obcaecati, esse at saepe. A voluptatum voluptatem dolores dolorem quam!`,
  parrafoMision: "Algunas palabras lindas de la misión de la empresa",
  parrafoVision: "Algunas palabras lindas de la visión de la empresa",
  parrafoValores: "Algunas palabras lindas de los valores de la empresa",
  Instalaciones: "25",
  Potencia: "1Mw",
  Optimizaciones: "35",
  Clientes: "70",
};
