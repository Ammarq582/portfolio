import { Link } from 'react-router-dom';
import './section-footer.styles.scss';

const SectionFooter = () => {
    const date = new Date();
    const year = date.getFullYear();
    return(
        <div className="section-footer">
            <div className="footer-content">

                <div className="footer-content__upper">
                    <div className="description">
                        <h2>Ammar Qureshi</h2>
                        <p>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
                    </div>
                    <div className="social-links">
                        <h2>Social</h2>
                        <div className="social-links-container">
                            <Link className='link' to='https://www.linkedin.com/in/ammar-qureshi-79a0b91b6' target='_blank'>
                                <img src="https://d33wubrfki0l68.cloudfront.net/7f29579dde49e02480372aa49f7189c5536b0118/34b92/assets/png/linkedin-ico.png" alt="linkedin" />
                            </Link>
                            <Link className='link' to="https://github.com/Ammarq582?tab=repositories" target='_blank'>
                                <img src="https://d33wubrfki0l68.cloudfront.net/5557d5a11584d7201a38ee1a95200f57a4cc0f88/15085/assets/png/github-ico.png" alt="linkedin" />
                            </Link>
                        </div>
                    </div>    
                </div>

                <div className="footer-content__lower">
                    {`© Copyright ${year}. `}
                    Made by <Link to='#'>Ammar Qureshi</Link>
                </div>
            </div>
        </div>
    )
}

export default SectionFooter;