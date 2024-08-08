import React, { useEffect, useState } from "react";
import Logo from "../assets/logo-black.svg"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header__logo">
        <img src={Logo} alt="logo" className="logo__icon" />
        <h3 className="logo__text">Wake Up</h3>
      </div>
      <div className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <a href="" className="header__link">Main</a>
          </li>
          <li className="header__item">
            <a href="" className="header__link">About Us</a>
          </li>
          <li className="header__item">
            <a href="" className="header__link">Gallery</a>
          </li>
          <li className="header__item">
            <a href="" className="header__link">Location</a>
          </li>
          <li className="header__item">
            <a href="" className="header__link">Menu</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
