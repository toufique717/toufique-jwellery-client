import React from 'react';

import { Helmet } from 'react-helmet-async';
import Backcover from '../shared/Backcover';
import Popularitem from '../pages/Popularitem'
import bimage from '../assets/biimage.jpg'

const Product = () => {
    return (
        <div>
           <Helmet>
            <title>Jwellery Item</title>
            </Helmet>
            

            <Backcover
            image={bimage}
            title1={'Our product'}
            title2={"welcome our shop"}>

            </Backcover>


            <Popularitem></Popularitem>
        </div>

        
    );
};

export default Product;