import React from "react";

const WorkCard = ({ content }) => {
  return (
    <div className="WorkCard">
      <div className="WorkImage"></div>
      <div className="WorkInfo">
        <p>{content.nombre}</p>
        <p>{content.descripcion}</p>
        <p>{content.imagen}</p>
      </div>
    </div>
  );
};

export default WorkCard;