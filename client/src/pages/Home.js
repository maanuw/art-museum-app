/**
 * @file The landing page.
 * @author Manav Patel <mpate136@uottawa.ca>
 */

import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from '../components/Button';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";

import '../styles/pages/Home.css';


function Home() {
    const navigate = useNavigate();
    const [t] = useTranslation();

    return (
        <>
      <Container fluid>
        <Navbar />
        <Row className="inner-container">
          <Col className="intro-txt">
            <h1 className="title">Art With You</h1>
            <p>{t("Home.intro")}</p>
            <span className="learn-more">
              <Button text={t('Button.learn')} className={"default-btn"} onClick={() => navigate("/about")}/>
            </span>
          </Col>
          <Col xs={8} className="Hero"></Col>
        </Row>
      </Container>
      <Footer/>
      </>
    );
}

export default Home;
