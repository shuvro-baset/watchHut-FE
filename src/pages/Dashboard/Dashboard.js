import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import MyOrders from '../MyOrders/MyOrders';
import AddWatch from './AddWatch/AddWatch';
import DashboardHome from './DashboardHome/DashboardHome';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageWatch from './ManageWatch/ManageWatch';
import Pay from './Pay/Pay';
import Review from './Review/Review';



const Dashboard = () => {
    const {user, logout, admin} = useAuth()
    let { path, url } = useRouteMatch();
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
                        <Link to={`${url}`}>dashboard</Link>

                    { admin && <Link to={`${url}/makeAdmin`}>Make Admin</Link>}
                        
                    { admin && <Link to={`${url}/addWatch`}>Add Watch</Link>}
                    { admin && <Link to={`${url}/manageWatch`}>Manage Watch</Link>}
                        <Link to={`${url}/pay`}>Pay</Link> <br />
                        <Link to={`${url}/myOrder`}>My Orders</Link> <br />
                        <Link to={`${url}/review`}>Review</Link> <br />
                        <Link onClick={logout} to="/home" className="">Logout</Link>
                    </Nav>

                    
                    </Navbar.Collapse>
                </Container>
        </Navbar>
                </Col>

                {/* dashboard content */}
                <Col md={8}>
                    <h3>dashboard</h3>
                    <Switch>
                        <Route exact path={path}>
                            <DashboardHome></DashboardHome>
                        </Route>
                        <Route path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </Route>
                        <Route path={`${path}/addWatch`}>
                            <AddWatch></AddWatch>
                        </Route>
                        
                        <Route path={`${path}/manageWatch`}>
                            <ManageWatch></ManageWatch>
                        </Route>
                        
                        <Route path={`${path}/pay`}>
                            <Pay></Pay>
                        </Route>
                        
                        <Route path={`${path}/myOrder`}>
                            <MyOrders></MyOrders>
                        </Route>
                        
                        <Route path={`${path}/review`}>
                            <Review></Review>
                        </Route>
                        
                    </Switch>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;