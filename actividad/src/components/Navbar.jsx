function Navbar(){

return(

<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">

<div className="container">

<a className="navbar-brand">Cristiano Ronaldo</a>

<button 
className="navbar-toggler"
type="button"
data-bs-toggle="collapse"
data-bs-target="#menu"
>
<span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse" id="menu">

<ul className="navbar-nav ms-auto">

<li className="nav-item">
<a className="nav-link" href="#inicio">Inicio</a>
</li>

<li className="nav-item">
<a className="nav-link" href="#biografia">Biografía</a>
</li>

<li className="nav-item">
<a className="nav-link" href="#timeline">Línea de tiempo</a>
</li>

<li className="nav-item">
<a className="nav-link" href="#logros">Logros</a>
</li>

<li className="nav-item">
<a className="nav-link" href="#galeria">Galería</a>
</li>

<li className="nav-item">
<a className="nav-link" href="#contacto">Contacto</a>
</li>

</ul>

</div>

</div>

</nav>

)

}

export default Navbar