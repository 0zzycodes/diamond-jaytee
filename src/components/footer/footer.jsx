import React from "react";
import "./footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <p className="copyright">
        &copy; Diamond_Jaytee {new Date().getFullYear()} |{" "}
        <a href="https://ozzy-dev.netlify.com">Ozzy.dev</a>
      </p>
    </footer>
  );
};

export default Footer;
