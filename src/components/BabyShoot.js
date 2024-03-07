import React from "react";
import backgroundimgbaby from "./backgroundimgbaby.png";

function BabyShoot() {
  return (
    <div id="scroll-container" className="scroll-container">
      {/* <div className="bgndimage"> */}
      {/* <h2>Baby shoot</h2> */}
      <img src={backgroundimgbaby} alt="bgimage" />
      {/* </div> */}
      <img src={backgroundimgbaby} alt="bgimage" />
      <img src={backgroundimgbaby} alt="bgimage" />
    </div>
  );
}

export default BabyShoot;
