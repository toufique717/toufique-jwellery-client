import React from 'react';
import Banner from './Banner';
import Orderonline from './Orderonline';
import Categories from './Categories';
import Popularitem from './Popularitem';
import Bgorderonline from './Bgorderonline';
import Testimonial from './Testimonial';
import Backimage from './Backimage';
import Callus from './Callus';

const Home = () => {
    return (
        <div>

            <h1> This is Home</h1>
            <div className=''>
                 <Banner></Banner>
            </div>

            {/* <Orderonline></Orderonline> */}

            <Categories></Categories>
            <Backimage></Backimage>

            <Popularitem></Popularitem>
            <Bgorderonline></Bgorderonline>
            <Callus></Callus>
            <Testimonial></Testimonial>
            
        </div>
    );
};

export default Home;