import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './NavBar.css'
const NavBar = () => {
    const { user, isLoading, authError, logout } = useAuth();

    return (

        <>
            <Container>
            <Row className="d-flex justify-content-between align-items-center">
                    <Col md={4} className="logo text-center">
                        <img className="img-fluid" src="#" alt="" />
                    </Col>
                    <Col md={4} className="search-bar text-center">
                        <input type="text"/>
                    </Col>
                    <Col md={4} className="extra-icon text-center mb-2">
                        <i className="fas fa-heart mx-2"></i>
                        <i className="fas fa-route mx-2"></i>
                        <i className="fas fa-plane-departure mx-2"></i>
                        <i className="fas fa-map-marked mx-2"></i>
                        <i className="far fa-question-circle mx-2"></i>
                    </Col>
            </Row>
        </Container>

        {/* menu part */}
        <Navbar sticky="top" className="navBar navBg" expand="lg">
            <Container fluid>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <Link className="menu-item" to="/home">Home</Link>
                    <Link className="menu-item" to="/about">About</Link>
                    <Link className="menu-item" to="/watches">WatchHut</Link>

                </Nav>

                <Nav className="mr-auto">
                {/* showing logout login button and user name  */}
                    { !user?.email && 
                        <NavLink className="menu-item" to="/login"> <i className="fas fa-sign-in-alt"></i> Login</NavLink>
                    }
                    { user?.email &&
                        <NavLink className="menu-item" to="/dashboard">  Dashboard</NavLink>
                    }
                    { user?.email &&
                        <small className="menu-item"><i className="fas fa-user"></i> {user.displayName || user.name} </small>
                    }
                    { user?.email &&
                        <NavLink className="menu-item" onClick={logout} to="/home"><i className="fas fa-sign-out-alt"></i> LogOut</NavLink>
                    }
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
    );
};

export default NavBar;