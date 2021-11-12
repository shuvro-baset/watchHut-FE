import React, { useState } from 'react';
import { Alert, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import register from '../../images/signup.png'


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
            <h2>Welcome To Sp WatchHut</h2>
                <Col md={6}>
                    <div className="shadow py-3 m-5 rounded login-div text-center">
                        <h2 className="my-3">Register</h2>
                        <Form onSubmit={handleRegister}>
                            <input onBlur={handleOnBlur} name="name" type="text" placeholder="name" /> <br />
                            <input onBlur={handleOnBlur} name="email" type="text" placeholder="email" /> <br />
                            <input onBlur={handleOnBlur} name="password" type="password" placeholder="password" /> <br />
                            <button className="btn btn-order my-2" type="submit">Register</button>
                        </Form>
                        <p>already have account? <Link to="/login">login</Link> </p>
                        
                        {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                        <p>Back To Home <Link to="/home" className="btn icon-pr"><i className="fas fa-home"></i></Link></p>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="d-flex justify-content-center align-items-center">
                        <img className="img-fluid" src={register} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;