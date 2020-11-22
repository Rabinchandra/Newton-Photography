import React, { useContext, useEffect } from "react";
import ThemeContext from "../context/ThemeContext";
import "../style/Gallery.css";
import Photos from "./GalleryComponents/Photos";
import UploadForm from "./GalleryComponents/UploadForm";

function Gallery({ user }) {
  const { setIsWhite } = useContext(ThemeContext);

  useEffect(() => {
    setIsWhite(false);
  }, []);

  return (
    <div className='gallery'>
      {user ? <UploadForm /> : ""}
      <Photos user={user} />
    </div>
  );
}

export default Gallery;
