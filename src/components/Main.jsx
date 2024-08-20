import React, { useState } from "react";
import cafeInside from "../assets/cafe-inside.jpg";
import aboutUs from "../assets/about.jpeg";
import galleryImage1 from "../assets/coffe-and-doughnuts.jpg";
import galleryImage2 from "../assets/cafe-interior.jpg";
import galleryImage3 from "../assets/coffe-in-office.jpg";
import galleryImage4 from "../assets/cafe-girl.jpg";
import galleryImage5 from "../assets/two-cups.jpg";
import galleryImage6 from "../assets/coffee-cup.jpg";
import Modal from "./Modal";

const Main = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (imgSrc) => {
    setSelectedImage(imgSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
  };
  return (
    <main>
      <section className="intro">
        <div className="intro__wrap">
          <img src={cafeInside} alt="cafe" className="intro__image" />
          <div className="overlay"></div>
          <div className="intro__content">
            <h1 className="intro__title">Refresh You Daily</h1>
            <p className="intro__text">
              Welcome to our cozy café, where every cup of coffee is brewed with
              love and every dish is crafted to delight your taste buds. Whether
              you're here for a quick bite or a leisurely meal, we promise a
              warm atmosphere and exceptional service that will make you feel
              right at home.
            </p>
            <a href="" className="intro__button button">
              Visit Us
            </a>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="wrapper">
          <div className="about__wrap">
            <div className="about__content">
              <h2 className="about__title">About us</h2>
              <p className="about__text">
                We are a cafe located in London, dedicated to offering a
                friendly and welcoming atmosphere. Our team is passionate about
                serving quality coffee and freshly made pastries.
              </p>
              <p className="about__text">
                We believe in bringing people together through great food and
                memorable experiences. Visit us to enjoy a relaxing time with
                friends and family.
              </p>
            </div>
            <div className="about__image">
              <img src={aboutUs} alt="" className="about__image-pic" />
            </div>
          </div>
        </div>
      </section>

      <section className="visit-us">
        <div className="visit-us__wrap">
          <div className="overlay"></div>
          <div className="visit-us__content">
            <h2 className="visit-us__title">Visit Wake Up Cafe</h2>
            <a href="" className="visit-us__button button">
              Explore Menu
            </a>
          </div>
        </div>
      </section>

      <section className="gallery">
        <div className="gallery__wrap">
          {[
            galleryImage1,
            galleryImage2,
            galleryImage3,
            galleryImage4,
            galleryImage5,
            galleryImage6,
          ].map((imgSrc, index) => (
            <div
              key={index}
              className="gallery__image"
              onClick={() => openModal(imgSrc)}
            >
              <img src={imgSrc} alt="" className="gallery__image-pic" />
            </div>
          ))}
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={closeModal} imgSrc={selectedImage} />

      <section className="feedback">
        <div className="feedback__wrap">
          <p className="feedback__text">
            Wake Up is a gem! The coffee is superb, and the ambiance is cozy and
            inviting. The staff is incredibly friendly and attentive. I had a
            wonderful experience and will definitely return. Thank you, Wake Up!
          </p>
          <div className="feedback__author">— Olga</div>
        </div>
      </section>

      <section className="services">
        <div className="services__wrap">
          <div className="services__title">Our services</div>
          <div className="services__list">
            <div className="services__item">
              <img className="services__image" src="" alt="" />
              <p className="services__description"></p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
