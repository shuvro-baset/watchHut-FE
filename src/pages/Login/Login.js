import React, { useState } from 'react';
import { Alert, Container, Form, Row } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

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
            <Row className="my-5 text-center">
                <h2 className="my-5">Login</h2>
                <Form onSubmit={handleLogin}>
                    <input onChange={handleOnChange} name="email" type="text" placeholder="email" /> <br />
                    <input onChange={handleOnChange} name="password" type="text" placeholder="password" /> <br />
                    <button type="btn">login</button> <br />
                </Form>
                <button onClick={handleGoogleSignIn}>Google SignIn </button>

                <p>Dont have account? <Link to="/register" className="btn banner-btn">Register</Link> here </p>
                {user?.email && <Alert severity="success">Login successfully!</Alert>}
                {authError && <Alert severity="error">{authError}</Alert>}
            </Row>
        </Container>
    );
};

export default Login;