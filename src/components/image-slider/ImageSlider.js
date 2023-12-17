import React, { useState, useMemo, useEffect } from "react";
import Button from "react-bootstrap/Button";
import "./ImageSlider.css";

export default function ImageSlider({ images = [], selectedImage }) {
  const [activeImageNum, setCurrent] = useState(selectedImage.index);

  useEffect(() => {
    const downHandler = ({ key }) => {
      if (key === "ArrowRight") {
        nextSlide();
      }
    };

    const upHandler = ({ key }) => {
      if (key === "ArrowLeft") {
        prevSlide();
      }
    };

    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, [activeImageNum]);

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
      <Button onClick={prevSlide}>{"<"}</Button>
      <div className="images-container">
        {images.map((currentSlide, ind) => {
          return (
            <React.Fragment key={ind}>
              {ind >= activeImageNum && (
                <img
                  src={currentSlide.thumbnail}
                  className={`image ${
                    ind === selectedImage.index ? "image-transform" : ""
                  }`}
                  alt={currentSlide.title}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
      <Button onClick={nextSlide} className="next-btn">
        {">"}
      </Button>
    </div>
  );
}
