import React from "react";

function CaninoInfo({ nombre, edad, raza }) {
  return (
    <div className="card">
      <h3>{nombre}</h3>
      <p>Edad: {edad} años</p>
      <p>Raza: {raza}</p>
    </div>
  );
}

export default CaninoInfo;
