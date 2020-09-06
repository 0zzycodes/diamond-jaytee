import React, { useState } from "react";
import { Link } from "react-scroll";
import { Link as DomLink, withRouter } from "react-router-dom";
import Hero from "../hero/hero";
import bag from "../../assets/bag.svg";
import menu from "../../assets/menu.svg";
import BugerMenu from "../buger-menu/buger-menu";
import "./header.scss";

const Header = ({ match, history }) => {
  const [isShow, setisShow] = useState(false);
  const goHome = () => {
    history.location.pathname === "/shop" && history.push("/");
  };
  const handleScroll = (e) => {
    setisShow(!isShow);
    goHome();
  };
  const toggleMenu = () => {
    setisShow(!isShow);
  };

  return (
    <header className={`${!match.isExact && "shop-route"} header`}>
      <div className="b-menu">
        <BugerMenu isShow={isShow ? true : false} toggleMenu={setisShow} />
      </div>
      <nav className="navbar fancy">
        <div className="links">
          <div className="nav-links">
            <Link
              onClick={handleScroll.bind(this, "/")}
              to="/"
              spy={true}
              smooth={true}
              duration={500}
              className="option"
            >
              HOME
            </Link>
            <Link
              to="work"
              spy={true}
              smooth={true}
              duration={500}
              onClick={handleScroll.bind(this, "work")}
              className="option"
            >
              PORTFOLIO
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              onClick={handleScroll.bind(this, "services")}
              className="option"
            >
              SERVICES
            </Link>
            <Link
              to="testimonials"
              spy={true}
              smooth={true}
              duration={500}
              onClick={handleScroll.bind(this, "testimonials")}
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
              onClick={handleScroll.bind(this, "contact")}
              className="option"
            >
              CONTACT
            </Link>
            <DomLink to="/shop" className="option shop-btn">
              <img src={bag} alt="shopping bag" />
              <span>SHOP</span>
            </DomLink>
          </div>
        </div>
      </nav>
      <nav className="mobo-navbar">
        <div className="menu" onClick={toggleMenu}>
          <img src={menu} alt="menu" />
        </div>
        <DomLink
          to="/shop"
          className="option shop-btn"
          onClick={() => setisShow(false)}
        >
          <img src={bag} alt="shopping bag" />
          <span>SHOP</span>
        </DomLink>
      </nav>
      {match.isExact && <Hero />}
    </header>
  );
};

export default withRouter(Header);
