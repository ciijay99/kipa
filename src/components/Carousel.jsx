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
      style={{
        width: '100%',
        // height: '90v',
        marginTop: '80px',
        boxShadow: 'inset 0px 0px 0px 1000px rgba(0, 0, 0, 0.2)',
        objectFit: 'contain',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        className='flex justify-center items-center h-96 overflow-hidden w-full'
        style={{ height: '70vh' }}
      >
        {images.map((image, index) =>
          index === currentIndex ? (
            <img
              key={index}
              src={image}
              alt={`Carousel ${index}`}
              className='w-full h-full lg:h-auto'
            />
          ) : null
        )}
      </div>
      <button
        className='absolute top-1/2 left-3 transform text-white -translate-y-1/2 transparent border-none outline-none cursor-pointer p-3 rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-white hover:text-green-850'
        onClick={handlePrevClick}
      >
        <ChevronLeft />
      </button>
      <button
        className='absolute top-1/2 right-3 transform text-white -translate-y-1/2 transparent border-none outline-none cursor-pointer p-3 rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-white hover:text-green-850' //bg-green-850
        onClick={handleNextClick}
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default Carousel;
