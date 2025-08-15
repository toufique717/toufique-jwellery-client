import React, { useEffect, useState } from 'react';
import Sectiontitle from './Sectiontitle';

//import for star rating

import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


//for carosale
 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
 
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';




const Testimonial = () => {

    const[revew,setrevew] = useState([])

    useEffect(()=>
        {
            fetch('revews.json')
            .then(res=>res.json())
            .then(data=>setrevew(data))
        },[])
    return (
        <div>
            <h1>Testimonial</h1>
            <section>
                <Sectiontitle
                heading={'check it out now'}
                subheading={'ORDER NOW'}>

                </Sectiontitle>
            </section>

            <section className="flex flex-col items-center justify-center text-center space-y-6 py-10">

  {/* Star Rating */}
  <div>
    <Rating
      style={{ maxWidth: 180 }}
      value={3}
      readOnly
    />
  </div>

  {/* Carousel */}
  <div className="w-[1000px] h-[400px]">
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="mySwiper h-full"


    >
      {revew.map((review, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col items-center justify-center h-full px-10 space-y-2">
            <p className=" ">{review.details}</p>
            <p className="font-bold text-2xl text-yellow-500">{review.name}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>

</section>

        </div>
    );
};

export default Testimonial;