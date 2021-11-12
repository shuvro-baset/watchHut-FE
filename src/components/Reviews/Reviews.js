import React from 'react';
import { Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
const Reviews = (props) => {
    const {name, review, rating} = props.review;
    const count = +rating;

    return (
                    
            <Col md={3}>
            <div>
                        <h2>{name}</h2>
                        <h2>{review}</h2>
                        <h2> </h2>
                        { count === 1 && <i className="fas fa-star"></i>
                            
                        }
                        { count === 2 && <div><i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i></div>
                            
                        }
                        { count === 3 && <div><i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            
                                            </div>


                        }
                        { count === 4 && <div><i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i></div>


                        }
                        { count === 5 && <div><i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            </div>
                            
                        }

                    </div>
            </Col>
                    
    );
};

export default Reviews;