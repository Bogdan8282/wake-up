import React from "react";
import cafeInside from "../assets/cafe-inside.jpg";

const Main = () => {
  return (
    <main>
      <section className="intro">
        <div className="intro__wrap">
          <img src={cafeInside} alt="cafe" className="intro__image" />
          <div className="intro__overlay"></div>
          <div className="intro__content">
            <h1 className="intro__title">Refresh You Daily</h1>
            <p className="intro__text">
              Welcome to our cozy café, where every cup of coffee is brewed with
              love and every dish is crafted to delight your taste buds. Whether
              you're here for a quick bite or a leisurely meal, we promise a
              warm atmosphere and exceptional service that will make you feel
              right at home.
            </p>
            <a href="" className="intro__button">Visit Us</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
