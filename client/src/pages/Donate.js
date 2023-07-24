import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Container from "react-bootstrap/esm/Container";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/pages/Donate.css";

function Donate(){
  const [t] = useTranslation();
  const [amount, setAmount] = useState(10);
  const handleAmountChange = (e) => {
    setAmount(Number(e.target.value));
  };

  const alertMessage = `${t("Donate.alert") + amount}`;
  const handleDonate = () => {
    alert(alertMessage);
  };

  return (
    <>
    <Navbar/>
      <Container fluid className="body-container">
        <div className="donate-container">
          <h2>{t('Donate.title')}</h2>
          <p>
            {t('Donate.text')}
          </p>
          <div className="donation-options">
            <label>
              <input
                type="radio"
                name="donationAmount"
                value={10}
                checked={amount === 10}
                onChange={handleAmountChange}
              />
              $10
            </label>
            <label>
              <input
                type="radio"
                name="donationAmount"
                value={25}
                checked={amount === 25}
                onChange={handleAmountChange}
              />
              $25
            </label>
            <label>
              <input
                type="radio"
                name="donationAmount"
                value={50}
                checked={amount === 50}
                onChange={handleAmountChange}
              />
              $50
            </label>
          </div>
          <div className="payment-form">
            <button onClick={handleDonate}>{t('Donate.donate')} ${amount}</button>
          </div>
        </div>
      </Container>
      <Footer/>
    </>
  );
};

export default Donate;