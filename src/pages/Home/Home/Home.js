import React from 'react';
import About from '../../About Yoga/About';
import Meditation from '../../Meditations/Meditation';
import Banner from '../Banner/Banner';
import Poses from '../Poses/Poses';

const Home = () => {
    return (
        <div className="home">
            <Banner></Banner>
            <About></About>
            <Poses></Poses>
            <Meditation></Meditation>
        </div>
    );
};

export default Home;