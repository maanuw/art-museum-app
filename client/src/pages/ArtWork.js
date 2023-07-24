import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "../components/Navbar";
import CommentSection from "../components/CommentSection";
import Footer from "../components/Footer";
import { artworks } from "../data/artworks";
import "../styles/pages/ArtWork.css";

function Artwork(){
  const [t, i18n] = useTranslation();
  const currentLang = i18n.language;
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search); 

  const paramValue = queryParams.get("id");

  const artwork = artworks.find((artwork) => artwork.id === paramValue);

  return (
    <>
      <Container fluid>
        <Navbar />
        <div className="artwork-container">
          <div className="hero-image">
            <img src={artwork.url} alt="Artwork" />
          </div>
          <div className="content">
            <h1>{currentLang == "en" ? artwork.name : artwork.name_fr}</h1>
            <p>{currentLang == "en" ? artwork.text_en : artwork.text_fr}</p>
          </div>
          <CommentSection />
        </div>
      </Container>
      <Footer/>
    </>
  );
};

export default Artwork;
