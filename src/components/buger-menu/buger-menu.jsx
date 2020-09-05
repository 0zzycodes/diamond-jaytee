import React from "react";
import { Link } from "react-scroll";
import "./buger-menu.scss";

const BugerMenu = ({ isShow, toggleMenu }) => {
  const handleScroll = (e) => {
    toggleMenu(!isShow);
  };
  const body = document.querySelector("body");
  window.innerWidth <= 850 && isShow
    ? (body.style.overflowY = "hidden")
    : (body.style.overflowY = "scroll");
  return (
    <div className="buger-menu-container">
      <div className={`${isShow && "show"} ${!isShow && "hide"} buger-menu`}>
        <div className="buger-menu-links">
          <Link
            to="/"
            spy={true}
            smooth={true}
            duration={500}
            onClick={handleScroll.bind(this, "/")}
            className="buger-menu-option"
          >
            HOME
          </Link>
          <Link
            to="work"
            spy={true}
            smooth={true}
            duration={500}
            onClick={handleScroll.bind(this, "work")}
            className="buger-menu-option"
          >
            PORTFOLIO
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            duration={500}
            onClick={handleScroll.bind(this, "services")}
            className="buger-menu-option"
          >
            SERVICES
          </Link>
          <Link
            to="testimonials"
            spy={true}
            smooth={true}
            duration={500}
            onClick={handleScroll.bind(this, "testimonials")}
            className="buger-menu-option"
          >
            TESTIMONIALS
          </Link>

          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={handleScroll.bind(this, "contact")}
            className="buger-menu-option"
          >
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BugerMenu;
