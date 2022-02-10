import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__links">
        <div className="footer__link--wrapper">
          <div className="footer__link--items">
            <h2>Legal</h2>
            <a href="#">Terms and Conditions</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of use</a>
          </div>
          <div className="footer__link--items">
            <h2>Project Leader</h2>
            <a href="https://www.instagram.com/jaythekk/">Yannik Fischer</a>
          </div>
          <div className="footer__link--items">
            <h2>Project Members</h2>
            <a href="https://www.instagram.com/kristijanm1/">
              Kristijan Mladenovic
            </a>
            <a href="https://www.instagram.com/kai_xmayer/">Kai Mayer</a>
            <a href="https://www.instagram.com/fabian_a.k.a._febs/">
              Fabian Türtscher
            </a>
            <a href="https://www.instagram.com/simon.ostini/">Simon Ostini</a>
            {/* <a href="https://www.instagram.com/patrick.cerny/">Patrick Cerny</a> */}
          </div>
          <div className="footer__link--items">
            <h2>Social Media</h2>
            <a href="https://www.instagram.com/bellapoarch/">Instagram</a>
            <a href="https://twitter.com/bunnydelphine">Twitter</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
