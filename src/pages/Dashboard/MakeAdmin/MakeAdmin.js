import React, { useEffect, useState } from 'react';
import { Alert, Col, Container, Form, Row, Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import './MakeAdmin.css';

const MakeAdmin = () => {
    // set email
    const [email, setEmail] = useState('');
    // set success message
    const [success, setSuccess] = useState(false);
    // get token
    const { token } = useAuth();
    // set all users
    const [users, setUsers] = useState([])

    // get input value
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    // make admin 
    const handleMakeAdmin = e => {
        console.log("makeAdmin hitted ", email);
        const user = { email };
        // fetch('http://localhost:5000/users/admin', {
        fetch('https://agile-shelf-31650.herokuapp.com/users/admin', {

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
                    // fetch('http://localhost:5000/all-users')
                    fetch('https://agile-shelf-31650.herokuapp.com/all-users')
                    .then(res => res.json())
                    .then(data => setUsers(data))
                }
            })
        e.preventDefault()
    }
    // getting not admin users
    const notAdmin = users.filter( user => user.role !== 'admin');
    // getting watches information
    useEffect(() => {
        // fetch('http://localhost:5000/all-users')
        fetch('https://agile-shelf-31650.herokuapp.com/all-users')

        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])

    
    return (
        <Container className="my-5">
            <Row>
                <Col md={6}>
                <Table responsive striped bordered hover>
                    <thead>
                        <tr className="table-head">
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user =>
                                <tr 
                                    key={user._id}
                                >
                                    <td>{user.displayName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                </tr>
                        )}
                        
                    </tbody>
                    </Table>
                </Col>
                <Col md={6}>
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <div className="mt-3 mb-5">
                            <h2 className="div-head">Make New Admin </h2>
                            <div className="underline"></div>
                        </div>
                        <Form onSubmit={handleMakeAdmin} className="login-div">
                            <select onBlur={handleOnBlur}>
                            { notAdmin.map(user =>
                                <option key={user._id} value={user.email}> {user.email } </option>
                            )}
                            </select>
                            <br />
                            <button className="btn btn-order my-3" type="submit">submit</button>
                        </Form>
                        {success && <Alert variant="success">Admin made successfully!</Alert>}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default MakeAdmin;