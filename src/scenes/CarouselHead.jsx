import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

// import images
import bg1 from '../assets/images/bg.jpg';
import bg3 from '../assets/images/bg3.jpg';
import bg4 from '../assets/images/bg4.jpg';
import bg5 from '../assets/images/bg5.jpg';
import bg7 from '../assets/images/bg7.jpg';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        // slidesPerView={1}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <img
            src={bg1}
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={bg3}
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={bg4}
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={bg5}
            alt=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={bg7}
            alt=''
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
