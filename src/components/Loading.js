import React from "react";
import logo1 from "./logo1.png";
import "./footer.css";

const Loading = () => {
  return (
    <div className="loading-container">
      <img src={logo1} alt="Loading" className="loading-image" />

      <h2 className="loading-text">In Making Memories...</h2>
    </div>
  );
};

export default Loading;
