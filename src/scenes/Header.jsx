import '../App.css';
import { Button } from '../components/Button';
import './Header.css';
import MyComponent from '../components/MyComponent';
import Marquee from 'react-fast-marquee';
// import image1 from '../assets/images/pic.png';
import image2 from '../assets/images/bg.jpg';
import image3 from '../assets/images/bg2.jpg';
import Carousel from '../components/Carousel';

// import Carousel from 'react-bootstrap/Carousel';

function Header() {
  const images = [image2, image3];
  return (
    <>
      <div
        className=''
        style={{
          width: '100%',
        }}
      >
        <div
          className='relative object-cover '
          style={{ height: '90vh' }}
        >
          <Carousel images={images} />
        </div>
        <div className='header-left'>
          <h1 className=' w-full'>
            Kebbi Investment Promotion Agency
          </h1>
          <h4 className=' w-full hidden justify-center md:flex'>
            Driving Economic Growth and Investment Opportunities in
            Kebbi State
          </h4>
          <div className='header-btns '>
            <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
            >
              About
            </Button>
            <Button
              className='btns flex '
              buttonStyle='btn--primary'
              buttonSize='btn--large'
            >
              Discover
            </Button>
          </div>
        </div>
      </div>
      <div
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
      </div>
    </>
  );
}

export default Header;
