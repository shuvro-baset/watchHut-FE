import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import './MyOrders.css'
const MyOrders = () => {

    // user data from useAuth
    const {user} = useAuth()
    // set state for myOrders
    const [orders, setOrders] = useState([])

    // getting  orders data
    useEffect(() => {
        // fetch('http://localhost:5000/orders')
        fetch('https://agile-shelf-31650.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])
    // filtering my order data
    const myOrders = orders.filter(order => order.email === user.email)

     // DELETE order
     const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            // const url = `http://localhost:5000/orders/${id}`;
            const url = `https://agile-shelf-31650.herokuapp.com/orders/${id}`;

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingOrders = myOrders.filter(orders => orders._id !== id);
                        setOrders(remainingOrders);
                    }
                });
        }
    }
    return (
        <Container className="my-5">

            <Row>
                <div className="mt-3 mb-5">
                    <h2 className="div-head">My Orders</h2>
                    <div className="underline"></div>
                </div>
                <div>
                    { myOrders.length === 0 && <h6>You don't have any orders yet.</h6> }
                </div>
            </Row>
            
            {/* showing order data */}
            
            {
                myOrders.map(order => 
                    <Row className="my-5 my-order shadow py-3 rounded"
                        key={order._id}>
                        <Col md={3} className="text-center">
                            <img className="img-fluid rounded" src={order.watch.image} alt="" />
                        </Col>
                        <Col md={3} className="text-center d-flex flex-column justify-content-center align-items-center">
                            <h4>{order.watch.title}</h4>
                        </Col>
                        <Col md={2} className="text-center d-flex flex-column justify-content-center align-items-center">
                            <p><i className="fas fa-dollar-sign"></i> {order.watch.price} </p>
                        </Col>
                        <Col md={2} className="text-center d-flex flex-column justify-content-center align-items-center">
                            <p>{order.status}</p>
                        </Col>
                        <Col md={2} className="text-center d-flex flex-column justify-content-center align-items-center">
                        {
                            order.status === 'pending' && <button className="btn btn-danger" onClick={() => handleDeleteOrder(order._id)}>delete</button>
                        }
                        {
                            order.status === 'Shipped' && <button disabled className="btn btn-danger" onClick={() => handleDeleteOrder(order._id)}>delete</button>
                        }
                        </Col>
                    </Row>
                )
            }
        </Container>
    );
};

export default MyOrders;