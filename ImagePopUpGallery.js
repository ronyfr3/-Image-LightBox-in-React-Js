import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const images = [
  "//placekitten.com/1500/500",
  "//placekitten.com/4000/3000",
  "//placekitten.com/800/1200",
  "//placekitten.com/1500/1500"
];

function ImagePopUpGallery() {
    const [photoIndex,setPhotoIndex] = useState('')
    const [isOpen,setIsOpen] = useState(false)
    
    const ChangeStateValue=(i)=>{
        setIsOpen(true)
        setPhotoIndex(i)
        console.log(i)
    }
    return (
        <div>
             {images.map((image,i)=>
        <div>
            {/* onClick={ChangeStateValue(i)} using this error occures then below text comes up
             Error: Too many re-renders. React limits the number of renders to prevent an infinite loop. */}
          {/* ey error solve korte onClick={ChangeStateValue(i)} er jaigate onClick={()=>ChangeStateValue(i)} use korte hbe */}
          <img src={image} alt='' onClick={()=>ChangeStateValue(i)}
           style={{width:'200px',height:'200px',display:'grid',gridGap:'10px',gridTemplateColumns:'30px',gridTemplateRows:'20px'}}/>
        </div>)}
     

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]} //click er pore j image ta show korbe ex: images[0]= 1st image
            nextSrc={images[(photoIndex + 1) % images.length]} // % images.length eta na dye sudhu {images[(photoIndex + 1)]} eta likhle last index e jawar por next btn show korbe na
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => setIsOpen(false)}
            enableZoom={true} //default true thake false korle zoom option asbe na
            onMovePrevRequest={() =>
              setPhotoIndex( (photoIndex + images.length - 1) % images.length)
            }
            onMoveNextRequest={() =>
                setPhotoIndex((photoIndex + 1) % images.length)
            }
          />
        )}
        </div>
    )
}

export default ImagePopUpGallery