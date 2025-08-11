
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

//import './styles.css';

// import required modules
import { EffectCards } from 'swiper/modules';

import image1 from "../assets/chains.jpg"
import image2 from "../assets/Earrings.jpg"
import image3 from "../assets/neckless.jpg"
import image4 from "../assets/pendants.jpg"
import image5 from "../assets/rings.jpg"
 


const Categories = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
  <div className="max-w-96 w-full"> {/* Make width full up to max width */}
    <Swiper
      effect={'cards'}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper"
    >
      {/* Your SwiperSlides here */}
      <SwiperSlide>
        <div className="relative">
          <img src={image1} className="w-full h-auto" alt="Salad" />
          <p className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-black bg-opacity-20 text-white font-bold text-4xl px-4 py-2">
            Chains
          </p>
        </div>
      </SwiperSlide>


       <SwiperSlide>
        <div className="relative">
          <img src={image2} className="w-full h-auto" alt="Salad" />
          <p className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-black bg-opacity-20 text-white font-bold text-4xl px-4 py-2">
            Yearrings
          </p>
        </div>
      </SwiperSlide>


       <SwiperSlide>
        <div className="relative">
          <img src={image3} className="w-full h-auto" alt="Salad" />
          <p className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-black bg-opacity-20 text-white font-bold text-4xl px-4 py-2">
            Pendant
          </p>
        </div>
      </SwiperSlide>



       <SwiperSlide>
        <div className="relative">
          <img src={image4} className="w-full h-auto" alt="Salad" />
          <p className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-black bg-opacity-20 text-white font-bold text-4xl px-4 py-2">
            Locket
          </p>
        </div>
      </SwiperSlide>




       <SwiperSlide>
        <div className="relative">
          <img src={image5} className="w-full h-auto" alt="Salad" />
          <p className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-black bg-opacity-20 text-white font-bold text-4xl px-4 py-2">
            Rings
          </p>
        </div>
      </SwiperSlide>



       <SwiperSlide>
        <div className="relative">
          <img src={image2} className="w-full h-auto" alt="Salad" />
          <p className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-black bg-opacity-20 text-white font-bold text-4xl px-4 py-2">
            kaner dul
          </p>
        </div>
      </SwiperSlide>

      {/* Repeat other slides similarly */}
    </Swiper>
  </div>
</div>

    );
};

export default Categories;