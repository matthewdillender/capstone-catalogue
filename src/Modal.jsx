import React from "react";
import "./Modal.css";

function Modal({ isOpen, onClose, title, description }) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Modal;
