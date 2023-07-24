import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../components/Footer";

import Image2 from "../assets/gallery-tutorial.gif";
import Image3 from "../assets/comment-donate.gif";
import Image4 from "../assets/handshake.png";
import Image5 from "../assets/gallery-2.jpg";
import "../styles/pages/About.css"; 

function About(){
    const [t] = useTranslation();

  return (
    <>
      <Container fluid className="about-container">
        <Navbar />
        <Container>
          <div className="about-header">
            <h1>{t("About.headerh")}</h1>
            <p>{t("About.headerpone")}</p>
            <p>{t("About.headerptwo")}</p>
          </div>
          <div className="hero-img" />

          <Row className="about-section">
            <Col className="about-content">
              <h3>{t("About.sectiononehone")}</h3>
              <p>{t("About.sectiononepone")}</p>
              <h3>{t("About.sectiononehtwo")}</h3>
              <p>{t("About.sectiononeptwo")}</p>
            </Col>
            <Col className="about-image">
              <img src={Image2} alt="Tutorial to use Gallery" />
            </Col>
          </Row>

          <Row className="about-section">
            <Col className="about-image">
              <img
                src={Image3}
                alt="Tutorial to show Comment section and donate section."
              />
            </Col>
            <Col className="about-content">
              <h3>{t("About.sectiontwohone")}</h3>
              <p>{t("About.sectiontwopone")}</p>
              <h3>{t("About.sectiontwohtwo")}</h3>
              <p>{t("About.sectiontwoptwo")}</p>
            </Col>
          </Row>

          <Row className="about-section">
            <Col className="about-content">
              <h3>{t("About.sectionthreehone")}</h3>
              <p>{t("About.sectionthreepone")}</p>
              <h3>{t("About.sectionthreehtwo")}</h3>
              <p>{t("About.sectionthreeptwo")}</p>
            </Col>
            <Col className="about-image">
              <img src={Image4} alt="Handshake Image" />
            </Col>
          </Row>

          <Row className="about-footer">
            <h2>{t("About.footerh")}</h2>
            <p>{t("About.footerpone")}</p>
            <p>{t("About.footerptwo")}</p>
            <p>{t("About.footerpthree")}</p>
            <p>{t("About.footerpfour")}</p>
          </Row>
        </Container>
      </Container>
      <Footer />
    </>
  );
};

export default About;
