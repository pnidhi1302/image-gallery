import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ImagesGrid from "./components/image-grid/ImagesGrid";
import GalleryHeader from "./components/gallery-header/GalleryHeader";
import { useImagesData } from "./hooks/useImagesData";

function App() {
  const { imagesData, filterImageData } = useImagesData();

  return (
    <div className="content-container">
      <h3>Gallery</h3>
      <span>{"PAGES -> GALLERY"}</span>
      <GalleryHeader filterImageData={filterImageData} />
      <ImagesGrid imagesData={imagesData} />
    </div>
  );
}

export default App;
