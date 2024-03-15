import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import ContactHeader from "./ContactHeader";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const closeNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
  };

  return (
    <header>
      <h3>Book Us Now</h3> <ContactHeader />
      <nav ref={navRef}>
        <ul>
          <li>
            <Link to="/" onClick={closeNavbar}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeNavbar}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/wedding" onClick={closeNavbar}>
              Wedding
            </Link>
          </li>
          <li>
            <Link to="/outdoor" onClick={closeNavbar}>
              Outdoor
            </Link>
          </li>
          <li>
            <Link to="/babyshoot" onClick={closeNavbar}>
              BabyShoot
            </Link>
          </li>
          <li>
            <Link to="/maternity" onClick={closeNavbar}>
              Maternity
            </Link>
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
