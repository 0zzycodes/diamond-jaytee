import React, { useState } from "react";
import { Link } from "react-scroll";
import Hero from "../hero/hero";
import "./header.scss";

const Header = () => {
  const [isShow, setisShow] = useState(false);
  const handleScroll = (e) => {
    setisShow(!isShow);
  };
  const toggleMenu = () => {
    setisShow(!isShow);
  };
  return (
    <header className="header">
      <nav className="navbar fancy">
        <div className="links">
          <div className="nav-links">
            <Link
              to="/"
              spy={true}
              smooth={true}
              duration={500}
              onClick={handleScroll}
              className="option"
            >
              HOME
            </Link>
            <Link
              to="work"
              spy={true}
              smooth={true}
              duration={500}
              onClick={handleScroll}
              className="option"
            >
              PORTFOLIO
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              onClick={handleScroll}
              className="option"
            >
              SERVICES
            </Link>
            <Link
              to="testimonial"
              spy={true}
              smooth={true}
              duration={500}
              onClick={handleScroll}
              className="option"
            >
              TESTIMONIALS
            </Link>

            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={handleScroll}
              className="option"
            >
              CONTACT
            </Link>
          </div>
        </div>
      </nav>
      <Hero />
    </header>
  );
};

export default Header;
