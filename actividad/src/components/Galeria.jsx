const fotos = [
  {
    imagen: 'https://objetos.estaticos-marca.com/imagenes/2013/06/20/futbol/equipos/real_madrid/1371750190_extras_noticia_foton_7_0.jpg',
    descripcion: 'Ronaldo de niño en Madeira, sus primeros pasos en el fútbol'
  },
  {
    imagen: 'https://c.files.bbci.co.uk/58FB/production/_130797722_cristianoronaldo.jpg',
    descripcion: 'Debut en el Manchester United 2003'
  },
  {
    imagen: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhpnaB4lLcsQnih-yteEwaEr5j1C2K_ZC5aM7qBiqGb-dTRojxmVfEOCU7bbAl4SUybO5Vw-t7Kek3UlQr8mxdqx79zzY2ZfZd5MlUY2OsFIYpMVJdYXtenxMJSPG48guWIebztdG_8k_g/s320/tumblr_n4cg3gZjBJ1t52aheo8_1280.jpg',
    descripcion: 'Primer título con el Real Madrid, Copa del Rey 2011'
  },
  {
    imagen: 'https://www.tudn.com/_next/image?url=https%3A%2F%2Fst1.uvnimg.com%2F88%2F11%2F6b3234c540678000313009e7c851%2Fespana-vs-portugal-13.jpg&w=1280&q=75',
    descripcion: 'Hat-trick ante España en el Mundial 2018'
  },
  {
    imagen: 'https://www.jappyfootballclothing.com/cdn/shop/products/WhatsAppImage2022-08-17at10.45.17PM_2048x.jpg?v=1660769132',
    descripcion: 'Llegada triunfal a la Juventus de Turín 2018'
  },
  {
    imagen: 'https://caracoltv.brightspotcdn.com/dims4/default/feb19e5/2147483647/strip/true/crop/632x355+0+0/resize/568x319!/quality/75/?url=https%3A%2F%2Fcaracol-brightspot.s3.us-west-2.amazonaws.com%2F24%2Fce%2Fa3ed0e3242b3bed73f9dd726aa07%2Falala.png',
    descripcion: 'Récord de 900 goles oficiales con Al-Nassr'
  }
]

function Galeria() {
  return (
    <section id="galeria">
      <div className="container">

        <div className="section-title">
          <h2>Galería</h2>
          <div className="divider"></div>
          <p>Los mejores momentos de su carrera</p>
        </div>

        <div className="galeria-grid">
          {fotos.map((foto, index) => (
            <div className={`galeria-item item-${index + 1}`} key={index}>
              <img src={foto.imagen} alt={foto.descripcion} />
              <div className="galeria-overlay">
                <p>{foto.descripcion}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Galeria