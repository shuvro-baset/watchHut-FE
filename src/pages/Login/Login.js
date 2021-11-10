import React, { useState } from 'react';
import { Container, Form, Row } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();
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
            <Row className="my-5 text-center">
                <h2 className="my-5">Login</h2>
                <Form onSubmit={handleLogin}>
                    <input onChange={handleOnChange} name="email" type="text" placeholder="email" /> <br />
                    <input onChange={handleOnChange} name="password" type="text" placeholder="password" /> <br />
                    <button type="btn">login</button> <br />
                    <button onClick={handleGoogleSignIn}>Google SignIn </button>
                </Form>
                <p>Dont have account? <Link to="/register" className="btn banner-btn">Register</Link> here </p>
            </Row>
        </Container>
    );
};

export default Login;