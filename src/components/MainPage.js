import "./allstyles.css";
import WebLogo from "./WebLogo";
import ContactHeader from "./ContactHeader";
function MainPage() {
  return (
    <div className="MainPage">
      <WebLogo />
      <h2 className="heading">TAG ME PHOTOGRAPHY</h2>
      <ContactHeader />
    </div>
  );
}
export default MainPage;
