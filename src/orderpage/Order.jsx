import React, { useState } from 'react';
import backcoverimage from '../assets/chains.jpg'
import Backcover from '../shared/Backcover';


import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Foodcard from '../shared/Foodcard';
import useproduct from '../hooks/useproducts';


const Order = () => {
    const[jwellery] = useproduct();
    const neckless = jwellery.filter(product=>product.category === 'offered');
     const earring = jwellery.filter(product=>product.category === 'soup');
      const bracelets = jwellery.filter(product=>product.category === 'pizza');
       const rings = jwellery.filter(product=>product.category === 'dessert');
        const anklets = jwellery.filter(product=>product.category === 'salad');
    const[tabindex,settabindex] = useState();
    return (
        <div>
            <Backcover image={backcoverimage} title1={'order now'} title2={'Buying jewellery online offers style and convenience. From gold to silver, and modern to traditional designs, you can explore countless options anytime. Online stores provide detailed images, certifications, and secure delivery. Whether it’s for weddings or daily wear, ordering jewellery online saves time and gives access to exclusive collections easily.'}></Backcover>
             

             <div>
                 <Tabs selectedIndex={tabindex} onSelect={(index) =>  settabindex(index)}>
      <TabList>
        <Tab>earrings</Tab>
        <Tab>rings</Tab>

        <Tab>bracelets</Tab>
        <Tab>neckless</Tab>

        <Tab>something</Tab>
        
      </TabList>
      <TabPanel></TabPanel>
      <TabPanel></TabPanel>
      <TabPanel></TabPanel>
      <TabPanel></TabPanel>
      <TabPanel></TabPanel>
      
    </Tabs>
             </div>

             <Foodcard></Foodcard>
        </div>

    );
};

export default Order;