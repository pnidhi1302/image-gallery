import React, { useMemo } from "react";
import "./GalleryHeader.css";
import { data } from "../../data/data";
import Button from "react-bootstrap/Button";

export const ALL_FILTER = "All";

export default function GalleryHeader({ filterImageData }) {
  const [selectedFilter, setSelectedFilter] = React.useState(ALL_FILTER);

  const getFilters = useMemo(() => {
    const setCategories = new Set(data.map((item) => item.category));
    return [ALL_FILTER, ...setCategories];
  }, []);

  const handleFilterClick = (selectedItem) => {
    setSelectedFilter(selectedItem);
    filterImageData(selectedItem);
  };

  return (
    <div className="header-container">
      <h2>Photo Gallery</h2>
      <span>
        Lorem ipsum is a placeholder text used in laying out print, graphic or
        web designs
      </span>
      <div className="filter-container">
        {getFilters.map((item, index) => {
          return (
            <Button
              variant={item === selectedFilter ? "primary" : "outline-primary"}
              className="filter-btn"
              key={index}
              onClick={() => handleFilterClick(item)}
            >
              {item}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
