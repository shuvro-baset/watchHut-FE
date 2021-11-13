import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css'
const Banner = () => {
    return (
        // banner part 
        <Container fluid>
            <Row className='banner-div d-flex justify-content-center'>
                <Col md={6}  className="d-flex flex-column justify-content-center align-items-start">
                    <h2 className="my-3">Be smart with <br /> <span className='brand-name'>SP-WatchHut</span> </h2>
                    <button className="btn btn-order">Order Now</button>
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;