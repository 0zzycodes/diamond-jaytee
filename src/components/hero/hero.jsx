import React from "react";
import { Link } from "react-scroll";
import "./hero.scss";
const Hero = () => {
  return (
    <div className="hero">
      <div className="posis">
        <div className="content">
          <h3 className="intro">
            <span className="name">JayTee </span>
          </h3>
          <p>WELCOME TO MY WORLD </p>
        </div>
        <Link to="work" spy={true} smooth={true} duration={500}>
          <div className="mouse">
            <span className="ball"></span>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Hero;
