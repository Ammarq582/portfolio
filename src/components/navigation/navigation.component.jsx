import { HashLink as Link } from 'react-router-hash-link';
import './navigation.styles.scss';
import ammarPhoto from '../../Assets/Edited Ammar.jpg';
import { useState } from 'react';

const Navigation = () => {
    const [isMenuOpen, setisMenuOpen] = useState(false);

    const menuClickHander = () => {
        setisMenuOpen(!isMenuOpen);    
    }

    return(
        <div className="navigation">
            <div className="navigation-container">
                <div className="logo-container">
                    <div className="logo">
                        <img src={ammarPhoto} alt="ammar" />
                    </div>
                    <h3>Ammar Qureshi</h3>
                </div>
                <div className="links-container">
                    <Link to='/#home' className='link' onClick={menuClickHander}>Home</Link>
                    <Link to='#about' className='link' onClick={menuClickHander}>About</Link>
                    <Link to='#projects' className='link' onClick={menuClickHander}>Projects</Link>
                    <Link to='#contact' className='link' onClick={menuClickHander}>Contact</Link>
                </div>

                <div className="ham-menu-cont" onClick={menuClickHander}>
                    <img src="https://d33wubrfki0l68.cloudfront.net/79e75114856ae61628d2ad26504e3ff4ab2c71b6/f06a4/assets/svg/ham-menu.svg" alt="hamburger menu" className={`${isMenuOpen ? 'd-none' : ''}`}/>
                    <img src="https://d33wubrfki0l68.cloudfront.net/de2a681c8ca1630b29949b3a34bf158a686a0554/6a0ec/assets/svg/ham-menu-close.svg" alt="hamburger menu close" className={`${isMenuOpen ? '' : 'd-none'}`}/>
                </div>
            </div>

                <div className={`header__sm-menu${isMenuOpen ? '--active' : ''}`}>
                    <div className="header__sm-menu-content">
                        <ul className="header__sm-menu-links">
                        <li className="header__sm-menu-link">
                            <a href="./"> Home </a>
                        </li>

                        <li className="header__sm-menu-link">
                            <a href="./#about"> About </a>
                        </li>

                        <li className="header__sm-menu-link">
                            <a href="./#projects"> Projects </a>
                        </li>

                        <li className="header__sm-menu-link">
                            <a href="./#contact"> Contact </a>
                        </li>
                        </ul>
                    </div>
                </div>
        </div>
    )
}

export default Navigation;