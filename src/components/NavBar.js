// import React from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav>
// <ul>
//   <li>
//     <Link to="/">Home</Link>
//   </li>
//   <li>
//     <Link to="/about">About</Link>
//   </li>
//   <li>
//     <Link to="/gallery">Gallery</Link>
//   </li>
//   <li>
//     <Link to="/wedding">Wedding</Link>
//   </li>
//   <li>
//     <Link to="/babyshoot">BabyShoot</Link>
//   </li>
// </ul>
//     </nav>
//   );
// }

// export default Navbar;
import React from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

// import "../Styles/main.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>Have A Look And Book Us Now</h3>
      <nav ref={navRef}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/wedding">Wedding</Link>
          </li>
          <li>
            <Link to="/babyshoot">BabyShoot</Link>
          </li>
        </ul>

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
