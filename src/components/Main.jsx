import React from "react";
import cafeInside from "../assets/cafe-inside.jpg";

const Main = () => {
  return (
    <main>
      <section className="intro">
        <div className="intro__wrap">
          <img src={cafeInside} alt="cafe" className="intro__image" />
          <div className="intro__overlay">
            <h1 className="intro__title">Refresh You Daily</h1>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
