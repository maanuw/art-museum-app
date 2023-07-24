/**
 * @file React frontend for the Art Museum App.
 * @author Manav Patel <mpate136@uottawa.ca>
 */

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useTranslation, Translation, I18nextProvider } from 'react-i18next';

import Home from "./pages/Home";
import ArtGallery from "./pages/ArtGallery";
import ArtWork from "./pages/ArtWork";
import Donate from "./pages/Donate";
import Contact from './pages/Contact';
import About from './pages/About';
import i18n from "./translations/i18n";

function App() {
  return (
    <BrowserRouter basename="/">
      <I18nextProvider i18n={i18n}>
        <main>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/gallery" Component={ArtGallery} />
            <Route path="/artwork" Component={ArtWork} />
            <Route path="donate" Component={Donate} />
            <Route path="/about" Component={About} />
            <Route path="/contact-us" Component={Contact} />
          </Routes>
        </main>
      </I18nextProvider>
    </BrowserRouter>
  );
}

export default App;
