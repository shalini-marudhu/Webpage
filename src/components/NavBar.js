import "./allstyles.css";
// import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Gallery{/* <Link to="/gallery">Gallery</Link> */}</li>
        <li>Wedding</li>
        <li>BabyShoot</li>
      </ul>
    </nav>
  );
}
export default Navbar;
