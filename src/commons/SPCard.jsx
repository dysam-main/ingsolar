import React from "react";

const SPCard = ({ content }) => {
  return (
    <div className="SPCard">
      <div className="SPImage"></div>
      <div className="SPInfo">
        <p>{content.nombre}</p>
        <p>{content.descripcion}</p>
        <p>{content.imagen}</p>
      </div>
    </div>
  );
};

export default SPCard;
