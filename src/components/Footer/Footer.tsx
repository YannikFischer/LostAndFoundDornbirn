import Twitter from "../../images/twitter.png";
import Facebook from "../../images/facebook.png";
import Instagram from "../../images/insta.png";
import Youtube from "../../images/youtube.png";
import "./Footer.scss";
import { useEffect, useState } from "react";

const Footer = () => {
  const [mobile, setMobile] = useState(window.innerWidth < 820);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 820) setMobile(false);
      else if (window.innerWidth < 820) setMobile(true);
    });

    return () => {};
  }, []);

  return (
    <div
      className="main_footer"
      style={mobile ? { flexDirection: "column", alignItems: "center" } : {}}
    >
      <div
        className="main_footer__container"
        style={mobile ? { flexDirection: "column", alignItems: "center" } : {}}
      >
        <span className="main_footer__container__heading">Legal Info</span>
        <a className="main_footer__container__item" href="/">
          Terms & Conditions
        </a>
        <a className="main_footer__container__item" href="/">
          Privacy Policy
        </a>
      </div>
      <div
        className="main_footer__container"
        style={mobile ? { flexDirection: "column", alignItems: "center" } : {}}
      >
        <span className="main_footer__container__heading">Team</span>
        <a className="main_footer__container__item" href="/">
          About Us
        </a>
        <a className="main_footer__container__item" href="/">
          Contact Us
        </a>
      </div>
      <div className="main_footer__container">
        <span className="main_footer__container__heading">Social Media</span>
        <div className="main_footer__container__social-m">
          <a className="main_footer__container__item" href="/">
            <img src={Facebook} alt="" />
          </a>
          <a className="main_footer__container__item" href="/">
            <img src={Youtube} alt="" />
          </a>
          <a className="main_footer__container__item" href="/">
            <img src={Twitter} alt="" />
          </a>
          <a className="main_footer__container__item" href="/">
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
