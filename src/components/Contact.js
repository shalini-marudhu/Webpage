import React from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";

function Contact() {
  return (
    <div className="contactUs">
      <h1>Contact</h1>
      <div className="contactInfo">
        <div className="contactItem">
          <FaMapMarkerAlt />
          <span>Velachery, Chennai</span>
        </div>
        <div className="contactItem">
          <FaPhone />
          <span>+91 9524655853</span>
        </div>
        <div className="contactItem">
          <FaEnvelope />
          <span>tagmepics@gmail.com</span>
        </div>
        <div className="contactItem">
          <FaInstagram />
          <span>tagmephotography42</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
