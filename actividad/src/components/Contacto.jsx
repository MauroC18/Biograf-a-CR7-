function Contacto(){

return(

<section id="contacto">

<div className="container">

<h2 className="text-center mb-4">Contacto</h2>

<form>

<div className="mb-3">
<label className="form-label">Nombre</label>
<input type="text" className="form-control"/>
</div>

<div className="mb-3">
<label className="form-label">Correo</label>
<input type="email" className="form-control"/>
</div>

<div className="mb-3">
<label className="form-label">Mensaje</label>
<textarea className="form-control"></textarea>
</div>

<button className="btn btn-primary">
Enviar
</button>

</form>

</div>

</section>

)

}

export default Contacto