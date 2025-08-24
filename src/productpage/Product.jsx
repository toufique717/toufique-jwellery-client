import React from 'react';

import { Helmet } from 'react-helmet-async';
import Backcover from '../shared/Backcover';
import Popularitem from '../pages/Popularitem'
import bimage from '../assets/biimage.jpg'
import useproduct from '../hooks/useproducts';

import anklets1 from '../assets/anklets.jpg'
import earrings1 from '../assets/Earrings.jpg'
import bracelets1 from '../assets/bracelets.jpg'
import neckless1 from '../assets/necklesss.jpg'
import rings1  from '../assets/ringss.jpg'


import Popularproduct from './Popularproduct';
import Sectiontitle from '../pages/Sectiontitle';

const Product = () => {
    const[jwellery] = useproduct();
    const neckless = jwellery.filter(product=>product.category === 'offered');
     const earring = jwellery.filter(product=>product.category === 'soup');
      const bracelets = jwellery.filter(product=>product.category === 'pizza');
       const rings = jwellery.filter(product=>product.category === 'dessert');
        const anklets = jwellery.filter(product=>product.category === 'salad');
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

            <Sectiontitle heading={'---Dont Miss---'} subheading={'TODAYS OFFER'}></Sectiontitle>

            <Popularproduct item={neckless}></Popularproduct>

            <Popularproduct item={earring} image={earrings1} title1={'earrings'} title2={'Jewellery is a timeless form of adornment that enhances beauty and expresses personal style. From elegant necklaces to sparkling rings, each piece carries cultural, emotional, or symbolic value. Worn on special occasions or daily, jewellery reflects tradition, fashion, and individuality, making it a cherished part of human history and identity.'}></Popularproduct>

            <Popularproduct item={bracelets} image={rings1} title1={'rings'} title2={'Jewellery is a timeless form of adornment that enhances beauty and expresses personal style. From elegant necklaces to sparkling rings, each piece carries cultural, emotional, or symbolic value. Worn on special occasions or daily, jewellery reflects tradition, fashion, and individuality, making it a cherished part of human history and identity.'}></Popularproduct>

            <Popularproduct item={rings} image={bracelets1} title1={'bracelets'} title2={'Jewellery is a timeless form of adornment that enhances beauty and expresses personal style. From elegant necklaces to sparkling rings, each piece carries cultural, emotional, or symbolic value. Worn on special occasions or daily, jewellery reflects tradition, fashion, and individuality, making it a cherished part of human history and identity.'}></Popularproduct>

            <Popularproduct item={anklets} image={neckless1} title1={'neckless'} title2={'Jewellery is a timeless form of adornment that enhances beauty and expresses personal style. From elegant necklaces to sparkling rings, each piece carries cultural, emotional, or symbolic value. Worn on special occasions or daily, jewellery reflects tradition, fashion, and individuality, making it a cherished part of human history and identity.'}></Popularproduct>


             
        </div>

        
    );
};

export default Product;