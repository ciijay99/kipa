import { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import { Button } from './Button';
import { Menu, Close } from '@mui/icons-material';
import Logo from '../assets/images/KIPA-green.png';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  /* const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  window.addEventListener('resize', showButton);

  useEffect(() => {
    showButton();
  }, []); */

  return (
    <>
      <nav className='bg-green-950 navbar'>
        <div className='navbar-container'>
          <NavLink
            to='/'
            className='navbar-logo'
            onClick={closeMobileMenu}
          >
            <img
              src={Logo}
              alt=' '
              className='logo-img'
            />
          </NavLink>

          <div
            className='menu-icon'
            onClick={handleClick}
          >
            {click ? (
              <Close sx={{ color: 'white' }} />
            ) : (
              <Menu sx={{ color: 'white' }} />
            )}
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <NavLink
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/About'
                className='nav-links'
                activeClassName='active'
                onClick={closeMobileMenu}
              >
                About
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/People'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                People
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/Discover'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Discover
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/Publication'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Publication
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/Contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/Guidelines'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Guidelines
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/Incentives'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Incentives
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/Services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </NavLink>
            </li>
            {/*  <li className='nav-item'>
              <NavLink
                to='/Portal'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Portal
              </NavLink>
            </li> */}
          </ul>
          {/* {button && (
            <Button buttonStyle='btn--outline'>Portal</Button>
          )} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
