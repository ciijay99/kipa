import '../App.css';
import { Button } from '../components/Button';
import './Header.css';
import MyComponent from '../components/MyComponent';
import Marquee from 'react-fast-marquee';

// import Carousel from 'react-bootstrap/Carousel';

function Header() {
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
