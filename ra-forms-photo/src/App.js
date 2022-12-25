import "./App.css";
import ImageItem from "./components/ImageList/ImageItem/ImageItem";
import ImageList from "./components/ImageList/ImageList";
import InputFiles from "./components/InputFiles/InputFiles";
import { useState } from "react";

function App() {
  const [images, setImages] = useState([]);

  const addNewImageHandler = (data) => {
    setImages((prevState) => [...prevState, data]);
  };

  const deleteImageHandler = (id) => {
    setImages((prevState) => {
      const filteredImages = prevState.filter((image) => image.id !== id);
      return [...filteredImages];
    });
  };

  return (
    <div>
      <InputFiles addNewImage={addNewImageHandler} />
      <ImageList images={images}>
        {(images) =>
          images.map((image) => (
            <ImageItem
              key={image.id}
              image={image}
              deleteImage={deleteImageHandler}
            />
          ))
        }
      </ImageList>
    </div>
  );
}

export default App;
