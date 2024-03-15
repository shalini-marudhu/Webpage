import React from "react";
import Wed2 from "./Images/Wed2.jpg";
import Wed6 from "./Images/Wed6.jpg";
import Wed8 from "./Images/Wed8.jpg";
import Out1 from "./Images/Out1.jpg";
import Out4 from "./Images/Out4.jpg";
import Out12 from "./Images/Out12.jpg";
import Bab1 from "./Images/Bab1.jpg";
import Mat5 from "./Images/Mat5.jpg";
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
import Wed1 from "./Images/Wed1.jpg";

import ImageGrid from "./ImageGrid";

function Home() {
  const images = [
    Mod1,
    Wed1,
    Mod5,
    Mod3,
    Out4,
    Mod9,
    Mod7,
    Mod2,
    Wed6,
    Mod4,
    Out12,
    Mod8,
    Wed8,
    Mod6,
    Mod10,
  ];
  return (
    <div>
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
          <div className="content">
            <div className="quote">
              Ready to share
              <br /> your love story ? <br />
            </div>
            <div className="titlee">-OUTDOOR SHOOT</div>
          </div>
          <div className="image-with-content">
            <img src={Out1} alt="outdoor" />
          </div>
        </div>
        <div className="row">
          <div className="image-with-content">
            <img src={Bab1} alt="bab" />
            <div className="content">
              <div className="quote">Life's little treasures! </div>
              <div className="titlee">-BABY SHOOT</div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="content">
            <div className="quote">
              Moments to <br />
              cherish forever !!{" "}
            </div>
            <div className="titlee">-MATERNITY SHOOT</div>
          </div>
          <div className="image-with-content">
            <img src={Mat5} alt="Maternity" />
          </div>
        </div>
      </div>
      <ImageGrid images={images} />
    </div>
  );
}

export default Home;
