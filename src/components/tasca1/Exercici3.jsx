import { useState } from "react"

function Lorem() {
    //aquestes constants guarden un valor en fals per dir que cap esta actiu
  const [isBold, setBold] = useState(false)
  const [isItalic, setItalic] = useState(false)
  const [isUnderline, setUnderline] = useState(false)

  function bold() {
    setBold(!isBold) // fer !variable es per a que aixi canvii el valor al contrari del que esta al moment
  }

  function cursive() {
    setItalic(!isItalic) // fer !variable es per a que aixi canvii el valor al contrari del que esta al moment
  }

  function sub() {
    setUnderline(!isUnderline) // fer !variable es per a que aixi canvii el valor al contrari del que esta al moment
  }

  return (
    <div>
      <h1>Canvi de format</h1>

      <div className="Tot">
        <h2
          style={{
            fontWeight: isBold ? "bold" : "normal", //aixo fa que si la varaible es True, fa la 1ra opcio (o sigui bold), i si es fals fa la segona opcio
            fontStyle: isItalic ? "italic" : "normal",
            textDecoration: isUnderline ? "underline" : "none",
          }}
        >
          Lorem Ipsum
        </h2>
      </div>

      <div>
        <button onClick={bold}>Canvi a negreta</button>
        <button onClick={cursive}>Canvi a cursiva</button>
        <button onClick={sub}>Canvi a subratllat</button>
      </div>
    </div>
  )
}

export default Lorem