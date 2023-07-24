/**
 * @file Component to display gallery Images.
 * @author Manav Patel <mpate136@uottawa.ca>
 */

import { useNavigate } from "react-router-dom";
import ArtWorkWrapper from "./ArtWorkWrapper";
import { artworks } from "../data/artworks";
import "../styles/components/GalleryView.css";

function GalleryView({artists, styles, categories}) {
  const navigate = useNavigate();
  let displayArtworks = artworks;
  const filterArtworks = (artwork) => {
      return ( 
        artists.includes(artwork.artist) ||
        styles.includes(artwork.style) ||
        categories.includes(artwork.category));
  };

  const filteredArtworks = artworks.filter(filterArtworks);

  if (artists.length !== 0 || styles.length !== 0 || categories.length || 0){
    displayArtworks = filteredArtworks;
  }

  return (
    <div className="gallery-view">
      {displayArtworks.map((artwork) => (
        <div key={artwork.id} className="artwork-item">
            <ArtWorkWrapper url={artwork.url} id={artwork.id} onClick={() => navigate(`/artwork?id=${artwork.id}`)}/>
          <div className="artwork-info">
            <p>Style: {artwork.style}</p>
            <p>Artist: {artwork.artist}</p>
            <p>Category: {artwork.category}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GalleryView;
