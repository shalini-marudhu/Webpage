import React, { useState, useEffect } from "react";

import Wed6 from "./Images/Wed6.jpg";
import Wed8 from "./Images/Wed8.jpg";
import Wed1 from "./Images/Wed1.jpg";

import Out1 from "./Images/Out1.jpg";
import Out4 from "./Images/Out4.jpg";
import Out8 from "./Images/Out8.jpg";

import Out12 from "./Images/Out12.jpg";

import Bab1 from "./Images/Bab1.jpg";
import Mat5 from "./Images/Mat5.jpg";
import Mat8 from "./Images/Mat8.jpg";

import Mod2 from "./Images/Mod2.jpg";
import Mod3 from "./Images/Mod3.jpg";
import Mod1 from "./Images/Mod1.jpg";
import Mod4 from "./Images/Mod4.jpg";
import Mod5 from "./Images/Mod5.jpg";
import Mod6 from "./Images/Mod6.jpg";
import Mod7 from "./Images/Mod7.jpg";
import Mod8 from "./Images/Mod8.jpg";
import Mod9 from "./Images/Mod9.jpg";
import Mod10 from "./Images/Mod10.jpg";
import Mat24 from "./Images/Mat24.jpg";
import Mat10 from "./Images/Mat10.jpg";
import Mat9 from "./Images/Mat9.jpg";

import Bab9 from "./Images/Bab9.jpg";
import Bab20 from "./Images/Bab20.jpg";
import "./imageSlider.css";

function ImageSlider() {
  const images = [
    Wed6,
    Mat9,
    Bab9,
    Mat24,
    Bab20,
    Mod7,
    Mod6,
    Mat10,
    Mod10,
    Mod9,
    Mod8,
    Mod5,
    Mod4,
    Out8,
    Mat5,
    Bab1,
    Mod3,
    Mat8,
    Mod1,
    Mod2,
    Out12,
    Wed8,
    Out1,
    Wed1,
    Out4,
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="image-slider">
      <h1>A GLIMPSE OF OUR WORKS</h1>
      <p>Little Photo magic </p>
      {images.map((image, index) => (
        <div
          key={index}
          className={
            index === currentImageIndex ? "slide active" : "slide inactive"
          }
        >
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}

export default ImageSlider;
