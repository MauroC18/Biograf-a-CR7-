import { useState } from 'react'

const eventos = [
  {
    año: '1985',
    titulo: 'Nacimiento',
    descripcion: 'Nace el 5 de febrero en Funchal, Madeira, Portugal, en el seno de una familia humilde.',
    icono: '👶'
  },
  {
    año: '1997',
    titulo: 'Sporting de Lisboa',
    descripcion: 'Con solo 12 años es fichado por la academia del Sporting CP, donde su talento comienza a brillar.',
    icono: '⚽'
  },
  {
    año: '2003',
    titulo: 'Manchester United',
    descripcion: 'Sir Alex Ferguson lo ficha con 18 años. Debuta en la Premier League y conquista al mundo.',
    icono: '🔴'
  },
  {
    año: '2008',
    titulo: 'Primer Balón de Oro',
    descripcion: 'Gana su primer Balón de Oro tras una temporada histórica con el Manchester United.',
    icono: '🏆'
  },
  {
    año: '2009',
    titulo: 'Real Madrid',
    descripcion: 'Fichado por el Real Madrid por 94 millones de euros, récord mundial en ese momento.',
    icono: '👑'
  },
  {
    año: '2016',
    titulo: 'Eurocopa con Portugal',
    descripcion: 'Lidera a Portugal hacia su primera Eurocopa, consagrándose campeón continental.',
    icono: '🇵🇹'
  },
  {
    año: '2018',
    titulo: 'Juventus',
    descripcion: 'Se une a la Juventus de Turín buscando conquistar la Champions League con un nuevo equipo.',
    icono: '⚫'
  },
  {
    año: '2021',
    titulo: 'Regreso al United',
    descripcion: 'Regresa emocionalmente al Manchester United, donde todo comenzó para él.',
    icono: '🔙'
  },
  {
    año: '2023',
    titulo: 'Al-Nassr',
    descripcion: 'Inicia una nueva aventura en Arabia Saudita con el Al-Nassr, rompiendo récords en Asia.',
    icono: '🌙'
  }
]

function Timeline() {
  const [activo, setActivo] = useState(null)

  return (
    <section id="timeline">
      <div className="container">

        <div className="section-title">
          <h2>Línea de Tiempo</h2>
          <div className="divider"></div>
          <p>Una carrera llena de historia</p>
        </div>

        <div className="timeline-contenedor">
          {eventos.map((evento, index) => (
            <div
              key={index}
              className={`timeline-item ${activo === index ? 'activo' : ''} ${index % 2 === 0 ? 'izquierda' : 'derecha'}`}
              onClick={() => setActivo(activo === index ? null : index)}
            >
              <div className="timeline-punto">
                <span>{evento.icono}</span>
              </div>

              <div className="timeline-card">
                <span className="timeline-año">{evento.año}</span>
                <h5>{evento.titulo}</h5>
                <p className={activo === index ? 'visible' : ''}>{evento.descripcion}</p>
              </div>
            </div>
          ))}

          <div className="timeline-linea"></div>
        </div>

      </div>
    </section>
  )
}

export default Timeline