import { Link } from 'react-router-dom';
import './navigation.styles.scss';

const Navigation = () => {
    return(
        <div className="navigation-container">
            <div className="logo-container">
                <span className="logo">AQ</span>
                <h3>Ammar Qureshi</h3>
            </div>
            <div className="links-container">
                <Link className='link'>Home</Link>
                <Link className='link'>About</Link>
                <Link className='link'>Projects</Link>
                <Link className='link'>Contact</Link>
            </div>
        </div>
    )
}

export default Navigation;