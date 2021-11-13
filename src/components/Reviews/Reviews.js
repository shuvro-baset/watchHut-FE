import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from 'react-rating';
import './Reviews.css'

const Reviews = (props) => {
    // destructuring review property
    const {name, review, rating} = props.review;

    return (
                    
        <Card className="text-center shadow py-3 rounded">
                <Card.Title><i className="fas fa-user icon-pr"></i></Card.Title>
                <Card.Body>
                    <h6>{name}</h6>
                    <p>{review.slice(0,100)}</p>
                </Card.Body>
                <Card.Footer className="bg-transparent border-0"><Rating
                    className="rating-icon"
                    readonly
                    initialRating={rating}
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                    fractions={2}
                />
                </Card.Footer>

        </Card>
                    
    );
};

export default Reviews;

