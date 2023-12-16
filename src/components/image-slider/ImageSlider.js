import React, { useState, useMemo } from "react";
import Button from "react-bootstrap/Button";
import "./ImageSlider.css";

export default function ImageSlider({ images = [], selectedImage }) {
  const [activeImageNum, setCurrent] = useState(selectedImage.index);

  const length = useMemo(() => images?.length, [images]);

  const nextSlide = () => {
    setCurrent(activeImageNum === length - 1 ? 0 : activeImageNum + 1);
  };

  const prevSlide = () => {
    setCurrent(activeImageNum === 0 ? length - 1 : activeImageNum - 1);
  };

  if (images.length <= 0) {
    return null;
  }

  return (
    <div className="slider-container">
      <Button onClick={prevSlide} disabled={activeImageNum === 0}>
        {"<"}
      </Button>
      <div className="images-container">
        {images.map((currentSlide, ind) => {
          return (
            <React.Fragment key={ind}>
              {(ind === activeImageNum ||
                ind === activeImageNum + 1 ||
                ind === activeImageNum + 2) && (
                <img
                  src={currentSlide.thumbnail}
                  className={`image ${ind === selectedImage.index ? "image-transform" : ""}`}
                  alt={currentSlide.title}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
      <Button
        onClick={nextSlide}
        disabled={activeImageNum === images.length - 1}
        className="next-btn"
      >
        {">"}
      </Button>
    </div>
  );
}
