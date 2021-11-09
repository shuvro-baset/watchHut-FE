import React, { useState } from 'react';
import { Container, Form, Row } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

const Register = () => {
    const [registerData, setRegisterData] = useState({});
    const history = useHistory();
    // const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = { ...registerData };
        newRegisterData[field] = value;
        setRegisterData(newRegisterData);
    }

    return (
        <Container>
            <Row className="my-5 text-center">
                <h2 className="my-5">Register</h2>
                <Form>
                    <input onBlur={handleOnBlur} name="name" type="text" placeholder="name" /> <br />
                    <input onBlur={handleOnBlur} name="email" type="text" placeholder="email" /> <br />
                    <input onBlur={handleOnBlur} name="password" type="text" placeholder="password" /> <br />
                    <button type="submit">Register</button>
                </Form>
                <p>already have account? <Link to="/login" className="btn banner-btn">login</Link> here </p>

            </Row>
        </Container>
    );
};

export default Register;