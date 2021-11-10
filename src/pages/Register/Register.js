import React, { useState } from 'react';
import { Alert, Container, Form, Row } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const [registerData, setRegisterData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = { ...registerData };
        newRegisterData[field] = value;
        setRegisterData(newRegisterData);
    }

    const handleRegister = e => {
        
        registerUser(registerData.email, registerData.password, registerData.name, history);
        e.preventDefault();
    }

    return (
        <Container>
            <Row className="my-5 text-center">
                <h2 className="my-5">Register</h2>
                <Form onSubmit={handleRegister}>
                    <input onBlur={handleOnBlur} name="name" type="text" placeholder="name" /> <br />
                    <input onBlur={handleOnBlur} name="email" type="text" placeholder="email" /> <br />
                    <input onBlur={handleOnBlur} name="password" type="text" placeholder="password" /> <br />
                    <button type="submit">Register</button>
                </Form>
                <p>already have account? <Link to="/login" className="btn banner-btn">login</Link> here </p>
                
                {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                {authError && <Alert severity="error">{authError}</Alert>}
            </Row>
        </Container>
    );
};

export default Register;