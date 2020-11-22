import React, { useState, useEffect } from "react";
import useFirestore from "../../firebase/useFirestore";
import { db, storage } from "../../firebase/config";
import loadingGif from "../../img/loading.gif";

function Photos({ user }) {
  const photos = useFirestore("photos");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  const deletePhoto = (name, id) => {
    // Delete from storage
    if (window.confirm("Are you sure want to delete?")) {
      storage
        .ref(name)
        .delete()
        .then(() => {
          // Delete from firestore
          db.collection("photos")
            .doc(id)
            .delete()
            .then(() => {
              alert("Image Deleted successfully!");
            })
            .catch((err) => {
              alert(err);
            });
        })
        .catch((err) => alert(err.message));
    }
  };

  return (
    <React.Fragment>
      {!photos || loading ? (
        <div className='loading-container'>
          <img src={loadingGif} alt="Spinner can't load!" id='loading' />
          <div className='loading__caption'>Please wait...</div>
        </div>
      ) : (
        <div className='photos__container'>
          {photos.map((photo) => {
            return (
              <div
                className='photo'
                style={{ background: `url(${photo.url})` }}
                key={photo.id}>
                {user ? (
                  <div className='delete-photo'>
                    <i
                      className='fas fa-trash'
                      onClick={() => deletePhoto(photo.name, photo.id)}></i>
                  </div>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
      )}
    </React.Fragment>
  );
}

export default Photos;
