import React from 'react';
import Banner from './Banner';
import Orderonline from './Orderonline';
import Categories from './Categories';
import Popularitem from './Popularitem';

const Home = () => {
    return (
        <div>

            <h1> This is Home</h1>
            <div className=''>
                 <Banner></Banner>
            </div>

            {/* <Orderonline></Orderonline> */}

            <Categories></Categories>

            <Popularitem></Popularitem>
            
        </div>
    );
};

export default Home;