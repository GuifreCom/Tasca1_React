import { useState } from 'react'
import './App.css'
import IncrementDecrement from './components/tasca1/Exercici1'
import Cercle from './components/tasca1/Exercici2'
import Lorem from './components/tasca1/Exercici3'
import CanviImatge from './components/tasca1/Exercici4'
import Galeria from './components/tasca2/Exercici1'
import Carousel from './components/tasca2/Exercici2'
import Menu from './menu'

function App() {

  const [tascaSeleccionada, setTascaSeleccionada] = useState("tasca1.1")

  function getTascaComponent(){
    switch (tascaSeleccionada) {
      case "tasca1.1":
        return <IncrementDecrement/>
      case "tasca1.2":
        return <Cercle/>
      case  "tasca1.3":
        return <Lorem/>
      case "tasca1.4":
        return <CanviImatge/>
      case "tasca2.1":
        return <Galeria/>
      case "tasca2.2":
        return <Carousel/>
    }
  }

  return (
    <>
    <Menu canviarTasca={setTascaSeleccionada}/>
    {getTascaComponent()}
    </>
  )
}

export default App