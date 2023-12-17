import React from "react";
import { data } from "../data/data";
import { ALL_FILTER } from "../components/gallery-header/GalleryHeader";

export const useImagesData = () => {
  const [imagesData, setImagesData] = React.useState(data);

  const filterImageData = (category) => {
    const filteredData =
      category !== ALL_FILTER
        ? data.filter((item) => item.category === category)
        : data;

    setImagesData(filteredData);
  };

  return {
    imagesData,
    filterImageData,
  };
};
