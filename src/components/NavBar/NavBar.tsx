import { useEffect, useState } from "react";
import AnimateHeight from "react-animate-height";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.scss";
import Logo from "../../images/LogoNavbar.png";

const NavBar = () => {
  let navigate = useNavigate();
  const [mobile, setMobile] = useState(window.innerWidth < 820);
  const [burgerClicked, setBurgerClicked] = useState(false);

  const [scrolled, setScrolled] = useState(0);
  const handleBurgerClick = () => {
    setBurgerClicked(!burgerClicked);
  };
  const handleLinkClick = () => {
    setBurgerClicked(false);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 820) setMobile(false);
      else if (window.innerWidth < 820) setMobile(true);
    });
    window.addEventListener("scroll", () => {
      var winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      var height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setScrolled((winScroll / height) * 100);
    });

    return () => {
      window.removeEventListener("resize", () => {});
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  return (
    <nav className="nav_container" style={mobile ? {} : { height: "100px" }}>
      <div className="navBar">
        <div className="navBar__image-container">
          <img
            src={Logo}
            alt="Otiosum Logo"
            className="navBar__image-container__image"
            style={mobile ? { height: "50px", padding: "20px 0" } : {}}
            onClick={() => {
              navigate("/");
              setBurgerClicked(false);
            }}
          />
        </div>
        {mobile ? null : (
          <ul className="navBar__item-container">
            <>
              <li className="navBar__item-container__item underline--hover">
                <Link to="/" onClick={handleLinkClick}>
                  Home
                </Link>
              </li>
              <li className="navBar__item-container__item underline--hover">
                <Link to="/lost" onClick={handleLinkClick}>
                  Lost
                </Link>
              </li>
              <li className="navBar__item-container__item underline--hover">
                <Link to="/found">Found</Link>
              </li>
            </>
          </ul>
        )}

        {mobile ? (
          <ul className="navBar__item-container">
            <button
              className={`menu ${burgerClicked ? "opened" : ""}`}
              onClick={handleBurgerClick}
              aria-label="Main Menu"
            >
              <svg width="40" height="40" viewBox="0 0 100 100">
                <path
                  className="line line1"
                  d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                />
                <path className="line line2" d="M 20,50 H 80" />
                <path
                  className="line line3"
                  d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                />
              </svg>
            </button>
          </ul>
        ) : null}
      </div>
      <div className="navBarItems-mobile">
        {mobile ? (
          <AnimateHeight duration={350} height={burgerClicked ? "auto" : 0}>
            <ul className="navBarItems-mobile__item-container">
              <li className="navBarItems-mobile__item-container__item underline--hover">
                <Link to="/" onClick={handleLinkClick}>
                  Home
                </Link>
              </li>
              <li className="navBarItems-mobile__item-container__item underline--hover">
                <Link to="/lost" onClick={handleLinkClick}>
                  Lost
                </Link>
              </li>
              <li className="navBarItems-mobile__item-container__item underline--hover">
                <Link to="/found" onClick={handleLinkClick}>
                  Found
                </Link>
              </li>
            </ul>
          </AnimateHeight>
        ) : null}
      </div>
      <div className="scrollIndicator" style={{ width: scrolled + "%" }}></div>
    </nav>
  );
};

export default NavBar;
