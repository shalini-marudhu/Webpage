import React from "react";
import Out1 from "./Images/Out1.webp";
import Out2 from "./Images/Out2.webp";
import Out3 from "./Images/Out3.webp";
import Out4 from "./Images/Out4.webp";
import Out5 from "./Images/Out5.webp";
import Out6 from "./Images/Out6.webp";
import Out7 from "./Images/Out7.webp";
import Out8 from "./Images/Out8.webp";
import Out9 from "./Images/Out9.webp";
import Out10 from "./Images/Out10.webp";
import Out11 from "./Images/Out11.webp";
import Out12 from "./Images/Out12.webp";

function Outdoor() {
  return (
    <div id="scroll-container" className="scroll-container">
      <h2>OutDoors</h2>
      <img src={Out1} alt="Out1" loading="lazy" />
      <img src={Out8} alt="Out8" loading="lazy" />
      <img src={Out2} alt="Out2" loading="lazy" />
      <img src={Out3} alt="Out3" loading="lazy" />
      <img src={Out4} alt="Out4" loading="lazy" />
      <img src={Out5} alt="Out5" loading="lazy" />
      <img src={Out6} alt="Out6" loading="lazy" />
      <img src={Out7} alt="Out7" loading="lazy" />
      <img src={Out9} alt="Out9" loading="lazy" />
      <img src={Out10} alt="Out10" loading="lazy" />
      <img src={Out11} alt="Out11" loading="lazy" />
      <img src={Out12} alt="Out12" loading="lazy" />
    </div>
  );
}

export default Outdoor;
