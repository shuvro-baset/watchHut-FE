import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NavBar from '../../components/NavBar/NavBar';
import notFound from '../../images/notfound.png'


const NotFound = () => {
    return (
        // notfound page
        <>
            <Container>
            <Row>
                <Col md={12}>
                    <h2 className="text-center my-5">You are trying to wrong URL pattern. Nothing found in this URL, Please go back to home</h2>
                    <img className="img-fluid" src={notFound} alt="" />
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default NotFound;