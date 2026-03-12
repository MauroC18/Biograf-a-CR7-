const logros = [
  {
    imagen: 'https://cms-images.acc.indazn.com/di/library/DAZN_News/91/8c/cristiano-ronaldo-champions-league_17ak1udoiuj631316hlbv1bi1i.png?t=-6072508&quality=80&w=750&h=422',
    titulo: 'Champions League',
    descripcion: 'Ganó la Champions League en 5 ocasiones, con Manchester United (2008) y Real Madrid (2014, 2016, 2017, 2018).',
    detalle: 'Máximo goleador histórico de la competición'
  },
  {
    imagen: 'https://img.asmedia.epimg.net/resizer/v2/IFMXQ5FSEBGBZIHBOVWQQNZRJM.jpg?auth=94d1d27e5da6605821276c651bc4f5c5a37e3c07d7a239caae91441c4bf737dc&width=1200&height=1200&focal=1500%2C550',
    titulo: 'Balones de Oro',
    descripcion: 'Conquistó el premio al mejor jugador del mundo en 2008, 2013, 2014, 2016 y 2017.',
    detalle: 'Rivalidad histórica con Messi'
  },
  {
    imagen: 'https://caracoltv.brightspotcdn.com/dims4/default/64169b8/2147483647/strip/true/crop/640x359+0+33/resize/568x319!/quality/75/?url=https%3A%2F%2Fcaracol-brightspot.s3-us-west-2.amazonaws.com%2Fassets%2Fgol%2Fcristiano_ronaldo_090619_afpe.jpg',
    titulo: 'Eurocopa 2016',
    descripcion: 'Lideró a Portugal hacia su primera Eurocopa en Francia, consagrándose campeón continental.',
    detalle: 'Máximo goleador histórico de la Eurocopa'
  },
  {
    imagen: 'https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/10413/production/_100697566_hi045932006.jpg.webp',
    titulo: 'Goles Oficiales',
    descripcion: 'Superó los 900 goles oficiales en su carrera, siendo el máximo goleador en la historia del fútbol.',
    detalle: 'Récord absoluto e imbatible'
  }
]

function Logros() {
  return (
    <section id="logros">
      <div className="container">

        <div className="section-title">
          <h2>Logros</h2>
          <div className="divider"></div>
        </div>

        <div className="row g-4 justify-content-center">
          {logros.map((logro, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="logro-card">
                <img
                  src={logro.imagen}
                  alt={logro.titulo}
                  className="logro-img"
                />
                <h5 className="logro-titulo">{logro.titulo}</h5>
                <p className="logro-descripcion">{logro.descripcion}</p>
                <span className="logro-detalle">{logro.detalle}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Logros