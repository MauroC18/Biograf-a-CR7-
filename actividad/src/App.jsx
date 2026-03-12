import Navbar from "./components/Navbar"
import Inicio from "./components/Inicio"
import Biografia from "./components/Biografia"
import Timeline from "./components/Timeline"
import Logros from "./components/Logros"
import Galeria from "./components/Galeria"
import Contacto from "./components/Contacto"

function App() {
  return (
    <>
      <Navbar />

      <Inicio />
      <Biografia />
      <Timeline />
      <Logros />
      <Galeria />
      <Contacto />
    </>
  )
}

export default App