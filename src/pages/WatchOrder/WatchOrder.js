import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const WatchOrder = () => {
    // user data
    const {user} = useAuth();
    // getting watch id 
    const {watchId} = useParams();
    // set state for watch
    const [watch, setWatch] = useState([])

     // use location state 
     const location = useLocation();
     const history = useHistory();
     // set redirect url
     const redirect_uri = location.state?.from || '/dashboard/myOrder';

     // form data
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    // getting single watch info
    useEffect(() => {
        const uri = `http://localhost:5000/watch/${watchId}`
        fetch(uri)
        .then(res => res.json())
        .then(data => setWatch(data))
    }, [watchId])

    const onSubmit = data => {
        data.userName = user.displayName;
        data.email = user.email;
        data.watch = watch;
        data.status = 'pending';

    // watch order
    axios.post(`http://localhost:5000/order-watch`, data)
            .then(response => {
                console.log("order watch: ", response);
                if (response.data.acknowledged) {
                    alert('added successfully');
                    reset();
                    history.push(redirect_uri);
                }
            })  
}


    return (
        <Container>
            <Row className="my-5">
                <Col md={6}>
                    <h1 className="text-center my-3 info-head">Watch Information</h1>
                    <img className="img-fluid rounded" src={watch.image} alt="" />
                    <h3 className="my-3">{watch.title}</h3>
                    <p>{watch.description}</p>
                    <p>Price: &#2547;{watch.price}</p>
                </Col>
                <Col md={6}>
                    <h1 className="text-center my-3 info-head">watch Order Information</h1>
                    
                    <div className="ms-5">
                        <h4 className="mb-3 order-head">User Information</h4>
                        <hr />
                        <p>User Name: {user.displayName}</p>
                        <p>User Email: {user.email}</p>

                    </div>
                    <div className="ms-5">
                        <form onSubmit={handleSubmit(onSubmit)} className="form-info">
                            <h4 className="mb-3 order-head">Billing Information</h4>   
                                <hr />                     
                                <label>Address</label> <br />
                                <input  {...register("address", { required: true })}/> <br />
                                {errors.address && <span>This field is required</span>}

                                <label>Phone Number</label> <br />
                                <input type="number" {...register("mobile", { required: true, minLength:6, maxLength:11})}/> <br />
                                {errors.mobile && <span>This field is required</span>}


                                <label>Message</label> <br />
                                <textarea {...register("message")} rows="3" /> <br />
                                {errors.message && <span>This field is required</span>}

                                <button type="submit" className="btn btn-booking">Confirm Order</button>
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default WatchOrder;