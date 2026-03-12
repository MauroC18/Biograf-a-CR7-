function Biografia() {
  return (
    <section id="biografia">
      <div className="container">

        <div className="section-title">
          <h2>Biografía</h2>
          <div className="divider"></div>
          <p>La historia de un campeón</p>
        </div>

        <div className="row align-items-center gap-5 gap-md-0">

          <div className="col-md-5 text-center">
            <img src="https://media.gq.com.mx/photos/66774829c12a54a09ddc8b23/1:1/w_2012,h_2012,c_limit/Cristiano%20Ronaldo.jpg" alt="Cristiano Ronaldo" className="img-fluid biografia-img" />
          </div>

          <div className="col-md-7">
            <h3 className="biografia-nombre">Cristiano Ronaldo dos Santos Aveiro</h3>
            <p className="biografia-fecha"> 5 de febrero de 1985 — Funchal, Madeira, Portugal</p>

            <p>Cristiano Ronaldo nació en una familia humilde en la isla de Madeira, Portugal. Desde pequeño mostró una pasión desbordante por el fútbol, entrenando incansablemente mientras soñaba con convertirse en el mejor del mundo.</p>

            <p>A los 12 años fue fichado por el Sporting de Lisboa, donde su talento llamó la atención del Manchester United. Sir Alex Ferguson lo contrató en 2003 con tan solo 18 años, iniciando una carrera que cambiaría la historia del fútbol.</p>

            <p>Con el Real Madrid alcanzó la cima absoluta, convirtiéndose en el máximo goleador de la historia del club con más de 450 goles.</p>

            <div className="row mt-4 text-center biografia-stats">
              <div className="col-4 stat-item border-stat">
                <h4>900+</h4>
                <small>Goles oficiales</small>
              </div>
              <div className="col-4 stat-item border-stat">
                <h4>5</h4>
                <small>Balones de Oro</small>
              </div>
              <div className="col-4 stat-item">
                <h4>20+</h4>
                <small>Años de carrera</small>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Biografia