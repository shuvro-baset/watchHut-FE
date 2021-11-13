import React, { useEffect, useState } from 'react';
import {  Container, Row, Table } from 'react-bootstrap';
import './ManageOrders.css'


const ManageOrders = () => {
    // set state for all Orders
    const [orders, setOrders] = useState([])

    // getting  order data
    useEffect(() => {
        // fetch('http://localhost:5000/orders')
        fetch('https://agile-shelf-31650.herokuapp.com/orders')

        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])

     // DELETE  order
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
                        const remainingOrders = orders.filter(orders => orders._id !== id);
                        setOrders(remainingOrders);
                    }
                });
        }
    }

    // update order status
    const handleStatus = id => {
        console.log("I am hitting");
        const updateStatus = {
                status: 'Shipped'
        }

        // const uri = `http://localhost:5000/update-status/${id}`;
        const uri = `https://agile-shelf-31650.herokuapp.com/update-status/${id}`;

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
                    // fetch('http://localhost:5000/orders')
                    fetch('https://agile-shelf-31650.herokuapp.com/orders')

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
            
        </Container>
    );
};

export default ManageOrders;