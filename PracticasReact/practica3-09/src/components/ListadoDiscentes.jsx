import Discente from "./Discente.jsx";

const ListadoDiscentes = ({ lista }) => {
  return (
    <>
      <div>
        <h2>Discentes:</h2>

        {lista.length
          ? lista.map((discente, index) => {
              return <Discente key={index} discente={discente} />;
            })
          : "No hay discentes"}
      </div>
    </>
  );
};

export default ListadoDiscentes;
