import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import Container from "react-bootstrap/esm/Container";
import Footer from "../components/Footer";
import "../styles/pages/Contact.css";

function Contact(){
  const [t] = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t('Contact.alert'));
    // Clear form fields after submission
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <Container fluid>
        <Navbar />
      </Container>

      <Container fluid className="body-container">
        <div className="contact-container">
          <h2>{t("Contact.contact")}</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <label>{t("Contact.name")}:</label>
              <input type="text" value={name} onChange={handleNameChange} />
            </div>
            <div className="form-field">
              <label>{t("Contact.email")}:</label>
              <input type="email" value={email} onChange={handleEmailChange} />
            </div>
            <div className="form-field">
              <label>Message:</label>
              <textarea
                rows="4"
                value={message}
                onChange={handleMessageChange}
              />
            </div>
            <button type="submit">{t('Contact.send')}</button>
          </form>
        </div>
      </Container>
      <Footer/>
    </>
  );
};

export default Contact;
