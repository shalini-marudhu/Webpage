import React from "react";
import "./footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>About</h3>
          <p>Book us now and make your special moments more memorable.</p>
        </div>

        <div className="footer-column">
          <h3>Contact Us</h3>

          <p>Email: tagmepics@gmail.com</p>

          <a
            href="https://www.gmail.com/tagmepics/"
            aria-label="Go to mail"
          ></a>
          <p>Phone: +91 9524655853 </p>

          <a href="tel:+91 9524655853" aria-label="Go to phone"></a>
          <h3>Location</h3>
          <p>Velachery, Chennai</p>
        </div>

        <div className="footer-column">
          <h3>Follow Us</h3>
          <p>
            Stay updated with our latest work by following us on socialmedia
          </p>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/tagmephotography42/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            <a
              href="https://www.instagram.com/tagmephotography42/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://twitter.com/tagmepics"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.youtube.com/@tagmephotography1643"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2024 TAGMEPHOTOGRAPHY. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
