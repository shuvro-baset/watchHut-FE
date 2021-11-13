import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Subscribe.css'
const Subscribe = () => {
    return (

        // subscribe part
        <Container fluid>
            <Row className="subscribe-div">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <p>To Get The New Updates & Offer</p>
                    <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
                    <div>
                        <input type="text" placeholder="Enter Your Email" />
                        <button className="btn btn-order mx-2">Subscribe</button>
                    </div>
                </div>
            </Row>
        </Container>
    );
};

export default Subscribe;