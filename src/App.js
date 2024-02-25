import "./App.css";
import logo from "./logo.svg";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   BrowserRouter,
// } from "react-router-dom";
import MainPage from "./components/MainPage.js";
import Navbar from "./components/NavBar.js";
import Gallery from "./components/Gallery.js";
import WebLogo from "./components/WebLogo.js";
function App() {
  return (
    <div className="App">
      <MainPage />
      <div className="weblogo">
        <WebLogo />
      </div>
      <Navbar />
      {/* <Router>
        <Route path="/gallery" element={<Gallery />} />
      </Router> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
