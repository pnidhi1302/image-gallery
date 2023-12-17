import React from "react";
import Modal from "react-bootstrap/Modal";
import ImageSlider from "../image-slider/ImageSlider";
import "./ImageModal.css";

export default function ImageModal({
  show,
  handleClose,
  selectedImage,
  images,
}) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Body className="image-container">
          <img
            src={selectedImage.img}
            alt="selected_img"
            className="full-image"
          />
        <ImageSlider images={images} selectedImage={selectedImage} />
      </Modal.Body>
    </Modal>
  );
}
