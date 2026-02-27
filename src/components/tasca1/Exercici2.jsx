import './Exercici2.css'
import {useState } from "react"
function Cercle() {
    const [color, setColor] = useState("white");

    function red() {
        setColor("red")
    }
    function blue() {
        setColor("blue")
    }
    function green() {
        setColor("green")
    }
  return (
    <div >
        <h1>Canvi de color </h1>
        <div className="Tot">
            <div className="cercle" style={{backgroundColor: color}}>
            </div>
        </div>
        <div >
            <button onClick={red}>Canvi a vermell</button>
            <button onClick={blue}>Canvi a blau</button>
            <button onClick={green}>Canvi a verd</button>
        </div>
    </div>
  )
}

export default Cercle