import React, { useContext } from 'react'
import { PersonsContext } from '../context/PersonsContext'
import '../styles/Nombres.css'

const Nombres = () => {
  const personas = useContext(PersonsContext)
  console.log(personas)
  return (
    <>
      {
        personas && personas.personas.map(
          persona => {
            return (
              <div key={persona.id} className='contenedor_persona'>
                <p>{persona.nombre}</p>
                <p>edad: {persona.edad}</p>
                <p>cargo: {persona.profesion}</p>
                <p>lugar: {persona.lugar}</p>
                <p>telefono: {persona.telefono}</p>
                <p>salario: ${persona.salario}</p>
              </div>
            )
          }
        )
      }
    </>
  )
}

export default Nombres
