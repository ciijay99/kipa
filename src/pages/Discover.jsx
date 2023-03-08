import React from 'react';
import image1 from '../assets/images/pic.png';
import image2 from '../assets/images/pic2.png';
import image3 from '../assets/images/pic3.png';
import Carousel from '../components/Carousel';

const Discover = () => {
  const images = [image1, image2, image3];
  return (
    <div className='flex justify-center items-center'>
      <div className='w-9/12 h-auto flex flex-col mt-36 mb-24 bg-slate-200'>
        <Carousel images={images} />
      </div>
    </div>
  );
};

export default Discover;
