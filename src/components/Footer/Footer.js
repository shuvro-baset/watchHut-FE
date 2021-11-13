import React from 'react';
import {Col, Container, Row} from 'react-bootstrap'
import './Footer.css'


const Footer = () => {
    return (
        // footer part 
        <Container fluid className="footer-bg ">
            <Row className="pt-5">
            {/* footer part 1st column */}
                <Col md={4}>
                    <div className="d-flex flex-column align-items-center p-3">
                        <div>
                            <h2 className="logo-text p-0 m-0 my-3">Sp WatchHut</h2>
                            <div className="d-flex  align-items-center text-white">
                                <i className="icon-pr2 fas fa-map-marker-alt icon-font"></i>
                                <p className="m-3"> 92, Lalbagh Road. <br />
                                    dhaka-1211
                                </p>
                            </div>
                            <div className="d-flex  align-items-center text-white">
                                <i className="icon-pr2 fas fa-phone-alt icon-font"></i>
                                <p className="m-3"> +880-1687575757 <br />
                                                    +880-1723232323
                                </p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center text-white">
                                <i className="icon-pr2 fas fa-globe-americas icon-font"></i>
                                <p className="m-3"> info@mschildcare.com <br />
                                                    web: www.mschildcare.com
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </Col>

            {/* footer part 2nd column */}

                <Col md={4}>
                    <div className="text-white d-flex justify-content-center align-items-center p-3">
                        <div>
                            <h4 className="my-3">Quick Links</h4>
                            <p className="mt-3"><i className="icon-pr2 fas fa-chevron-right mx-2"></i>Home</p>
                            <p><i className="icon-pr2 fas fa-chevron-right mx-2"></i>Dashboard</p>
                            <p><i className="icon-pr2 fas fa-chevron-right mx-2"></i>About</p>
                            <p><i className="icon-pr2 fas fa-chevron-right mx-2"></i>WatchHut</p>
                            <p><i className="icon-pr2 fas fa-chevron-right mx-2"></i>Privacy</p>
                            <p><i className="icon-pr2 fas fa-chevron-right mx-2"></i>FAQ</p>
                        </div>
                    </div>
                </Col>

            {/* footer part 3rd column */}

                <Col md={4}>
                    <div className="text-white p-3 contact">
                        <h4 className="my-3">Quick Contact</h4> 
                        <input className="contact-info" type="text" placeholder="Name" /> <br />
                        <input className="contact-info" type="email" placeholder="Email" /> <br />
                        <textarea className="contact-info" rows="3" cols="22" type="text" placeholder="Enter your message" />
                        <br />
                        <button className='btn btn-order'>Send</button>
                    </div>
                </Col>
            </Row>

            {/* social links  */}
            <Row className="py-3 d-flex justify-content-center">
                <Col md={8} className="text-white">
                    <div className="d-flex justify-content-evenly align-items-center text-white">
                        <i className="icon-pr2 social-icon fab fa-facebook"></i>
                        <i className="icon-pr2 social-icon fab fa-google"></i>
                        <i className="icon-pr2 social-icon fab fa-twitter"></i>
                        <i className="icon-pr2 social-icon fab fa-youtube"></i>
                        <i className="icon-pr2 social-icon fab fa-instagram"></i>
                        <i className="icon-pr2 social-icon fab fa-whatsapp"></i>
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