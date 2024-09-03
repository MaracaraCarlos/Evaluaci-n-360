import React from 'react'
import numeroAleatorio from '../helpers/NumeroAleatorio'

const Escala = ({ titulo, premisa, preguntas }) => {
  return (
    <>
      <h3>{titulo}</h3>
      <p>{premisa}</p>
      <table>
        <thead>
          <tr>
            <td />
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
          </tr>
        </thead>
        <tbody>
          {
            preguntas.map(pregunta =>
              <tr key={numeroAleatorio(0, 1000)}>
                <td>{pregunta}</td>
                <td><input type='radio' /></td>
                <td><input type='radio' /></td>
                <td><input type='radio' /></td>
                <td><input type='radio' /></td>
                <td><input type='radio' /></td>
              </tr>
            )
          }
        </tbody>
      </table>
      <p>
        Agregue cualquier comentario adicional que tenga sobre esta competencia:
      </p>
      <textarea name='textarea' />
    </>
  )
}

export default Escala
