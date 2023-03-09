import React from 'react';
import image1 from '../assets/images/pic.png';
import image2 from '../assets/images/pic2.png';
import image3 from '../assets/images/pic3.png';
import Carousel from '../components/Carousel';
import Cards from '../components/Cards'

const Discover = () => {
  const images = [image1, image2, image3];
  return (
    <>
      <div className='flex justify-center items-center mt-5'>
        <div className=''
          style={{
            height: '40vh',
            width: '50%',
            boxShadow: 'inset 0px 0px 0px 1000px rgba(0, 0, 0, 0.2)',
            objectFit: 'contain',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop:'80px',
            justifyContent: 'center',
          }}
        >
          <div className="carousel-container flex justify-center items-center overflow-hidden w-full"
             style={{
              height: '90vh',
              width:'100%',
            }}
          >
          <Carousel images={images} />
          </div>
        </div>
      </div>
      <Cards />
    </>
  );
};

export default Discover;
