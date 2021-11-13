import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './ManageWatch.css'

const ManageWatch = () => {
    // set watch products
    const [watches, setWatches] = useState([])

    // getting watches information
    useEffect(() => {
        // fetch('http://localhost:5000/watches')
        fetch('https://agile-shelf-31650.herokuapp.com/watches')
        .then(res => res.json())
        .then(data => setWatches(data))
    }, [])

    // DELETE  watch product
    const handleDeleteWatch = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            // const url = `http://localhost:5000/watch/${id}`;
            const url = `https://agile-shelf-31650.herokuapp.com/watch/${id}`;

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingWatches = watches.filter(watch => watch._id !== id);
                        setWatches(remainingWatches);
                    }
                });
        }
    }

    return (
        <Container>
            <div className="mt-3 mb-5">
                    <h2 className="div-head">Manage Watches </h2>
                    <div className="underline"></div>
            </div>

            {
                watches.map(watch => 
                    <Row className="my-5 manage-watch"
                        key={watch._id}>
                        <Col md={4} className="text-center">
                            <img className="img-fluid rounded w-100" src={watch.image} alt="" />
                        </Col>
                        <Col md={4} className="text-center d-flex flex-column justify-content-center align-items-center">
                            <h4>{watch.title}</h4>
                        </Col>
                        <Col md={2} className="text-center d-flex flex-column justify-content-center align-items-center">
                            <p><i className="fas fa-dollar-sign"></i> {watch.price}</p>
                        </Col>
                        <Col md={2} className="text-center d-flex flex-column justify-content-center align-items-center">
                            <button className="btn btn-danger" onClick={() => handleDeleteWatch(watch._id)}>delete</button>
                        </Col>
                    </Row>
                )
                
            }
        </Container>
    );
};

export default ManageWatch;