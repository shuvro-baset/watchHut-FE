import React from 'react';
import { Col, Container, Nav, Navbar, Row, Spinner } from 'react-bootstrap';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import AdminRoute from '../Login/AdminRoute/AdminRoute';
import AddWatch from './AddWatch/AddWatch';
import DashboardHome from './DashboardHome/DashboardHome';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageOrders from './ManageOrders/ManageOrders';
import ManageWatch from './ManageWatch/ManageWatch';
import MyOrders from './MyOrders/MyOrders';
import Pay from './Pay/Pay';
import Review from './Review/Review';
import './Dashboard.css'
import NotFound from './../NotFound/NotFound'

const Dashboard = () => {

    const {user, logout, admin, isLoading} = useAuth()
    
    // set path 
    let { path, url } = useRouteMatch();
    if (isLoading) {
        // showing spinner when reload page.
        return <Col className="d-flex justify-content-center align-items-center my-3" ><Spinner animation="border" variant="primary" /></Col>
    }
    return (
        <Container fluid>
            <Row>
                {/* side navbar */}
                <Col md={2} className="m-0 p-0">
                    <Navbar className="side-nav" expand="lg">
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mt-5 ms-4 d-flex flex-column">
                                <Link className="dash-nav" to={`${url}`}>dashboard</Link>

                                { admin && <Link className="dash-nav" to={`${url}/makeAdmin`}>Make Admin</Link>}
                                { admin && <Link className="dash-nav" to={`${url}/addWatch`}>Add Watch</Link>}
                                { admin && <Link className="dash-nav" to={`${url}/manageWatch`}>Manage Watch</Link>}
                                { admin && <Link className="dash-nav" to={`${url}/manageOrders`}>Manage Orders</Link>}

                                { user && !admin && <Link className="dash-nav" to={`${url}/pay`}>Payment</Link> }
                                { user && !admin && <Link className="dash-nav" to={`${url}/myOrder`}>My Orders</Link> }
                               { user && !admin &&  <Link className="dash-nav" to={`${url}/review`}>Review</Link> }
                                <Link className="dash-nav" onClick={logout} to="/home">Logout</Link>
                            </Nav>

                            </Navbar.Collapse>
                    </Navbar>
                </Col>

                {/* dashboard content */}
                <Col md={10} className="m-0 p-0">
                    <div className='dash-head'>
                        <div className='d-flex justify-content-around align-items-center'>
                            <h3>{user.displayName}</h3>
                            <Link to="/home" className="btn icon-pr3"><i className="fas fa-home"></i></Link>
                        </div>
                    </div>
                    <Switch>
                        <Route exact path={path}>
                            <DashboardHome></DashboardHome>
                        </Route>
                        <AdminRoute path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                        <AdminRoute path={`${path}/addWatch`}>
                            <AddWatch></AddWatch>
                        </AdminRoute>
                        
                        <AdminRoute path={`${path}/manageWatch`}>
                            <ManageWatch></ManageWatch>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageOrders`}>
                            <ManageOrders></ManageOrders>
                        </AdminRoute>
                        
                        <Route path={`${path}/pay`}>
                            <Pay></Pay>
                        </Route>
                        
                        <Route path={`${path}/myOrder`}>
                            <MyOrders></MyOrders>
                        </Route>
                        
                        <Route path={`${path}/review`}>
                            <Review></Review>
                        </Route>
                        <Route path="*">
                            <NotFound></NotFound>
                        </Route>
                        
                    </Switch>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;