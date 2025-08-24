import React from 'react';
import Backcover from '../shared/Backcover';
import Popular from '../shared/Popular';

const Popularproduct = ({item, image, title1,title2}) => {
    return (
        <div>

           {title1 &&   <Backcover image={image} title1={title1} title2={title2}></Backcover>}


           <section className='grid grid-cols-2'>



                {
                    item.map(item=><Popular
                    key={item._id}
                    item={item}></Popular>)
                }



            </section>
            
        </div>
    );
};

export default Popularproduct;