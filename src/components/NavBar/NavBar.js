import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './NavBar.css'
import logo from '../../images/Logo.png'

const NavBar = () => {
    // getting user from useAuth
    const { user, logout } = useAuth();

    return (
        <>

        {/* menu part */}
        <Navbar sticky="top" className="navBar navBg" expand="lg">
            <Container fluid>
            <Navbar.Brand> <img src={logo} alt="" /> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <Link className="menu-item" to="/home">Home</Link>
                    <Link className="menu-item" to="/watches">Explore Watch</Link>
                    <Link className="menu-item" to="/about">About</Link>
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