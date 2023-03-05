import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import  Logo  from '../assets/images/KIPA-green.png'
import './Navbar.css';

function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960 ){
            setButton(false);
        }else{
            setButton(true);
        }
    };
    window.addEventListener('resize', showButton);

    useEffect(() => {
        showButton()
    }, [])

  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                <img 
                  src={ Logo }
                  alt=" " 
                  className="logo-img"
                 /> 
                </Link>

                <div className="menu-icon" onClick={handleClick}>
                   X <i className={click ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} />
                </div>

                <ul className={click ? "nav-menu active" : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/"
                         className="nav-links" 
                         onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/About"
                         className="nav-links"
                         onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Discover" 
                            className="nav-links"
                            onClick={closeMobileMenu}>
                            Discover
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Publication" 
                            className="nav-links"
                            onClick={closeMobileMenu}>
                            Publication
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Contact" 
                            className="nav-links"
                            onClick={closeMobileMenu}>
                            Contact
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Portal"
                         className="nav-links-mobile" 
                         onClick={closeMobileMenu}>
                            Portal
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>Portal</Button>}
            </div>
        </nav>
    </>
  )
}

export default Navbar
