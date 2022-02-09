import React from "react";
import "./Navbar.scss";
import Logo from "../../images/LogoNavbar.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const hamburger = true;

  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap"
        rel="stylesheet"
      />
      <nav className="navbar">
        <div
          className={`navbar_toggle ${hamburger ? "is-active" : ""}`}
          id="mobile-menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <img src={Logo} alt="item_picture" className="img_responsive" />
        <div className="navbarButtons">
          <Link to={"/"} className="home">
            Home
          </Link>
          <Link to={"/lost"} className="lost">
            Lost
          </Link>
          <Link to={"/found"} className="found">
            Found
          </Link>
        </div>
      </nav>
      {/* <script src="script.js"></script> */}
    </div>
  );
};

export default Navbar;
