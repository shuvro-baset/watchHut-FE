import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import NavBar from '../../components/NavBar/NavBar';
import SmartWatch from '../../components/SmartWatch/SmartWatch';

const WatchHut = () => {
    // set state for all watches
    const [watches, setWatches] = useState([])
    
    // getting watches information
    useEffect(() => {
        // fetch('http://localhost:5000/watches')
        fetch('https://agile-shelf-31650.herokuapp.com/watches')

        .then(res => res.json())
        .then(data => setWatches(data))
    }, [])
    return (
        <>
        <NavBar></NavBar>
        <Container>
            <Row className="my-5">
                {
                    watches.map(watch => 
                            <SmartWatch
                                key={watch._id}
                                watch={watch}
                            ></SmartWatch>
                    )
                }
            </Row>
            
        </Container>
        </>
    );
};

export default WatchHut;