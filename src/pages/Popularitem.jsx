import React, { useEffect, useState } from 'react';

import Sectiontitle from './Sectiontitle';

import Popular from '../shared/Popular';
import useproduct from '../hooks/useproducts';

const Popularitem = () => {

    const[menu] = useproduct();
    const popular = menu.filter(product =>product.category === 'popular')

    // const[menu,setmenu] = useState([])

    // useEffect(()=>
    // {

    //     fetch('menu.json')
    //     .then(res=>res.json())
    //     .then(data=>
    //     {
    //          const popularitem = data.filter(item=>item.category === 'popular');
    //          setmenu(popularitem);
    //     }
    //     )

    // },[])
    return (
        <div>
            <section>
                 

                <Sectiontitle
                
                heading={'---Check Out---'}
                subheading={'ORDER NOW'}>

                </Sectiontitle>
            </section>


            <section className='grid grid-cols-2'>



                {
                    popular.map(item=><Popular
                    key={item._id}
                    item={item}></Popular>)
                }



            </section>
        </div>
    );
};

export default Popularitem;