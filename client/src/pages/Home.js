/**
 * @file The landing page.
 * @author Manav Patel <mpate136@uottawa.ca>
 */

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from '../components/Button';
import Navbar from '../components/Navbar';

import '../styles/pages/Home.css';


function Home() {
    return (
        <Container fluid>
            <Row className='inner-container'>
                <Col className="intro-txt">
                    <Navbar/>
                    {/*}
                    <span className='learn-more'>
                        <Button text={"Gallery"} className={'nav-btn'}/>
                    </span>
                    <span className='learn-more-2'>
                        <Button text={"About"} className={'nav-btn'}/>
                    </span>
                    <span className='learn-more-2'>
                        <Button text={"Donate"} className={'nav-btn'}/>
    </span>*/}
                    <h1 className='title'>Art With You</h1>
                    <p>Welcome to our Non-profit Virtual Museum, a digital haven for art enthusiasts. Immerse yourself in the captivating world of art, where history, creativity, and technical mastery intertwine. Explore a curated collection of artworks, from classical masterpieces to contemporary expressions. Gain insights into their historical significance, cultural context, and technical intricacies. Engage in conversations and share perspectives in our vibrant comment section, fostering a global community of art appreciation. Your contributions support our mission to preserve and showcase these extraordinary works, making art accessible to all. Join us today and let the power of art inspire your journey of exploration and self-discovery.</p>
                    <span className='learn-more'>
                        <Button text={"Learn More"} className={"default-btn"}/>
                    </span>
                </Col>
                <Col xs={8} className="Hero"></Col>
            </Row>
        </Container>
    );
}

export default Home;
