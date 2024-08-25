import React from "react";
import Logo from "../assets/icons/logo-white.svg";
import mediaImage1 from "../assets/icons/media-google.svg";
import mediaImage2 from "../assets/icons/media-instagram.svg";
import mediaImage3 from "../assets/icons/media-messenger.svg";
import mediaImage4 from "../assets/icons/media-whatsapp.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <a href="" className="footer__logo">
        <img src={Logo} alt="logo" className="logo__icon" />
        <h3 className="logo__text">Wake Up</h3>
      </a>
      <div className="footer__media">
        <a className="footer__link" href="">
          <img src={mediaImage1} alt="google" className="footer__link-pic" />
          <span className="footer__link-text">Google</span>
        </a>
        <a className="footer__link" href="">
          <img src={mediaImage2} alt="instagram" className="footer__link-pic" />
          <span className="footer__link-text">Instagram</span>
        </a>
        <a className="footer__link" href="">
          <img src={mediaImage3} alt="messenger" className="footer__link-pic" />
          <span className="footer__link-text">Messenger</span>
        </a>
        <a className="footer__link" href="">
          <img src={mediaImage4} alt="whatsapp" className="footer__link-pic" />
          <span className="footer__link-text">WhatsApp</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;