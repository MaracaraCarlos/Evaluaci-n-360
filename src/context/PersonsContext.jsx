import { createContext, useEffect, useState } from 'react'
import personsService from '../service/empleados'

export const PersonsContext = createContext()

export function PersonsProvider ({ children }) {
  const [personas, setPersonas] = useState()

  useEffect(() => {
    personsService
      .getAll()
      .then(personasInicial => {
        console.log('promise completada')
        setPersonas(personasInicial)
      }).catch(error => {
        console.log('Error llamando API', error.message)
        window.alert('Error llamando API')
      })
  }, [])

  return (
    <PersonsContext.Provider
      value={{
        personas
      }}
    >
      {children}
    </PersonsContext.Provider>
  )
}
