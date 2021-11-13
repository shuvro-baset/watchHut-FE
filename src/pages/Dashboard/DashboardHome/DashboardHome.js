import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Dashboard.css'
const DashboardHome = () => {
    return (
        <Container>
            <Row className="my-5">
                <Col md={6} className="d-flex justify-content-center align-items-center">
                    <h2>Welcome to <br /> <span className="welcome-text">Sp WatchHut.</span> </h2>
                </Col>
                <Col md={6}>
                    <div className="welcome-div d-flex justify-content-center align-items-center">
                        <p>Manage Your Orders <br /> and Reviews  <br /> from here...</p>
                    </div>
                </Col>

            </Row>
        </Container>
    );
};

export default DashboardHome;