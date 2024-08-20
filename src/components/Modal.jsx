import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, imgSrc }) => {
  if (!isOpen) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <img src={imgSrc} alt="Gallery Fullscreen" className="modal__image" />
        <button className="modal__close" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;