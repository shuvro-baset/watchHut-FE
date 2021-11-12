import React from 'react';
import { Container, Row } from 'react-bootstrap';
import NavBar from '../../components/NavBar/NavBar';
import './About.css'


const About = () => {
    return (

        <>
        <NavBar></NavBar>

        <Container >
            <Row className="about-div">
                <div>
                    <h2 className="my-3 text-center">Sp Watch Hut</h2>

                    <h4 className="my-3">About Sp WatchHut</h4>
                    <p>
                        Sp WatchHut has been founded on 1 March 2007. From then to now, Sp WatchHut has won the heart of many people and now is a country-wide renowned brand. That has been possible due to the hard work Sp WatchHut has done to satisfy its customers. Having the aim to satisfy customers, providing customers with their required products, and being true to their motto, “Customers Come First,” has brought Sp WatchHut to the top of the E-Commerce Site and also is one of the largest Technology product retailers. Sp WatchHut has over 120 employees and is growing more and more, working diligently to fulfill the Main Criteria of Sp WatchHut’s Motto or Vision. Sp WatchHut is located in 4 central territories, Dhaka, Gazipur, Chattogram, Khulna, and Rangpur, and has 13 outlets from where you can get your desired tech products. There are nine outlets in Dhaka alone because Dhaka is the capital city, there is one outlet in Gazipur, one outlet in Chattogram, one outlet in Khulna, and the final outlet is in Rangpur.</p>
                
                    <h4 className="my-3">The Main Goal and Aim</h4>
                    <p>
                        We are Sp WatchHut, and we are here to help you with all your technology needs. We aim to provide all the requirements of our customers and help them satisfy their needs, wants, and desires. We delight in seeing our customers happy and satisfied with our resiliency in providing them with their products. Our complete focus is on the customers. We keep tabs and records on what our customers want, and we try our level best to bring that for them. We are already providing our customers with the delivery system so that they can order online and receive their products from their area. They do not have to travel long distances to get their desired product.</p>
                </div>
            </Row>
        </Container>
        </>

        
    );
};

export default About;