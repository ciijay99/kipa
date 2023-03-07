import '../App.css';
import { Button } from '../components/Button';
import './Header.css';

function Header() {
  return (
    <div className='header-container'>
      {/* <video src="/videos/vid-1.mp4" autoPlay loop muted /> */}
      <h1>Kebbi Investment Promotion Agency</h1>
      <h4>
        {' '}
        Driving Economic Growth and Investment Opportunities in Kebbi
        State
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
          Watch Media <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default Header;
