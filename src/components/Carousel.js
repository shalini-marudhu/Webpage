import React, { useState, useRef } from "react";
import "./carousel.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Mod2 from "./Images/Mod2.jpg";
import Mod3 from "./Images/Mod3.jpg";
import Mod1 from "./Images/Mod1.jpg";
import Wed3 from "./Images/Wed3.jpg";
import Wed1 from "./Images/Wed1.jpg";
import Wed20 from "./Images/Wed20.jpg";
import Wed12 from "./Images/Wed12.jpg";
import Wed23 from "./Images/Wed23.jpg";
import Wed11 from "./Images/Wed11.jpg";
import Out2 from "./Images/Out2.jpg";
import Out3 from "./Images/Out3.jpg";
import Bab14 from "./Images/Bab14.jpg";

import Bab13 from "./Images/Bab13.jpg";
import Mat5 from "./Images/Mat5.jpg";

import Mod4 from "./Images/Mod4.jpg";
import Mod5 from "./Images/Mod5.jpg";
import Mod7 from "./Images/Mod7.jpg";
import Mod9 from "./Images/Mod9.jpg";
import Mat12 from "./Images/Mat12.jpg";
import Mat1 from "./Images/Mat1.jpg";

function MyCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);
  const touchStartX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX.current;

    if (deltaX > 50) {
      // Swipe right
      carouselRef.current.prev();
    } else if (deltaX < -50) {
      // Swipe left
      carouselRef.current.next();
    }
  };
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop
      selectedItem={currentSlide}
      onChange={(index) => setCurrentSlide(index)}
      swipeable
      emulateTouch // Enable touch emulation for desktop
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      ref={carouselRef}
    >
      <div>
        <img src={Mod1} alt="Mod1" />
      </div>
      <div>
        <img src={Out2} alt="Out2" />
      </div>
      <div>
        <img src={Wed1} alt="Wed1" />
      </div>
      <div>
        <img src={Out3} alt="Out3" />
      </div>
      <div>
        <img src={Wed20} alt="Wed20" />
      </div>
      <div>
        <img src={Mod2} alt="Mod2" />
      </div>
      <div>
        <img src={Mod7} alt="Mod7" />
      </div>
      <div>
        <img src={Wed12} alt="Wed12" />
      </div>
      <div>
        <img src={Mod9} alt="Mod9" />
      </div>
      <div>
        <img src={Wed23} alt="Mod1" />
      </div>
      <div>
        <img src={Mod3} alt="Mod3" />
      </div>
      <div>
        <img src={Mod5} alt="Mod5" />
      </div>
      <div>
        <img src={Wed11} alt="Wed11" />
      </div>
      <div>
        <img src={Mod2} alt="Mod2" />
      </div>
      <div>
        <img src={Wed3} alt="Mod1" />
      </div>
      <div>
        <img src={Mod4} alt="Mod4" />
      </div>
      <div>
        <img src={Mat5} alt="Mat5" />
      </div>
      <div>
        <img src={Bab13} alt="Bab13" />
      </div>
      <div>
        <img src={Mat12} alt="Mat12" />
      </div>
      <div>
        <img src={Mod1} alt="Mod1" />
      </div>

      <div>
        <img src={Bab14} alt="Bab14" />
      </div>
      <div>
        <img src={Mod1} alt="Mod1" />
      </div>
      <div>
        <img src={Mat1} alt="Mat1" />
      </div>
    </Carousel>
  );
}

export default MyCarousel;
