import React from 'react';
import Sectiontitle from './Sectiontitle';
import bg from '../assets/bg.jpg';
import fr from '../assets/fr.jpg'

const Bgorderonline = () => {
    return (
        <div>
          
          <div className=' py-10 '>
            <div className='p-12 bg-fixed bg-black bg-opacity-50 bg-cover bg-center bg-blend-overlay ' style={{ backgroundImage: `url(${bg})` }}>

            <div>
                 <Sectiontitle 
                 heading={'---check it out---'}
                 subheading={'From Our menu'}></Sectiontitle>
            </div>

            <div className='flex gap-4 py-16 px-28'>
                <div className='max-w-80'>
                    <img src={fr}/> 

                </div>

                <div className='mt-16 b' >
                     <p className='text-xl'>March-22,2025</p>
                     <p className=''>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat veniam sint possimus alias vel quaerat quod, aliquam quis, labore non impedit, cupiditate autem quisquam itaque in nihil modi dolor blanditiis libero iste ut vitae ducimus deleniti iure. Quod tempora dolores vero soluta placeat! Unde delectus quasi pariatur laborum consequatur perferendis.</p>


                </div>
            </div>
            
        </div>
        </div>

            
        </div>
    );
};

export default Bgorderonline;