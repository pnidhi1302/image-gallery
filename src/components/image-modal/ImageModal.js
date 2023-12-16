import React from "react";
import Modal from "react-bootstrap/Modal";
import ImageSlider from "../image-slider/ImageSlider";

export default function ImageModal({
  show,
  handleClose,
  selectedImage,
  images,
}) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Body>
          <img
            src={selectedImage.img}
            alt="selected_img"
            style={{ height: 200, width: "100%" }}
          />
        <ImageSlider images={images} selectedImage={selectedImage} />
      </Modal.Body>
    </Modal>
  );
}
