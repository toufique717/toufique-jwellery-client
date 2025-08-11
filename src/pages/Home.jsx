import React from 'react';
import Banner from './Banner';
import Orderonline from './Orderonline';
import Categories from './Categories';

const Home = () => {
    return (
        <div>

            <h1> This is Home</h1>
            <div className=''>
                 <Banner></Banner>
            </div>

            <Orderonline></Orderonline>

            <Categories></Categories>
            
        </div>
    );
};

export default Home;