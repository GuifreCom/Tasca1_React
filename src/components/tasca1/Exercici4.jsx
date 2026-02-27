import perato from "/src/imatges/perato.jpg" 
import teto from "/src/imatges/teto.jpg"
import { useState } from "react"
function CanviImatge() {
    const [imatge, setImage] = useState(false);

    function canvi() {
        setImage(!imatge) // fer !variable es per a que aixi canvii el valor al contrari del que esta al moment
    }

  return (
    <div >
        <h1>Comptador Interactiu</h1>
        <div >
            <img src={imatge ? perato : teto} width="300px" height="300px" />
        </div>
        <div >
            <button onClick={canvi}>Canvia la imatge</button>
        </div>
    </div>
  )
}

export default CanviImatge