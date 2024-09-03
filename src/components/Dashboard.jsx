import '../styles/Dashboard.css'
import ListaEmpleados from './ListaEmpleados'

const Dashboard = () => {
  // const personas = useContext(PersonsContext)
  // console.log(personas)

  return (
    <div className='contenedor_dashboard'>
      <h3>Lista de empleados</h3>
      <ListaEmpleados />
    </div>
  )
}

export default Dashboard
