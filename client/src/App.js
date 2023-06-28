/**
 * @file React frontend for the Art Museum App.
 * @author Manav Patel <mpate136@uottawa.ca>
 */

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useTranslation, Translation, I18nextProvider } from 'react-i18next';

import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter basename="/">
      <I18nextProvider>
        <main>
          <Home></Home>
        </main>
      </I18nextProvider>
    </BrowserRouter>
  );
}

export default App;
