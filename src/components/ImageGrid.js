import React from "react";

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
