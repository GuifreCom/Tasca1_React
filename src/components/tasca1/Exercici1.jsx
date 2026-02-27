import { useState } from "react"
function IncrementDecrement() {
    const [count, setContador] = useState(0);

    function incrementar() {
        setContador(count + 1)
    }
    function decrementar() {
        setContador(count - 1)
    }

  return (
    <div >
        <h1>Comptador Interactiu</h1>
        <div >
            <h2>{count}</h2>
        </div>
        <div >
            <button onClick={decrementar}>- Decrementar</button>
            <button onClick={incrementar}>+ Incrementar</button>
        </div>
    </div>
  )
}

export default IncrementDecrement