import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const ManageOrders = () => {
    // user data from useAuth
    const {user} = useAuth()
    // set state for myOrders
    const [orders, setOrders] = useState([])

    // getting  order data
    useEffect(() => {
        fetch('http://localhost:5000/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])

     // DELETE  booking order
     const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingOrders = orders.filter(orders => orders._id !== id);
                        setOrders(remainingOrders);
                    }
                });
        }
    }

    // update status
    const handleStatus = id => {
        console.log("I am hitting");
        const updateStatus = {
                status: 'Shipped'
        }

        const uri = `http://localhost:5000/update-status/${id}`;
        fetch(uri, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateStatus)
        })
        .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Update Successful');
                    fetch('http://localhost:5000/orders')
                        .then(res => res.json())
                        .then(data => setOrders(data))
                }
            })
        
    }

    return (
        <Container className="my-5">

            <Row>
                <h2>Welcome to SP WatchHut, <span className="username">{user.displayName}</span> </h2>

            </Row>
            
            {/* showing order data */}
            
            {
                orders.map(order => 
                    <Row className="my-5"
                        key={order._id}>
                        <Col md={2} className="text-center">
                            <img className="img-fluid rounded" src={order.watch.image} alt="" />
                        </Col>
                        <Col md={2} className="text-center d-flex flex-column justify-content-center align-items-center">
                            <h4>{order.watch.name}</h4>
                        </Col>
                        <Col md={2} className="text-center d-flex flex-column justify-content-center align-items-center">
                            <p>{order.watch.price}</p>
                        </Col>
                        <Col md={2} className="text-center d-flex flex-column justify-content-center align-items-center">
                        <button className="btn btn-warning" onClick={() => handleStatus(order._id)}>{order.status === "Shipped" ? "Shipped" : order.status}</button>
                        </Col>
                        <Col md={2} className="text-center d-flex flex-column justify-content-center align-items-center">
                            <button className="btn btn-danger" onClick={() => handleDeleteOrder(order._id)}>delete</button>
                        </Col>
                    </Row>
                )
            }
        </Container>
    );
};

export default ManageOrders;