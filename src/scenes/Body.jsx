import React from 'react';
import Cards from '../components/Cards.jsx';
import './Body.css';
// import Card from '../components/CardItem'
import image1 from '../assets/images/pic.png';
import image2 from '../assets/images/pic2.png';
import image3 from '../assets/images/pic3.png';
import Carousel from '../components/Carousel';

function Body() {
  const images = [image1, image2, image3];
  return (
    <div
      style={{
        backgroundColor: '#f1f1f1',
        width: '100%',
        padding:'2rem',
        paddingBottom: '4rem',
        alignItems: 'center',
        margin: 'auto',
      }}
    >
      <Cards />

      <div
        className='main-card'
        style={{
          margin: 'auto',
          width: '80%',
          display: 'flex',
          
        }}
      >
        <div className='slide-in card'>
          <h1>Develop Kebbi</h1>
          <h2> Great Ideas for the future</h2>
        </div>

        <div
          className='carousel-container'
          style={{
           
          }}
        >
          <Carousel
            className=""
            style={{
            }}
           images={images} />
        </div>
      </div>
    </div>
  );
}

export default Body;
