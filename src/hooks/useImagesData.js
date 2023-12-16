import React from "react";
import { data } from "../data/data";

export const useImagesData = () => {
  const [imagesData, setImagesData] = React.useState(data);

  const filterImageData = (category) => {
    const filteredData = data.filter((item) => item.category === category);

    setImagesData(filteredData);
  };

  const resetImageFilter = () => {
    setImagesData(data)
  }

  return {
    imagesData,
    filterImageData,
    resetImageFilter
  };
};
