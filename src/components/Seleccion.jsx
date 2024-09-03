import React from 'react'

const Seleccion = ({ interrogacion }) => {
  return (
    <>
      <h4>{interrogacion}</h4>
      <div>
        <label>
          <input type='checkbox' /> Totalmente en desacuerdo
        </label>
        <label>
          <input type='checkbox' /> En desacuerdo
        </label>
        <label>
          <input type='checkbox' /> Ni de acuerdo ni en desacuerdo
        </label>
        <label>
          <input type='checkbox' /> De acuerdo
        </label>
        <label>
          <input type='checkbox' /> Totalmente de acuerdo
        </label>
      </div>
    </>
  )
}

export default Seleccion
