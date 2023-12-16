import React, { useMemo } from "react";
import "./GalleryHeader.css";
import { data } from "../../data/data";
import Button from "react-bootstrap/Button";

export default function GalleryHeader({ filterImageData, resetImageFilter }) {
  const getFilters = useMemo(() => {
    const setCategories = new Set(data.map((item) => item.category));
    return [...setCategories];
  }, []);

  return (
    <div className="header-container">
      <h2>Photo Gallery</h2>
      <span>
        Lorem ipsum is a placeholder text used in laying out print, graphic or
        web designs
      </span>
      <div className="filter-container">
        <Button
          variant="outline-primary"
          className="filter-btn"
          onClick={() => {
            resetImageFilter();
          }}
        >
          All
        </Button>
        {getFilters.map((item, index) => {
          return (
            <Button
              variant="outline-primary"
              className="filter-btn"
              key={index}
              onClick={() => filterImageData(item)}
            >
              {item}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
