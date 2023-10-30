import { HashLink as Link } from 'react-router-hash-link';
import './navigation.styles.scss';
import ammarPhoto from '../../Assets/Edited Ammar.jpg';
import { useState } from 'react';

const Navigation = () => {
    const [isMenuOpen, setisMenuOpen] = useState(false);

    const menuClickHander = () => {
        setisMenuOpen(!isMenuOpen);    
    }

    const closeMenuOnLinkClick = () => {
        setisMenuOpen(false);
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
                    <Link to='/#home' className='link'>Home</Link>
                    <Link to='#about' className='link'>About</Link>
                    <Link to='#projects' className='link'>Projects</Link>
                    <Link to='#contact' className='link'>Contact</Link>
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
                            <Link to="./#home" onClick={closeMenuOnLinkClick}> Home </Link>
                        </li>

                        <li className="header__sm-menu-link">
                            <Link to="./#about" onClick={closeMenuOnLinkClick}> About </Link>
                        </li>

                        <li className="header__sm-menu-link">
                            <Link to="./#projects" onClick={closeMenuOnLinkClick}> Projects </Link>
                        </li>

                        <li className="header__sm-menu-link">
                            <Link to="./#contact" onClick={closeMenuOnLinkClick}> Contact </Link>
                        </li>
                        </ul>
                    </div>
                </div>
        </div>
    )
}

export default Navigation;