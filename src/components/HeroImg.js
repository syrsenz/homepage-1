import "./HeroImgStyled.css";

import React from "react";
import HeroImage from "../assets/heroimage.jpg";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="hero-img" src={HeroImage} alt="heroimage" />
      </div>
      <div className="content">
        <h1>SMAN 1 UNGARAN</h1>
        <h3>SMANSA JUARA DAN BERBUDAYA</h3>
      </div>
    </div>
  );
};

export default HeroImg;
