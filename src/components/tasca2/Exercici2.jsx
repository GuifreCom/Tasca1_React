import image1 from "/src/imatges/cacodemon.png" 
import image2 from "/src/imatges/priscilla.jpg"
import image3 from "/src/imatges/yuri2.jpg"
import image4 from "/src/imatges/yuri1.png"
import { useState } from "react";
function Carousel() {

  const [images, setImages] = useState([image1, image2, image3, image4]);
  const [index, setIndex] = useState(0);

  function Anterior() {
    setIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))  }
  function Seguent() {
    setIndex(prevIndex => (prevIndex === 3 ? images.lenght = 0 : prevIndex + 1))
  }
  
  return (
    <div style={{
        marginTop:"20px"
    }}>
          <div>
            <img src={images[index]} width="300px" height="300px" />
            <button onClick={Anterior}>◀</button>
            <button onClick={Seguent}>▶</button>
          </div>

    </div>
  );

}
export default Carousel