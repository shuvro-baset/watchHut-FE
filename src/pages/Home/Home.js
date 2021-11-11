import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { useEffect } from 'react';
import { useState } from 'react';
import SmartWatch from '../../components/SmartWatch/SmartWatch';
import { Container, Row } from 'react-bootstrap';

const Home = () => {
    // set state for all watches
    const [watches, setWatches] = useState([])
    
    // getting watches information
    useEffect(() => {
        fetch('http://localhost:5000/watches')
        .then(res => res.json())
        .then(data => setWatches(data))
    }, [])
    return (
        <>
            <h2>This is home </h2>

            <Container>
                <Row>
                    {
                    watches.map(watch => 
                            <SmartWatch
                                key={watch.key}
                                watch={watch}
                            ></SmartWatch>
                    )
                }
                </Row>
            </Container>

            
        </>
    );
};

export default Home;