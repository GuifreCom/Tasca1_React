import image1 from "/src/imatges/perato.jpg" 
import image2 from "/src/imatges/teto.jpg"
import image3 from "/src/imatges/chibiteto.jpg"
import image4 from "/src/imatges/mikudayo.png"
import { useState } from "react";
function Galeria() {

  const [images, setImages] = useState([image1, image2, image3, image4]);

  return (
    <div style={{
        display:"grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap:"5px"
    }}>
      {images.map((image) => { 
        return (
          <div>
            <img src={image} width="300px" height="300px" />
          </div>
        )
      })}
    </div>
  );

}
export default Galeria