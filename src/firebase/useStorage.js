import { useState, useEffect } from "react";
import { storage, db, timestamp } from "./config";
import uuid from "react-uuid";

function useStorage(file) {
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const name = uuid();
    const storageRef = storage.ref(name);
    const dbRef = db.collection("photos");

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        const percentage = parseInt(
          (snap.bytesTransferred / snap.totalBytes) * 100
        );
        setProgress(percentage);
      },
      (err) => {
        setError(err);
        console.log("Error from useStorage:", err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        setUrl(url);

        // Add Data to Firestore
        dbRef.add({ name, url, createdAt: timestamp() });
      }
    );
  }, [file]);

  return { url, progress, error };
}

export default useStorage;
