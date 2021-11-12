import React, { useState } from 'react';
import { Alert, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import login from '../../images/login.png'
import './Login.css'

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, authError } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleLogin = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    return (
        <Container>
            <Row className="my-5">
                <h2>Welcome To Sp WatchHut</h2>
                <Col md={6}>
                    <img className="img-fluid" src={login} alt="" />
                </Col>
                <Col md={6} >
                    <div className="shadow py-3 m-5 rounded login-div text-center">
                        <h2 className="my-3">Login</h2>
                        <Form onSubmit={handleLogin}>
                            <input onChange={handleOnChange} name="email" type="text" placeholder="email" /> <br />
                            <input onChange={handleOnChange} name="password" type="password" placeholder="password" /> <br />
                            <button className="btn btn-order my-2" type="submit">login</button> <br />
                        </Form>
                        <button className="btn btn-primary"onClick={handleGoogleSignIn}>Google SignIn </button>

                        <p className="my-2">Dont have account? <Link to="/register">Register</Link></p>
                        <p>Back To Home <Link to="/home" className="btn icon-pr"><i className="fas fa-home"></i></Link></p>
                        {user?.email && <Alert severity="success">Login successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;