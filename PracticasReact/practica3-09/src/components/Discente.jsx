import React from 'react'

const Discente = ({discente}) => {
  return (
    <>
        <p>{discente.nombre} {discente.apellidos} {discente.curso} {discente.aficiones}</p>
    </>
  )
}

export default Discente
