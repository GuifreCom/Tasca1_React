import { useState } from "react"
import IncrementDecrement from './components/tasca1/Exercici1'
import Cercle from './components/tasca1/Exercici2'
import Lorem from './components/tasca1/Exercici3'
import CanviImatge from './components/tasca1/Exercici4'
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
    const tasca1 = () => {
        setTasca(1)
    }

  return (
    <div >
        <h1>Menu Intereactiu!</h1>
        <div >
            <button onClick={tasca1}> Tasca 1</button>
        </div>
    </div>
  )
}

export default Menu