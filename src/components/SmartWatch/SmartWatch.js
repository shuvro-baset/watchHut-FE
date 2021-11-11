import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SmartWatch.css'


const SmartWatch = (props) => {
    const {_id, title, description, image, price} = props.watch;
    return (
        <>
            <Col md={6} className="my-3">
                <div className="d-flex">
                    <div className="w-50 first-div">
                        <img className='img-fluid rounded' src={image} alt="" />
                    </div>
                    <div className="w-50 ms-3">
                        <h4>{title}</h4>
                        <p>{description.slice(0,80)}</p>
                        <p>Price: {price}</p>
                        <Link to={`/watch/${_id}`}><button className="btn btn-booking">Order Now</button></Link>
                    </div>
                </div>
            </Col>
        </>
    );
};

export default SmartWatch;