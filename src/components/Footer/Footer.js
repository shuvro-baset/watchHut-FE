import React from 'react';
import {Col, Container, Row} from 'react-bootstrap'
import './Footer.css'


const Footer = () => {
    return (
        <Container fluid className="mt-5 footer-bg ">
            <Row className="pt-5">
            {/* footer part 1st column */}
                <Col md={3}>
                    <div className="d-flex flex-column align-items-start p-3">
                        <h2 className="logo-text p-0 m-0">ms health care</h2>
                        <p className="text-white p-0 m-0">Your Health, Our Priority</p>
                        <div className="d-flex justify-content-between align-items-center text-white">
                            <i className="fas fa-map-marker-alt icon-font"></i>
                            <p className="m-3"> 92, Lalbagh Road. <br />
                                dhaka-1211
                            </p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center text-white">
                            <i className="fas fa-phone-alt icon-font"></i>
                            <p className="m-3"> +880-1687575757 <br />
                                                +880-1723232323
                            </p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center text-white">
                            <i className="fas fa-globe-americas icon-font"></i>
                            <p className="m-3"> info@mschildcare.com <br />
                                                web: www.mschildcare.com
                            </p>
                        </div>
                        
                    </div>
                </Col>

            {/* footer part 2nd column */}

                <Col md={3}>
                    <div className="text-white p-3">
                        <h4>Quick Links</h4>
                        <div className="line"></div>
                        <p><i className="fas fa-chevron-right mx-2"></i>Home</p>
                        <p><i className="fas fa-chevron-right mx-2"></i>Testimonial</p>
                        <p><i className="fas fa-chevron-right mx-2"></i>About</p>
                        <p><i className="fas fa-chevron-right mx-2"></i>Doctors</p>
                        <p><i className="fas fa-chevron-right mx-2"></i>Privacy</p>
                        <p><i className="fas fa-chevron-right mx-2"></i>FAQ</p>
                    </div>
                </Col>
            {/* footer part 3rd column */}

                <Col md={3}>
                    <div className="text-white p-3">
                        <h4>Services</h4>
                        <p>Day Care</p>
                        <p>Medicine Service</p>
                        <p>Online Service</p>
                        <p>Consultation Support</p>
                        <p>Pediatric Nutrition</p>
                        <p>Vaccination Camp</p>
                    </div>
                </Col>
            {/* footer part 4th column */}

                <Col md={3}>
                    <div className="text-white p-3 contact">
                        <h4>Quick Contact</h4> 
                        <input className="contact-info" type="text" placeholder="Name" /> 
                        <input className="contact-info" type="email" placeholder="Email" /> 
                        <textarea className="contact-info" rows="3" cols="22" type="text" placeholder="Enter your message" />
                        <br />
                        <button className='btn btn-dark text-white'>Send</button>
                    </div>
                </Col>
            </Row>

            {/* social links  */}
            <Row className="py-3 d-flex justify-content-center">
                <Col md={8} className="text-white">
                    <div className="d-flex justify-content-evenly align-items-center text-white">
                        <i className="social-icon fab fa-facebook"></i>
                        <i className="social-icon fab fa-google"></i>
                        <i className="social-icon fab fa-twitter"></i>
                        <i className="social-icon fab fa-youtube"></i>
                        <i className="social-icon fab fa-instagram"></i>
                        <i className="social-icon fab fa-whatsapp"></i>
                    </div>
                </Col>
            </Row>
            {/* copyright text  */}
            <Row>
                <Col className="py-2 d-flex justify-content-center copyright-text">
                    <small> Design and Developed by <span>shuvro-baset</span> </small>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;