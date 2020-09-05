import React from "react";
import "./contact.scss";
const Contact = () => {
  return (
    <div className="contact">
      <div className="heading">
        <h1>CONTACT</h1>
        <span>GET IN TOUCH</span>
      </div>
      <div className="contact-details">
        <div className="phone">
          <p>
            Phone:{" "}
            <span>
              <a href="tel:+2349026040774">+234 9026040770</a>
            </span>
          </p>
        </div>
        <div className="divider"></div>
        <div className="email">
          <p>
            Email me{" "}
            <span>
              <a href="mailto:jaytee@gmail.com">@jaytee@gmail.com</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
