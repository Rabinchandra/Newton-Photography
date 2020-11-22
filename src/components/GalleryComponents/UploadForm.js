import React, { useState, useEffect } from "react";
import Progress from "./Progress";

function UploadForm() {
  const [file, setFile] = useState(null);
  const [isCorrectImage, setIsCorrectImage] = useState(false);
  const [modalBoxOpened, setModalBoxOpened] = useState(false);

  const uploadHandler = (e) => {
    const files = e.target.files;
    const fileTypes = ["image/jpeg", "image/png"];

    // Checking for file types
    if (!fileTypes.includes(files[0].type)) {
      return alert("Invalid file type!");
    }

    setFile(files[0]);
  };

  useEffect(() => {
    if (!isCorrectImage) {
      document.querySelector("#modal-box__input").value = "";
    }
  }, [isCorrectImage]);

  useEffect(() => {
    if (!file) {
      document.querySelector("#modal-box__input").value = "";
    }
  }, [file]);

  return (
    <div className='uploadForm'>
      <button
        onClick={() => setModalBoxOpened(true)}
        className='uploadForm__upload-photo-btn'>
        Upload Photo
      </button>

      <div
        className={`uploadForm__overlay ${modalBoxOpened ? "on" : ""}`}
        onClick={() => setModalBoxOpened(false)}></div>

      <div className={`uploadForm__modal-box ${modalBoxOpened ? "on" : ""}`}>
        <h4>Upload Photos</h4>
        <input type='file' onChange={uploadHandler} id='modal-box__input' />
        <label htmlFor='modal-box__input'>Browse Photo</label>
        {file && <div className='file-name'>{file.name}</div>}
        {file && isCorrectImage && (
          <Progress
            file={file}
            setFile={setFile}
            setIsCorrectImage={setIsCorrectImage}
          />
        )}
        {file && (
          <div className='modal-box__correct-incorrect-btns'>
            <button id='correct' onClick={() => setIsCorrectImage(true)}>
              <i className='fas fa-check'></i>
            </button>
            <button
              id='incorrect'
              onClick={() => {
                setIsCorrectImage(false);
                setFile(null);
              }}>
              <i className='fas fa-times'></i>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default UploadForm;
