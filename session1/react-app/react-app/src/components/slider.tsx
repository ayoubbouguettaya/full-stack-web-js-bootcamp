import { useState } from "react";

const Slider = () => {
  const [activeImageIndex, setactiveImageIndex] = useState(0);

  const images = [
    "/tech-logo/aws.svg",
    "/tech-logo/azure.svg",
    "/tech-logo/git.svg",
  ];

  const nextImage = () => {
    console.log("next image")
    setactiveImageIndex((prevS) => {

        if(prevS == images.length -1) return 0;

      return prevS + 1;
    });
  };

const prevImage = () => {
    console.log("next image")
    setactiveImageIndex((prevS) => {

        if(prevS == 0) return images.length - 1
      return prevS -1;
    });
  };



  return (
    <div className="slider">
      <button 
      disabled={activeImageIndex == 0 ? true : false}
      onClick={prevImage}
       className="prev-btn">&#12296; previous </button>
     
      <img src={images[activeImageIndex]} />

      <button       disabled={activeImageIndex == 2 ? true : false}
 onClick={nextImage} className="next-btn">next &#12297;</button>
    </div>
  );
};

export default Slider;
