import React, { useState, useEffect } from "react";
import "./App.css";
import MainPage from "./components/MainPage.js";
import Navbar from "./components/NavBar.js";
import About from "./components/About";
import Home from "./components/Home";
import Wedding from "./components/Wedding.js";
import BabyShoot from "./components/BabyShoot.js";
import Outdoor from "./components/Outdoor.js";
import Maternity from "./components/Maternity.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer.js";
import Loading from "./components/Loading.js";
import LazyLoad from "react-lazyload";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <div className="Main">
            <MainPage />
          </div>

          <Router>
            <div>
              <Navbar />
              <Routes>
                <Route
                  path="/"
                  exact
                  element={
                    <LazyLoad height={200} offset={100}>
                      <Home />
                    </LazyLoad>
                  }
                />
                <Route path="/about" element={<About />} />
                <Route
                  path="/maternity"
                  element={
                    <LazyLoad height={200} offset={100}>
                      <Maternity />
                    </LazyLoad>
                  }
                />
                <Route
                  path="/wedding"
                  element={
                    <LazyLoad height={200} offset={100}>
                      <Wedding />
                    </LazyLoad>
                  }
                />
                <Route
                  path="/outdoor"
                  element={
                    <LazyLoad height={200} offset={100}>
                      <Outdoor />
                    </LazyLoad>
                  }
                />
                <Route
                  path="/babyshoot"
                  element={
                    <LazyLoad height={200} offset={100}>
                      <BabyShoot />
                    </LazyLoad>
                  }
                />
              </Routes>
            </div>
          </Router>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
