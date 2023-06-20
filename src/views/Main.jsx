import React from "react";
import Button from "../commons/Button"
import SectionP from "../commons/SectionP"
import SectionTitle from "../commons/SectionTitle"
import SectionTitle2 from "../commons/SectionTitle2"


const Main=()=>{
    return <div id="Main">
        <section>
            <SectionTitle content={data.titulo1}/>
            <SectionP content={data.parrafo1}/>
            <Button content={"Contactanos"}/>
        </section>
        <section>
            <SectionTitle content={data.titulo2}/>
            <SectionTitle2 content={data.subtitulo1}/>
            <SectionP content={data.parrafo2}/>
            <Button content={"Ver Mas"}/>
            <SectionTitle2 content={data.subtitulo2}/>
            <SectionP content={data.parrafo2}/>
            <Button content={"Ver Mas"}/>
            <SectionTitle2 content={data.subtitulo3}/>
            <SectionP content={data.parrafo2}/>
            <Button content={"Ver Mas"}/>
        </section>
        <section>
            <SectionTitle content={data.titulo3}/>
            <SectionP content={data.parrafo5}/>
            <Button content={"Ver Mas"}/>
        </section>
    </div>
}

export default Main

const data={
    // BIENVENIDA
    titulo1:"BIENVENIDA",
    parrafo1:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis ea natus aperiam quos, inventore iusto cum ipsum consequatur deserunt, voluptatibus reiciendis explicabo eveniet? Dolorum, illo. Ab necessitatibus dolores culpa aliquid.",
    // INGENIERIA SOLAR
    titulo2:"INGENIERIA SOLAR",
    subtitulo1:"UN POCO SOBRE NOSOTROS",
    parrafo2:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis ea natus aperiam quos, inventore iusto cum ipsum consequatur deserunt, voluptatibus reiciendis explicabo eveniet? Dolorum, illo. Ab necessitatibus dolores culpa aliquid.",
    subtitulo2:"NUESTROS SERVICIOS",
    parrafo3:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis ea natus aperiam quos, inventore iusto cum ipsum consequatur deserunt, voluptatibus reiciendis explicabo eveniet? Dolorum, illo. Ab necessitatibus dolores culpa aliquid.",
    subtitulo3:"NUESTROS PRODUCTOS",
    parrafo4:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis ea natus aperiam quos, inventore iusto cum ipsum consequatur deserunt, voluptatibus reiciendis explicabo eveniet? Dolorum, illo. Ab necessitatibus dolores culpa aliquid.",
    // TRABAJOS
    titulo3:"TRABAJOS",
    parrafo5:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis ea natus aperiam quos, inventore iusto cum ipsum consequatur deserunt, voluptatibus reiciendis explicabo eveniet? Dolorum, illo. Ab necessitatibus dolores culpa aliquid.",
}