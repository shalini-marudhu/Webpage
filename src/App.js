import React from "react";
import "./App.css";

import logo from "./logo.svg";
import MainPage from "./components/MainPage.js";
import Navbar from "./components/NavBar.js";
import Gallery from "./components/Gallery";
import About from "./components/About";
import WebLogo from "./components/WebLogo.js";
import Home from "./components/Home";
import HomeBackground from "./components/HomeBackground.js";
import Wedding from "./components/Wedding.js";
import BabyShoot from "./components/BabyShoot.js";
import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
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
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/wedding" element={<Wedding />} />
            <Route path="/babyshoot" element={<BabyShoot />} />
          </Routes>
        </div>
      </Router>
      <HomeBackground />
    </div>
  );
}

export default App;
