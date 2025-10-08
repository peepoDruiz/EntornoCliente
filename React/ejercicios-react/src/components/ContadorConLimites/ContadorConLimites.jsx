import React, { useState } from "react";
import "./ContadorConLimites.css";

const ContadorConLimites = (props) => {
  const initialState = 0;
  const [counter, setCounter] = useState(initialState);

  const increase = () => {
    setCounter(counter + 1);
  };

  const decrease = () => {
    setCounter(counter - 1);
  };
  return (
    <div className="contador_alerta">
      <p>{props.children}</p>
      <h2>{counter}</h2>
      <button disabled={counter === 10 ? true : false} onClick={increase}>
        Incrementar
      </button>
      <button disabled={counter === 0 ? true : false} onClick={decrease}>
        Decrementar
      </button>
    </div>
  );
};

export default ContadorConLimites;
