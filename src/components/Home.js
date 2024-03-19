import React from "react";
import Wed2 from "./Images/Wed2.jpg";
import Bab1 from "./Images/Bab1.jpg";
import Mat5 from "./Images/Mat5.jpg";
import Out1 from "./Images/Out1.jpg";
import MyCarousel from "./Carousel";

function Home() {
  return (
    <div className="imgcontainer">
      <p>PORTFOLIO</p>

      <div className="row">
        <div className="image-with-content">
          <img src={Wed2} alt="wedding" />
          <div className="content">
            <div className="quote">A Forever Promise! </div>
            <div className="titlee">-WEDDINGS</div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="image-with-content">
          <img src={Out1} alt="Outdoor" />
          <div className="content">
            <div className="quote">Ready to share your love story ?</div>
            <div className="titlee">-OUTDOOR SHOOT</div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="image-with-content">
          <img src={Bab1} alt="Baby" />
          <div className="content">
            <div className="quote">Life's little treasures! </div>
            <div className="titlee">-BABY SHOOT</div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="image-with-content">
          <img src={Mat5} alt="maternity" />
          <div className="content">
            <div className="quote">Moments to Cherish forever! </div>
            <div className="titlee">-MATERNITY SHOOT</div>
          </div>
        </div>
      </div>
      <div className="image-slider">
        <h1>A GLIMPSE OF OUR WORKS</h1>
        <p>Little Photo magic </p>
      </div>
      <MyCarousel />
    </div>
  );
}

export default Home;
