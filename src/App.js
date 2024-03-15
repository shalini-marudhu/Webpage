import React from "react";
import "./App.css";
import MainPage from "./components/MainPage.js";
import Navbar from "./components/NavBar.js";
import About from "./components/About";
import Home from "./components/Home";
import Wedding from "./components/Wedding.js";
import BabyShoot from "./components/BabyShoot.js";
import Outdoor from "./components/Outdoor.js";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer.js";
import Maternity from "./components/Maternity.js";
function App() {
  return (
    <div className="App">
      <div className="Main">
        <MainPage />
      </div>

      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/maternity" element={<Maternity />} />
            <Route path="/wedding" element={<Wedding />} />
            <Route path="/outdoor" element={<Outdoor />} />
            <Route path="/babyshoot" element={<BabyShoot />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
