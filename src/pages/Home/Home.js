import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SmartWatch from '../../components/SmartWatch/SmartWatch';
import { Col, Container, Row } from 'react-bootstrap';
import Reviews from '../../components/Reviews/Reviews';
import Banner from '../../components/Banner/Banner';

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import Subscribe from '../../components/Subscribe/Subscribe';
import Features from '../../components/Features/Features';


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
            <Container>
                <Row className="my-5">
                <h2>New Collections... </h2>
                    <Col md={3}>
                        <img style={{'height': '150px'}} className="w-100 img-fluid rounded" src="https://cdn.mos.cms.futurecdn.net/oPEdu7DPcBN5jbVR8rLAcS.jpg" alt="" />
                        <h4 className="text-center my-2">Mi band 5</h4>
                    </Col>
                    <Col md={3}>
                        <img style={{'height': '150px'}} className="w-100 img-fluid rounded" src="https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2021/10/12/sgw4-cs-6-1039981-1634047391.jpg?itok=j5FHaEC_" alt="" />
                        <h4 className="text-center my-2">Galaxy Watch4</h4>
                    </Col>
                    <Col md={3}>
                        <img style={{'height': '150px'}} className="w-100 img-fluid rounded" src="https://cdn.vox-cdn.com/thumbor/QXhCkjd9_Y1NdHXoiKhR6crR9ws=/0x0:2040x1360/1200x0/filters:focal(0x0:2040x1360):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22908902/vpavic_211006_4796_0039.jpg" alt="" />
                        <h4 className="text-center my-2">Apple Watch Series 7</h4>
                    </Col>
                    <Col md={3}>
                        <img style={{'height': '150px'}} className="w-100 img-fluid rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWYTzOjEtOBXfFQ6GaIY3L-tOFz6WgNfmTdpTNBqAN5jhmlkXb55IHOUd9rlIiLXNdqoc&usqp=CAU" alt="" />
                        <h4 className="text-center my-2">HUAWEI WATCH 3 Series</h4>
                    </Col>
                </Row>
            </Container>
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
                <Row>
                <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >

        {
            reviews.map((slideContent, index) => 
                    <SwiperSlide virtualIndex={index}>{slideContent.name}</SwiperSlide>
                
            )
            
            }      
    </Swiper>
                </Row>
            </Container>

        <Subscribe></Subscribe>
        <Features></Features>
            
        </>
    );
};

export default Home;