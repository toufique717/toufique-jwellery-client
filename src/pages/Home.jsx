import React from 'react';
import Banner from './Banner';
import Orderonline from './Orderonline';
import Categories from './Categories';
import Popularitem from './Popularitem';
import Bgorderonline from './Bgorderonline';
import Testimonial from './Testimonial';
import Backimage from './Backimage';
import Callus from './Callus';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>

             <Helmet>
                <title>Toufique Jwellery Shop</title>
             </Helmet>
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