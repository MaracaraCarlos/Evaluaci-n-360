import React from 'react'
import Escala from './Escala'
import Seleccion from './Seleccion'
import Texto from './Texto'

const Formulario = () => {
  return (
    <div>
      <p>
        ¡Hola!
        Se le ha pedido que brinde su opinión sobre el empleado (nombre) para esta evaluación de 360 grados.
        A continuación, encontrará varios elementos de los principios de liderazgo que se aplican al desarrollo de (nombre).
        Le pedimos que responda las preguntas. Sus opiniones serán anónimas.
      </p>
      <Escala
        titulo='Autoconciencia'
        premisa='Califique a (nombre)/califíquese usted en cuanto a su autoconciencia, en comparación con sus compañeros, siendo 1 la calificación mas baja y 5 la mas alta:'
        preguntas={['Mantiene sus emociones y su comportamiento bajo control, incluso durante situaciones de mucha presión.', 'Demuestra un comportamiento ético.', 'Actúa con profesionalismo.', 'Aprende de sus errores.']}
      />
      <Escala
        titulo='Búsqueda de resultados'
        premisa='Califique a (nombre)/califíquese usted en cuanto a su búsqueda de resultados, en comparación con sus compañeros, siendo 1 la calificación mas baja y 5 la mas alta:'
        preguntas={['Se centra en las necesidades del cliente.', 'Soluciona problemas.']}
      />
      <Escala
        titulo='Liderazgo'
        premisa='Califique a (nombre)/califíquese usted en cuanto a su dominio del liderazgo, en comparación con sus compañeros, siendo 1 la calificación mas baja y 5 la mas alta:'
        preguntas={['Inspira en los demás el crecimiento y el aprendizaje continuos', 'Maneja los conflictos de una manera adecuada', 'Toma la iniciativa para resolver los problemas', 'Motiva a los demás a alcanzar sus objetivos']}
      />
      <Escala
        titulo='Comunicación'
        premisa='Califique a (nombre)/califíquese usted en cuanto a sus habilidades de comunicación interpersonal, siendo 1 la calificación mas baja y 5 la mas alta.'
        preguntas={['Se comunica con franqueza y eficacia con los demás', 'Muestra una actitud abierta y receptiva a las opiniones, y las solicita']}
      />
      <Escala
        titulo='Trabajo en equipo'
        premisa='Califique a (nombre)/califíquese usted en cuanto a sus habilidades de trabajo en equipo, siendo 1 la calificación mas baja y 5 la mas alta.'
        preguntas={['Trabaja bien en equipo', 'Brinda opiniones constructivas y útiles.', 'Trata a los demás de forma respetuosa.', 'Responde constructivamente ante los errores de los demás.', 'Adopta una actitud abierta al cambio y la innovación.']}
      />
      <Seleccion
        interrogacion='(Nombre) contribuye a que pueda hacer bien mi trabajo'
      />
      <Texto
        interrogacion='Dé un ejemplo concreto de algo que (nombre) haga bien:'
      />
      <Texto
        interrogacion='Dé un ejemplo concreto de algo que (nombre) podría hacer mejor:'
      />
      <Texto
        interrogacion='¿Tiene algún comentario que le gustaría compartir con el gerente de (nombre)?'
      />
    </div>
  )
}

export default Formulario
