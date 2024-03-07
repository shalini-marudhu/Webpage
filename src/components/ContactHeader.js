import { FaFacebook, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";
function ContactHeader() {
  const handleInstaClick = () => {
    window.location.href = "https://www.instagram.com/tagmephotography42/";
  };
  const handleFacebookClick = () => {
    window.location.href = "https://www.facebook.com/tagmephotography42/";
  };
  const handleEmailClick = () => {
    window.location.href = "https://www.gmail.com/tagmephotography42/";
  };
  const handlePhoneClick = () => {
    window.location.href = "tel:+919500512704";
  };
  return (
    <div className="social-icons">
      <FaInstagram className="social-icon" onClick={handleInstaClick} />
      <FaEnvelope className="social-icon" onClick={handleEmailClick} />
      <FaPhone className="social-icon" onClick={handlePhoneClick} />
      <FaFacebook className="social-icon" onClick={handleFacebookClick} />
    </div>
  );
}
export default ContactHeader;
