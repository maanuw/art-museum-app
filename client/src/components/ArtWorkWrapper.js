import React from 'react';
import "../styles/components/ArtWorkWrapper.css";


function ArtWorkWrapper({url, id, onClick}) {
    return (
      <>
        <div className="artwork-image-wrapper" onClick={onClick}>
          <img
            src={url}
            alt={`Artwork ${id}`}
            className="artwork-image"
          />
        </div>
      </>
    );
}

export default ArtWorkWrapper;