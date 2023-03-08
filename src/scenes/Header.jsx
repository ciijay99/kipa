import '../App.css';
import { Button } from '../components/Button';
import './Header.css';
import MyComponent from '../components/MyComponent';
import Marquee from 'react-fast-marquee';
import image1 from '../assets/images/pic.png';
import image2 from '../assets/images/pic2.png';
import image3 from '../assets/images/pic3.png';
import Carousel from '../components/Carousel';

// import Carousel from 'react-bootstrap/Carousel';

function Header() {
  const images = [image1, image2, image3];
  return (
    <>
      <div className='header-container'>
        <h1>Kebbi Investment Promotion Agency</h1>
        <h4>
          Driving Economic Growth and Investment Opportunities in
          Kebbi State
        </h4>
        <div className='header-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            About us
          </Button>
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
          >
            Discover Kebbi <i className='far fa-play-circle' />
          </Button>
        </div>
      </div>

      <Carousel images={images} />
      {/*       <div
        style={{
          backgroundColor: '#0f6735',
          width: '100%',
        }}
      >
        <Marquee
          className='container moving-container'
          style={{
            margin: 'auto',
            backgroundColor: 'transparent',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          pauseOnHover='true'
          gradientColor={false}
          speed={30}
        >
          <MyComponent />
        </Marquee>
      </div> */}
    </>
  );
}

export default Header;
