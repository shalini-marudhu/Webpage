import logo1 from "./logo1.png";
import backgroundimage2 from "./backgroundimage2.png";

import backgroundimgbaby from "./backgroundimgbaby.png";
import { useEffect, useRef, useLayoutEffect } from "react";
// function HomeBackground() {
//   return (
//     <div className="homebackground">
//       <img src={backgroundimgbaby} className="homebackground" alt="logo" />
//     </div>
//   );
// }

function HomeBackground() {
  const scrollContainerRef = useRef(null);

  // useLayoutEffect(() => {
  //   const scrollContainer = scrollContainerRef.current;
  //   if (!scrollContainer) return;
  //   const startScrollAnimation = () => {
  //     const scrollWidth = scrollContainer.scrollWidth;
  //     const containerWidth = scrollContainer.clientWidth;
  //     const animationDuration = scrollWidth / 50; //speed

  //     scrollContainer.style.animation = `scrollAnimation ${animationDuration}s linear infinite`;

  //     setTimeout(() => {
  //       scrollContainer.style.animation = "";
  //     }, animationDuration * 1000);
  //   };
  //   startScrollAnimation();

  //   return () => {
  //     scrollContainer.style.animation = "";
  //   };
  // }, []);

  return (
    <div id="scroll-container" className="scroll-container">
      <div className="bgndimage">
        <img src={backgroundimgbaby} alt="bgimage" />
      </div>
      <img src={backgroundimage2} alt="bgimage" />
      <img src={backgroundimgbaby} alt="bgimage" />
    </div>
  );
}
export default HomeBackground;
