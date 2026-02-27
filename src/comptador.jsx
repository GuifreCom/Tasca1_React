import { useState } from "react"
function Comptador() {
    const [count, setContador] = useState(0);
    const [Welcome, setMissage] = useState("Benvingut al comptador interactiu");

    function incrementar() {
        setContador(count + 1)
        setMissage("Has incrementat el comptador")
    }
    function decrementar() {
        setContador(count - 1)
        setMissage("Has decrementat el comptador")
    }
    function reiniciar () {
        setContador(0)
        setMissage("Has reiniciat el comptador")
    }

  return (
    <div >
        Comptador Interactiu
        <div >
            {count}
        </div>
        <div>
            {Welcome}
        </div>
        <div >
            <button onClick={decrementar}>- Decrementar</button>
            <button onClick={reiniciar}>Reiniciar</button>
            <button onClick={incrementar}>+ Incrementar</button>
        </div>
    </div>
  )
}

export default Comptador