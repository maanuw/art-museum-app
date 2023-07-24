/**
 * @file Gallery page component.
 * @author Manav Patel <mpate136@uottawa.ca>
 */

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Container from "react-bootstrap/Container";
import Navbar from "../components/Navbar";
import GalleryView from "../components/GalleryView";
import FilterBox from "../components/FilterBox";
import Row from "react-bootstrap/Row";
import Button from "../components/Button";
import Footer from "../components/Footer";

import "../styles/pages/ArtGallery.css";

function ArtGallery() {
  const [showFilterBox, setShowFilterBox] = useState(false);
  const [categoriesFilter, setCategoriesFilter] = useState([]);
  const [stylesFilter, setStylesFilter] = useState([]);
  const [artistsFilter, setArtistsFilter] = useState([]);
  const [t] = useTranslation();


  const onToggle = () => {
    setShowFilterBox(!showFilterBox);
  }

  const onSearch = (selectedOptions) => {
    if (
      selectedOptions.artists.length === 0 &&
      selectedOptions.categories.length === 0 &&
      selectedOptions.artStyles.length === 0
    ) {
      // Change state of filters to empty arrays.
          setCategoriesFilter([]);
          setArtistsFilter([]);
          setStylesFilter([]);
    }
    // Update state of filter arrays.
    setCategoriesFilter(selectedOptions.categories);
    setArtistsFilter(selectedOptions.artists);
    setStylesFilter(selectedOptions.artStyles);
  }
  return (
    <>
      <Container fluid>
        <Navbar />
        <Container className="filter-container">
          <FilterBox
            onSearch={onSearch}
            visibility={showFilterBox ? true : false}
          />
          <Button
            text={showFilterBox ? t("Button.close") : t("Button.filter")}
            className={"default-btn"}
            onClick={onToggle}
          />
        </Container>
        <Container className="inner-container">
          <GalleryView
            artists={artistsFilter}
            styles={stylesFilter}
            categories={categoriesFilter}
          />
        </Container>
      </Container>
      <Footer/>
    </>
  );
}

export default ArtGallery;
