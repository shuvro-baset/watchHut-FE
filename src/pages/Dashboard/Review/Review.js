import axios from 'axios';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import ReactStars from "react-rating-stars-component";
import useAuth from '../../../hooks/useAuth';
import review from '../../../images/review.png'


const Review = () => {
    // get user state
    const {user} = useAuth();
    // react hook form
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    // initialize rating
    const [rating, setRating] = useState(1)

    // handle review 
    const onSubmit = data => {
        data.name = user.displayName;
        data.rating = rating;
        console.log(data);

    // POST method for give a review
    // axios.post('http://localhost:5000/review', data)
    axios.post('https://agile-shelf-31650.herokuapp.com/review', data)

            .then(res => {
                if (res.data.insertedId) {
                    alert('review added successfully');
                    reset();

                }
            })
}

    // taking rating input 
    const ratingChanged = (newRating) => {
        setRating(newRating);
        };
        
    return (
        <Container>

            <Row>
                <div className="mt-3 mb-5">
                    <h2 className="div-head">Give a Review </h2>
                    <div className="underline"></div>
                </div>
                <Col md={6}>
                    <div className="py-3 login-div text-center">
                    <form onSubmit={handleSubmit(onSubmit)} className="form-info d-flex flex-column justify-content-center align-items-center">
                        <label>Review</label> <br />
                        <textarea rows="4" cols="40" {...register("review", { required: true })} /> <br />
                        {errors.review && <span>This field is required</span>}
                        <label>Ratings</label> 
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            activeColor="#e12454"
                        />
                        <button type="submit" className="btn btn-order">Review</button>
                    </form>
                    </div>
                </Col>
                <Col md={6}>
                    <img className="img-fluid rounded" src={review} alt="" />
                </Col>
            </Row>
            
            
            
        </Container>
    );
};

export default Review;