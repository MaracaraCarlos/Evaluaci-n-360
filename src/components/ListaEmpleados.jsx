import { useContext } from 'react'
import { PersonsContext } from '../context/PersonsContext'
import numeroAleatorio from '../helpers/NumeroAleatorio'
import '../styles/ListaEmpleados.css'

const ListaEmpleados = () => {
  const personas = useContext(PersonsContext)
  return (
    <>
      <table className='tabla_empleados'>
        <thead className='cabecera'>
          <tr>
            <td>Nombre</td>
            <td>Departamento</td>
            <td>Cargo</td>
          </tr>
        </thead>
        <tbody>
          {
            personas && personas.personas.map(
              persona => {
                return (
                  <tr key={numeroAleatorio(1, 100000)}>
                    <td>{persona.nombre}</td>
                    <td>{persona.departamento}</td>
                    <td>{persona.profesion}</td>
                  </tr>
                )
              }
            )
          }
        </tbody>
      </table>
    </>
  )
}

export default ListaEmpleados
