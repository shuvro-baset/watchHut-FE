import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SmartWatch.css'


const SmartWatch = (props) => {

    // destructuring watch products property
    const {_id, title, description, image, price} = props.watch;

    
    return (
        <>
            <Col md={4} className="my-3">
                    <div className="shadow p-3 rounded">
                        <div className="first-div">
                            <img className='img-fluid rounded w-100' src={image} alt="" />
                        </div>
                        <div className="my-3 second-div">
                            <h4>{title}</h4>
                            <p>{description.slice(0,80)}</p>
                            <h6>Price: <i className="fas fa-dollar-sign"></i> {price} </h6>

                            <div className="d-flex justify-content-between align-items-center my-3">
                                <Link to={`/watch/${_id}`}><button className="btn btn-order">Order Now <i className="fas fa-cart-plus"></i></button></Link>
                                <div>
                                    <i className="icon-pr mx-2 fas fa-heart"></i>
                                    <i className="icon-pr mx-2 fas fa-comments"></i>
                                    <i className="icon-pr mx-2 fas fa-thumbs-up"></i>
                                </div>
                            </div>
                            
                        </div>
                    </div>
            </Col>
        </>
    );
};

export default SmartWatch;