import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation, useParams } from 'react-router';
import NavBar from '../../components/NavBar/NavBar';
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
        // const uri = `http://localhost:5000/watch/${watchId}`
        const uri = `https://agile-shelf-31650.herokuapp.com/watch/${watchId}`

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
    // axios.post(`http://localhost:5000/order-watch`, data)
        axios.post(`https://agile-shelf-31650.herokuapp.com/order-watch`, data)
            .then(response => {
                console.log("order watch: ", response);
                if (response.data.acknowledged) {
                    alert('Order added successfully');
                    reset();
                    history.push(redirect_uri);
                }
            })  
}


    return (
        <>
        <NavBar></NavBar>
            <Container>
            <Row className="my-5">
                <Col md={6}>
                <div className="mt-3 mb-5">
                    <h2 className="div-head">Watch Information </h2>
                    <div className="underline"></div>
                </div>
                    <img className="img-fluid rounded" src={watch.image} alt="" />
                    <h3 className="my-3">{watch.title}</h3>
                    <p>{watch.description}</p>
                    <p>Price: <i className="fas fa-dollar-sign"></i> {watch.price}</p>
                </Col>
                <Col md={6}>
                <div className="mt-3 mb-5">
                    <h2 className="div-head">Order Information </h2>
                    <div className="underline"></div>
                </div>
                    
                    <div className="ms-5">
                        <h4 className="mb-3 order-head">User's Information</h4>
                        <hr />
                        <p>User Name: {user.displayName}</p>
                        <p>User Email: {user.email}</p>

                    </div>
                    <div className="ms-5">
                        <form onSubmit={handleSubmit(onSubmit)} className="login-div">
                            <h4 className="mb-3 order-head">Billing Information</h4>   
                                <hr />                     
                                <label>Address</label> <br />
                                <input  className="w-100" {...register("address", { required: true })}/> <br />
                                {errors.address && <span>This field is required</span>}

                                <label>Phone Number</label> <br />
                                <input className="w-100" type="number" {...register("mobile", { required: true, minLength:6, maxLength:11})}/> <br />
                                {errors.mobile && <span>This field is required</span>}


                                <label>Message</label> <br />
                                <textarea className="w-100" {...register("message")} rows="3" /> <br />
                                {errors.message && <span>This field is required</span>}

                                <button type="submit" className="btn btn-order">Confirm Order</button>
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default WatchOrder;