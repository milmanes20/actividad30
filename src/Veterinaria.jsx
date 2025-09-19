import React, { useState } from "react";
import CaninoInfo from "./CaninoInfo";
import { clientesCaninos } from "./data";

function Veterinaria() {
  const [clientes, setClientes] = useState(clientesCaninos);

  return (
    <div>
      <h1>Veterinaria Canina</h1>
      {clientes.map((perro) => (
        <CaninoInfo
          key={perro.id}
          nombre={perro.nombre}
          edad={perro.edad}
          raza={perro.raza}
        />
      ))}
    </div>
  );
}

export default Veterinaria;
