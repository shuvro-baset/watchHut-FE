import React, { useEffect, useState } from 'react';
import { Alert, Container, Form, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();
    const [users, setUsers] = useState([])

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleMakeAdmin = e => {
        console.log("makeAdmin hitted ", email);
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            })
        e.preventDefault()
    }
    // getting watches information
    useEffect(() => {
        fetch('http://localhost:5000/all-users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])


    return (
        <Container className="my-5">
            <Row>
                <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="mt-3 mb-5">
                    <h2 className="div-head">Make Admin </h2>
                    <div className="underline"></div>
                </div>
                    <Form onSubmit={handleMakeAdmin} className="login-div">
                        <select onBlur={handleOnBlur}>
                           { users.map(user =>
                            <option value={user.email}> {user.email} </option>
                           )}
                        </select>
                        <br />
                        <button className="btn btn-order my-3" type="submit">submit</button>
                    </Form>
                {success && <Alert severity="success">Made Admin successfully!</Alert>}
            </div>
            </Row>
        </Container>
    );
};

export default MakeAdmin;