import React, { useState } from "react";
import "./Listado.css";

const Listado = (props) => {
  const [randomNumber, setRandomNumber] = useState([]);

  const generateRandomNumber = () => {
    let number = parseInt(Math.random() * 100 + 1);
    randomNumber.includes(number)
      ? generateRandomNumber()
      : setRandomNumber([...randomNumber, number]);
  };

  const deleteNumbers = () => {
    setRandomNumber([]);
  };

  return (
    <>
      <div className="listado_alerta">
        <p>{props.children}</p>
        <button onClick={generateRandomNumber}>Generar</button>
        <button onClick={deleteNumbers}>Eliminar</button>
      </div>

      <div>
        <ul>
          {Array.isArray(randomNumber) && randomNumber.length
            ? randomNumber.map((number, index) => {
                return (
                  <li id={index} key={crypto.randomUUID()}>
                    {number}
                  </li>
                );
              })
            : "Array vacío."}
        </ul>
      </div>
    </>
  );
};

export default Listado;
