import React from "react";

import "./footer.scss";
import bg from './l.jpg';

const Footer = () => {
  return (
    <footer
      className="footer bgImg bgImgFixed"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container">
        <div className="footerInfo">
          <div className="footerDetails">
            <h1>Information</h1>
            <a href="#contact">
              <p>Contact us</p>
            </a>
            <a href="#home">
              <p>Terms of services</p>
            </a>
          </div>
        </div>
        <p className="license">copyright 2025 &#169; Mumma's Meals</p>
      </div>
    </footer>
  );
};

export default Footer;
