
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import image1 from "../assets/g1.jpg"
import image2 from "../assets/g2.jpg"
import image3 from "../assets/g3.jpg"
import image4 from "../assets/g4.jpg"
import image5 from "../assets/g5.jpg"
import image6 from "../assets/g6.jpg"
import image7 from "../assets/g7.jpg"
import image8 from "../assets/g8.jpg"
import image9 from "../assets/g9.jpg"


const Banner = () => {

    const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
    return (

     <div className=" "> {/* Parent fixed height */}
  <Swiper
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Autoplay, Pagination, Navigation]}
    onAutoplayTimeLeft={onAutoplayTimeLeft}
    className="h-full" // Swiper takes full parent height
  >
    {[image1, image2, image3, image4, image5, image6, image7, image8, image9, image4].map(
      (img, i) => (
        <SwiperSlide key={i} className="h-full">
          <img src={img} alt="" className="w-full h-full object-cover" />
        </SwiperSlide>
      )
    )}

    <div className="autoplay-progress" slot="container-end">
      <svg viewBox="0 0 48 48" ref={progressCircle}>
        <circle cx="24" cy="24" r="20"></circle>
      </svg>
      <span ref={progressContent}></span>
    </div>
  </Swiper>
</div>


         
    );
};

export default Banner;