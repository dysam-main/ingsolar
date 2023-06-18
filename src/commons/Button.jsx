import React from "react";

const Button = ({ content }) => {
  if (content) return <button className="divBtn">{`${content}`}</button>;
  else return <></>
};

export default Button