import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { useEffect } from 'react';
import { useState } from 'react';

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
            <NavBar></NavBar>
            <h2>This is home </h2>

            {
                watches.map(w => 
                        <h2>{w.title}</h2>
                )
            }
        </>
    );
};

export default Home;