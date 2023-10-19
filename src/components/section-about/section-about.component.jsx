import { Link } from 'react-router-dom';
import CustomButton, { CUSTOM_BUTTON_TYPES } from '../custom-button/custom-button.component';
import HeadingPrimary from '../heading-primary/heading-primary.component';
import HeadingSecondary from '../heading-secondary/heading-secondary.component';
import './section-about.styles.scss'
import SectionContainer from '../section-container/section-container.component';

const mySkills = ['HTML','CSS','JavaScript','React','SASS','GIT','Github','Responsive Design','SEO','Terminal','Express Basics','SQL Basics'];

const SectionAbout = () => {
    return(
        <div id='about' className="section-about">
            <SectionContainer>
                <HeadingPrimary>
                    <h2>About Me</h2>
                    <p>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
                </HeadingPrimary>
                <div className="section-about-content">
                <div className="section-about-content--main">
                    <HeadingSecondary>Get to know me!</HeadingSecondary>
                    <div className="description">
                        <p>I'm a <strong>Frontend Web Developer</strong> building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <strong>Projects</strong> section.</p>
                        <p>I also like sharing content related to the stuff that I have learned over the years in <strong>Web Development</strong> so it can help other people of the Dev Community. Feel free to Connect or Follow me on my <Link>Linkedin</Link> where I post useful content related to Web Development and Programming</p>
                        <p>I'm open to <strong>Job</strong> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <strong>contact</strong> me.</p>
                    </div>
                    <CustomButton buttonType={CUSTOM_BUTTON_TYPES.medium}>Contact</CustomButton>
                </div>
                <div className="section-about-content--skills">
                    <HeadingSecondary>My Skills</HeadingSecondary>
                    <ul className="skills">
                        {
                            mySkills.map(skill => <li className='skill'>{skill}</li>)
                        }
                    </ul>
                </div>
                </div>
            </SectionContainer>
        </div>
    )
}

export default SectionAbout;