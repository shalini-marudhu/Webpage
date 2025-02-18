import React from "react";

import Wed6 from "./Images/Wed6.webp";
import Wed8 from "./Images/Wed8.webp";
import Wed1 from "./Images/Wed1.webp";

import Out1 from "./Images/Out1.webp";
import Out4 from "./Images/Out4.webp";
import Out8 from "./Images/Out8.webp";

import Out12 from "./Images/Out12.webp";

import Bab1 from "./Images/Bab1.webp";
import Mat5 from "./Images/Mat5.webp";
import Mat8 from "./Images/Mat8.webp";

import Mod2 from "./Images/Mod2.webp";
import Mod3 from "./Images/Mod3.webp";
import Mod1 from "./Images/Mod1.webp";
import Mod4 from "./Images/Mod4.webp";
import Mod5 from "./Images/Mod5.webp";
import Mod6 from "./Images/Mod6.webp";
import Mod7 from "./Images/Mod7.webp";
import Mod8 from "./Images/Mod8.webp";
import Mod9 from "./Images/Mod9.webp";
import Mod10 from "./Images/Mod10.webp";
import Mat24 from "./Images/Mat24.webp";
import Mat10 from "./Images/Mat10.webp";
import Mat9 from "./Images/Mat9.webp";

import Bab9 from "./Images/Bab9.webp";
import Bab20 from "./Images/Bab20.webp";

const ImageGrid = ({ images }) => {
  return (
    <div>
      <div className="imagegrid">
        <h1>OUR WORKS</h1>
        <p>Smiles that Sparkle </p>
      </div>

      <div className="gallery">
        <img className="four-grid-cells" src={Mod1} alt="imggridd" />

        <img className="four-grid-cells" src={Wed1} alt="imggridd" />
        <img className="four-grid-cells" src={Mod5} alt="imggridd" />
        <img className="four-grid-cells" src={Out4} alt="imggridd" />
        <img className="four-grid-cells" src={Mod9} alt="imggridd" />
        <img className="four-grid-cells" src={Mod7} alt="imggridd" />
        <img className="four-grid-cells" src={Mat24} alt="imggridd" />
        <img className="four-grid-cells" src={Wed6} alt="imggridd" />
        <img className="four-grid-cells" src={Mod4} alt="imggridd" />
        <img className="four-grid-cells" src={Out12} alt="imggridd" />
        <img className="four-grid-cells" src={Mod8} alt="imggridd" />
        <img className="four-grid-cells" src={Wed8} alt="imggridd" />
        <img className="four-grid-cells" src={Mod6} alt="imggridd" />

        <img className="four-grid-cells" src={Mod10} alt="imggridd" />
        <img className="four-grid-cells" src={Bab1} alt="imggridd" />
        <img className="four-grid-cells" src={Out1} alt="imggridd" />
        <img className="four-grid-cells" src={Mod2} alt="imggridd" />
        <img className="four-grid-cells" src={Mat10} alt="imggridd" />
        <img className="four-grid-cells" src={Mat5} alt="imggridd" />
        <img className="four-grid-cells" src={Bab9} alt="imggridd" />
        <img className="four-grid-cells" src={Mod3} alt="imggridd" />
        <img className="four-grid-cells" src={Bab20} alt="imggridd" />

        <img className="four-grid-cells" src={Mod1} alt="imggridd" />
        <img className="four-grid-cells" src={Mat9} alt="imggridd" />
        <img className="four-grid-cells" src={Mat8} alt="imggridd" />

        <img className="four-grid-cells" src={Out8} alt="imggridd" />
      </div>
    </div>
  );
};

export default ImageGrid;
