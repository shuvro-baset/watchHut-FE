import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const ManageWatch = () => {
    const [watches, setWatches] = useState([])

    // getting watches information
    useEffect(() => {
        fetch('http://localhost:5000/watches')
        .then(res => res.json())
        .then(data => setWatches(data))
    }, [])

    // DELETE  watch product
    const handleDeleteWatch = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/watch/${id}`;
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
            <h3>Manage all watchers from here.</h3>

            {
                watches.map(watch => 
                    <Row className="my-5"
                        key={watch._id}>
                        <Col md={3} className="text-center">
                            <img className="img-fluid rounded" src={watch.image} alt="" />
                        </Col>
                        <Col md={3} className="text-center d-flex flex-column justify-content-center align-items-center">
                            <h4>{watch.title}</h4>
                        </Col>
                        <Col md={3} className="text-center d-flex flex-column justify-content-center align-items-center">
                            <p>{watch.price}</p>
                        </Col>
                        <Col md={3} className="text-center d-flex flex-column justify-content-center align-items-center">
                            <button className="btn btn-danger" onClick={() => handleDeleteWatch(watch._id)}>delete</button>
                        </Col>
                    </Row>
                )
            }
        </Container>
    );
};

export default ManageWatch;