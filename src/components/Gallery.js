import React from "react";
import logo1 from "./logo1.png";
import backgroundimage3 from "./backgroundimage3.png";

function Gallery() {
  return (
    <div id="scroll-container" className="scroll-container">
      <div className="bgndimage">
        {/* <h2>Gallery</h2> */}
        <img src={backgroundimage3} alt="bgimage" />
      </div>
      <img src={backgroundimage3} alt="bgimage" />
      <img src={backgroundimage3} alt="bgimage" />
    </div>
  );
}

export default Gallery;
