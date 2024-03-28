import React, { useState, useRef } from "react";
import "./carousel.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Mod2 from "./Images/Mod2.webp";
import Mod3 from "./Images/Mod3.webp";
import Mod1 from "./Images/Mod1.webp";
import Wed3 from "./Images/Wed3.webp";
import Wed1 from "./Images/Wed1.webp";
import Wed20 from "./Images/Wed20.webp";
import Wed12 from "./Images/Wed12.webp";
import Wed23 from "./Images/Wed23.webp";
import Wed11 from "./Images/Wed11.webp";
import Out2 from "./Images/Out2.webp";
import Out3 from "./Images/Out3.webp";
import Bab14 from "./Images/Bab14.webp";
import Bab13 from "./Images/Bab13.webp";
import Mat5 from "./Images/Mat5.webp";
import Mod4 from "./Images/Mod4.webp";
import Mod5 from "./Images/Mod5.webp";
import Mod7 from "./Images/Mod7.webp";
import Mod9 from "./Images/Mod9.webp";
import Mat1 from "./Images/Mat1.webp";

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
      carouselRef.current.prev();
    } else if (deltaX < -50) {
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
      emulateTouch
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      ref={carouselRef}
    >
      <div>
        <img src={Mod1} alt="Mod1" loading="lazy" />
      </div>
      <div>
        <img src={Out2} alt="Out2" loading="lazy" />
      </div>
      <div>
        <img src={Wed1} alt="Wed1" loading="lazy" />
      </div>
      <div>
        <img src={Out3} alt="Out3" loading="lazy" />
      </div>
      <div>
        <img src={Wed20} alt="Wed20" loading="lazy" />
      </div>
      <div>
        <img src={Mod2} alt="Mod2" loading="lazy" />
      </div>
      <div>
        <img src={Mod7} alt="Mod7" loading="lazy" />
      </div>
      <div>
        <img src={Wed12} alt="Wed12" loading="lazy" />
      </div>
      <div>
        <img src={Mod9} alt="Mod9" loading="lazy" />
      </div>
      <div>
        <img src={Wed23} alt="Mod1" loading="lazy" />
      </div>
      <div>
        <img src={Mod3} alt="Mod3" loading="lazy" />
      </div>
      <div>
        <img src={Mod5} alt="Mod5" loading="lazy" />
      </div>
      <div>
        <img src={Wed11} alt="Wed11" loading="lazy" />
      </div>
      <div>
        <img src={Mod2} alt="Mod2" loading="lazy" />
      </div>
      <div>
        <img src={Wed3} alt="Mod1" loading="lazy" />
      </div>
      <div>
        <img src={Mod4} alt="Mod4" loading="lazy" />
      </div>
      <div>
        <img src={Mat5} alt="Mat5" loading="lazy" />
      </div>
      <div>
        <img src={Bab13} alt="Bab13" loading="lazy" />
      </div>
      <div>
        <img src={Bab14} alt="Bab14" loading="lazy" />
      </div>
      <div>
        <img src={Mat1} alt="Mat1" loading="lazy" />
      </div>
    </Carousel>
  );
}

export default MyCarousel;
