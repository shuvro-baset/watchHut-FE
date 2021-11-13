import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Features = () => {
    return (

        // feature part 
        <Container>
            <Row className="my-5 features">
                <Col md={4}>
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <i className="icon-features fas fa-shipping-fast my-3"></i>
                        <h4>Fast Delivery Services</h4>
                        <p>Delivery withing 2days </p>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <i className="icon-features fas fa-dollar-sign my-3"></i>
                        <h4>Money Back Guarantee </h4>
                        <p>Send Within 15 days </p>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <i className="icon-features far fa-clock my-3"></i>
                        <h4>24/7 Customer Services</h4>
                        <p>Call Us 24/7 @ +88-01673232323 </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Features;