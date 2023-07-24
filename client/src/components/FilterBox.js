/**
 * @file Component with filter options for gallery.
 * @author Manav Patel <mpate136@uottawa.ca>
 */
import Button from "./Button";
import { useTranslation } from "react-i18next";
import { artistfilter } from "../data/artistfilter";
import { stylefilter } from "../data/stylefilter";
import { categoryfilter } from "../data/categoryfilter";
import "../styles/components/FilterBox.css";

import React, { useState } from "react";

function Filterbox ({ visibility, onSearch }) {
  const [t] = useTranslation();
  const [selectedOptions, setSelectedOptions] = useState({
    artStyles: [],
    categories: [],
    artists: [],
  });

  const handleCheckboxChange = (event, type) => {
    const value = event.target.value;
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [type]: event.target.checked
        ? [...prevSelectedOptions[type], value]
        : prevSelectedOptions[type].filter((item) => item !== value),
    }));
  };

  const handleSubmit = () => {
    onSearch(selectedOptions);
  };

  return (
    <>
      <div
        className="filterbox"
        style={visibility ? { display: "flex" } : { display: "none" }}
      >
        <div className="column">
          <h3>{t('Filterbox.styles')}</h3>
          <ul>
            {stylefilter.map((style) => (
              <li key={style.name}>
                <label>
                  <input
                    type="checkbox"
                    value={style.name}
                    checked={selectedOptions.artStyles.includes(style.name)}
                    onChange={(e) => handleCheckboxChange(e, "artStyles")}
                  />
                  {style.name}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className="column">
          <h3>{t('Filterbox.categories')}</h3>
          <ul>
            {categoryfilter.map((category) => (
              <li key={category.name}>
                <label>
                  <input
                    type="checkbox"
                    value={category.name}
                    checked={selectedOptions.categories.includes(category.name)}
                    onChange={(e) => handleCheckboxChange(e, "categories")}
                  />
                  {category.name}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className="column">
          <h3>{t('Filterbox.artists')}</h3>
          <ul>
            {artistfilter.map((artist) => (
              <li key={artist.name}>
                <label>
                  <input
                    type="checkbox"
                    value={artist.name}
                    checked={selectedOptions.artists.includes(artist.name)}
                    onChange={(e) => handleCheckboxChange(e, "artists")}
                  />
                  {artist.name}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/*<div className="search-button">
        <Button text="Search" className="default-btn" onClick={handleSubmit} />
            </div>*/}
      <Button
        text={t('Button.search')}
        className="default-btn"
        onClick={handleSubmit}
        style={visibility ? { "margin-right": "1.5rem" } : { display: "none" }}
      />
    </>
  );
};

export default Filterbox;