import React, { useState } from "react";
import "./ImagesGrid.css";
import ImageModal from "../image-modal/ImageModal";

export default function ImagesGrid({ imagesData }) {
  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClose = () => setShow(false);

  const handleImageClick = (item, index) => {
    setShow(true);
    setSelectedImage({
      img: item.thumbnail,
      index,
    });
  };

  return (
    <div className="gallery">
      {imagesData.map((item, index) => (
        <img
          key={index}
          className="gallery-item"
          src={item.thumbnail}
          alt={item.title}
          onClick={() => handleImageClick(item, index)}
        />
      ))}
      {show && (
        <ImageModal
          show={show}
          handleClose={handleClose}
          selectedImage={selectedImage}
          images={imagesData}
        />
      )}
    </div>
  );
}
