import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SmartWatch from '../../components/SmartWatch/SmartWatch';
import { Container, Row } from 'react-bootstrap';
import Reviews from '../../components/Reviews/Reviews';
import Banner from '../../components/Banner/Banner';

const Home = () => {
    // set state for all watches
    const [watches, setWatches] = useState([]);
    const [reviews, setReviews] = useState([]);
    
    // getting watches information
    useEffect(() => {
        fetch('http://localhost:5000/watches')
        .then(res => res.json())
        .then(data => setWatches(data))
    }, [])

    // getting watches information
    useEffect(() => {
        fetch('http://localhost:5000/all-review')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])

    return (
        <>
            <Banner></Banner>
            <Container className="my-5">
                <h2>Smart Watch</h2>
                <Row>
                    {
                    watches.slice(2,8).map(watch => 
                            <SmartWatch
                                key={watch.key}
                                watch={watch}
                            ></SmartWatch>
                    )
                }
                </Row>
                <Row>
                    {
                    reviews.map(review => 
                            <Reviews
                                key={review.key}
                                review={review}
                            >
                            </Reviews>
                    )
                }
                </Row>
            </Container>

            
        </>
    );
};

export default Home;