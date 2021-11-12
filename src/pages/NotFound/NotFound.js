import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NavBar from '../../components/NavBar/NavBar';
import notFound from '../../images/notfound.png'

const NotFound = () => {
    return (
        <>
            <NavBar></NavBar>
            <Container>
            <Row>
                <Col md={12}>
                    <img className="img-fluid" src={notFound} alt="" />
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default NotFound;