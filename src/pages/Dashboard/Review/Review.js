import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ReactStars from "react-rating-stars-component";
import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const {user} = useAuth();
    // react hook form
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [rating, setRating] = useState(1)

    const onSubmit = data => {
        data.name = user.displayName;
        data.rating = rating;
        console.log(data);

    // POST method for give a review
    axios.post('http://localhost:5000/review', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();

                }
            })
}

    const ratingChanged = (newRating) => {
        console.log(newRating);
        setRating(newRating);
        };
    return (
        <div>
            <h3>give a review from here.</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="form-info">
                        <label>Review</label> <br />
                        <textarea rows="4" cols="40" {...register("review", { required: true })} /> <br />
                        {errors.review && <span>This field is required</span>}

                        <label>Ratings</label> <br />
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            activeColor="#ffd700"
                        />
                        {errors.rating && <span>This field is required</span>}

                        <button type="submit" className="btn btn-booking">Review</button>
                    </form>
                
                
                
                

        </div>
    );
};

export default Review;