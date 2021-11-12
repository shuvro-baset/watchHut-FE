import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import './ManageOrders.css'


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
                <h2>Manage All Orders. </h2>

            </Row>
            <Row className="my-5 my-order">
            <Table responsive>
                <thead>
                    <tr className="manage-order-head text-white rounded">
                        <th>Thumbnail</th>
                        <th>UserName</th>
                        <th>Mobile</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                    <tbody>

                    
                    {orders.map(order => 
                        <tr
                            key={order._id}>
                            <td><img className="img-fluid rounded w-100" src={order.watch.image} alt="" /></td>
                            <td>{order.userName}</td>
                            <td>{order.mobile}</td>
                            <td>{order.watch.title}</td>
                            <td><i className="fas fa-dollar-sign"></i> {order.watch.price} </td>
                            <td><button className="btn btn-watch" onClick={() => handleStatus(order._id)}>{order.status === "Shipped" ? "Shipped" : order.status}</button></td>
                            <td><button className="btn btn-danger" onClick={() => handleDeleteOrder(order._id)}>delete</button></td>

                        </tr>                    
                    )
                    
                    }
                    </tbody>
                    
                </Table> 
            </Row>
            {/* showing order data */}
            
            {/* {
                orders.map(order => 
                    <Row className="my-5 my-order"
                        key={order._id}>
                        <Col md={3} className="text-center">
                            <img className="img-fluid rounded" src={order.watch.image} alt="" />
                        </Col>
                        <Col md={3} className="text-center d-flex flex-column justify-content-center align-items-center">
                            <h4>{order.watch.title}</h4>
                        </Col>
                        <Col md={2} className="text-center d-flex flex-column justify-content-center align-items-center">
                            <p>{order.watch.price} <i className="fas fa-dollar-sign"></i></p>
                        </Col>
                        <Col md={2} className="text-center d-flex flex-column justify-content-center align-items-center">
                        <button className="btn btn-watch" onClick={() => handleStatus(order._id)}>{order.status === "Shipped" ? "Shipped" : order.status}</button>
                        </Col>
                        <Col md={2} className="text-center d-flex flex-column justify-content-center align-items-center">
                            <button className="btn btn-danger" onClick={() => handleDeleteOrder(order._id)}>delete</button>
                        </Col>
                    </Row>
                )
            } */}
        </Container>
    );
};

export default ManageOrders;