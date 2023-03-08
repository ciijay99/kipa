import React from 'react';
import Cards from '../components/Cards.jsx';
import './Body.css';
// import Card from '../components/CardItem'
import image1 from '../assets/images/KIPA-black.png';

function Body() {
  return (
    <div
      style={{
        backgroundColor: '#f1f1f1',
        width: '100%',
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
          width: '90%',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <div className='slide-in card'>
          <h1>Develop Kebbi</h1>
          <h2> Great Ideas for the future</h2>
        </div>

        <div
          className='carosuel'
          style={{
            width: '100%',
          }}
        >
          <img
            src={image1}
            alt=''
            width='100%'
            style={{
              minHeight: '100%',
              maxWidth: 500,
              minWidth: '100',
              maxHeight: 150,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Body;
