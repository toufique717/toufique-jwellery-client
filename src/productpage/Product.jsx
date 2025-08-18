import React from 'react';
import { Helmet } from 'react-helmet-async';

const Product = () => {
    return (
        <div>
           <Helmet>
            <title>Jwellery Item</title>
            </Helmet>
           <h1>This is product page</h1> 
        </div>
    );
};

export default Product;