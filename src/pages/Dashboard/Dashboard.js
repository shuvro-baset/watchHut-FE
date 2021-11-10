import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Dashboard = () => {
    const {user, logout} = useAuth()
    return (
        <Container fluid>
            <Row>
                {/* side navbar */}
                <Col md={4} className="mt-5">
                <Navbar className="" expand="lg">
                <Container fluid>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="d-flex flex-column">
                        <Link className="" to="/home">Add Watch</Link> <br />
                        <Link className="" to="/home">Make Admin </Link> <br />
                        <Link className="" to="/home">Manage Watch</Link> <br />
                        <Link className="" to="/home">Pay</Link> <br />
                        <Link className="" to="/home">My Orders</Link> <br />
                        <Link className="" to="/home">Review</Link> <br />
                        <Link onClick={logout} to="/home" className="">Logout</Link>
                    </Nav>

                    
                    </Navbar.Collapse>
                </Container>
        </Navbar>
                </Col>

                {/* dashboard content */}
                <Col md={8}>
                    <h3>dashboard content</h3>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;