import { useState } from "react"
import IncrementDecrement from './components/tasca1/Exercici1'
import Cercle from './components/tasca1/Exercici2'
import Lorem from './components/tasca1/Exercici3'
import CanviImatge from './components/tasca1/Exercici4'
import Galeria from "./components/tasca2/Exercici1"
import Carousel from "./components/tasca2/Exercici2"
function Menu() {
    const [tasca, setTasca] = useState(0)
    if (tasca === 1) {
        return (
            <>
            <IncrementDecrement/>
            <Cercle/>
            <Lorem/>
            <CanviImatge/>
            </>
        )
    }
    else if (tasca === 2){
        return(
            <>
            <Galeria/>
            <Carousel/>
            </>
        )
    }
    const tasca1 = () => {
        setTasca(1)
    }
    const tasca2 = () => {
        setTasca(2)
    }

  return (
    <div >
        <h1>Menu Reactiu Briar!!!</h1>
        <div style={{
            display:"flex",
            flexDirection:"column",
            gap:"5px"
        }}>
            <button onClick={tasca1}> Tasca 1</button>
            <button onClick={tasca2}> Tasca 2</button>
        </div>
    </div>
  )
}

export default Menu