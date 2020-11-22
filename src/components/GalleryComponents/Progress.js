import React, { useEffect } from 'react'
import useStorage from "../../firebase/useStorage"

function Progress({ file, setFile, setIsCorrectImage }) {
    const { progress, url, error } = useStorage(file);

    useEffect(() => {
        if(url !== '') {
            setFile(null);
            setIsCorrectImage(false);
        }
    }, [url]);

    return (
        <div className="upload__progress-container">
            <div style={{width: `${progress}%`}}></div>
        </div>
    )
}

export default Progress
