import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import payment from '../../../images/payment.png'
const Pay = () => {
    return (
        <Container>
            <Row className="my-5">
                <Col md={6} className="d-flex justify-content-center align-items-center">
                    <h2> Payment method <br /> coming soon........  </h2>
                </Col>
                <Col md={6}>
                    <div className="d-flex justify-content-center align-items-center">
                        <img className="img-fluid rounded" src={payment} alt="" />
                    </div>
                </Col>

            </Row>
        </Container>
    );
};

export default Pay;