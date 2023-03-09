import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const Carousel = ({ images, autoPlayInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    const startAutoPlay = () => {
      intervalRef.current = setInterval(() => {
        const newIndex =
          currentIndex === images.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      }, autoPlayInterval);
    };
    startAutoPlay();
    return () => clearInterval(intervalRef.current);
  }, [autoPlayInterval, currentIndex, images]);

  const handlePrevClick = () => {
    const newIndex =
      currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNextClick = () => {
    const newIndex =
      currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    
    <div
      className='relative'
    //     style={{
    //    //  width: '100%',
    //   //   // height: '90v',
    //   //   marginTop: '80px',
    //   //   boxShadow: 'inset 0px 0px 0px 1000px rgba(0, 0, 0, 0.2)',
    //   //   objectFit: 'contain',
    //   //   overflow: 'hidden',
    //   //   display: 'flex',
    //   //   flexDirection: 'row',
    //   //   alignItems: 'center',
    //   //   justifyContent: 'center',
    //    }}
    >
      <div
        className=' carousel-container flex justify-center items-center min-h-full overflow-hidden w-full '
     style={{ height: '90vh' }}
      >
    
        {images.map((image, index) =>
          index === currentIndex ? (
            <img
              key={index}
              src={image}
              alt={`Carousel ${index}`}
              className='min-h-fit w-full h-full lg:h-auto'
            />
          ) : null
        )}
      </div>
    
      <button
        className='h-96 absolute top-1/2 left-0 transform text-white -translate-y-1/2 transparent border-none outline-none cursor-pointer p-3 rounded-none flex items-center justify-center opacity-10 transition-colors duration-300 hover:bg-white hover:text-white-850 hover:bg-green-850 hover:opacity-10'
        onClick={handlePrevClick}
      >
        <ChevronLeft />
      </button>
      <button
        className=' h-96 absolute top-1/2 right-0 transform text-white -translate-y-1/2 transparent border-none outline-none cursor-pointer p-3 rounded-none flex items-center justify-center opacity-10 transition-colors duration-300 hover:bg-white hover:text-white-850 hover:bg-green-850 hover:opacity-10' //bg-green-850
        onClick={handleNextClick}
      >
        <ChevronRight />
      </button>
     </div>
    
  );
};

export default Carousel;
