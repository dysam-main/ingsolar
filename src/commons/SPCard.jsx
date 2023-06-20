import React from "react";

const SPCard=({content})=>{

return <div className="SPCard">
    <p>{content.nombre}</p>
    <p>{content.descripcion}</p>
    <p>{content.imagen}</p>
</div>
}

export default SPCard