
import CustomButton, { CUSTOM_BUTTON_TYPES } from '../custom-button/custom-button.component';
import HeadingPrimary from '../heading-primary/heading-primary.component';
import HeadingSecondary from '../heading-secondary/heading-secondary.component';
import './section-about.styles.scss'
import SectionContainer from '../section-container/section-container.component';

const mySkills = [
    'ReactJS',
    'Redux',
    'NextJS',
    'SvelteJS',
    'SvelteKit',
    'TypeScript',
    'JavaScript',
    'TailwindCSS',
    'HTML5',
    'CSS3',
    'SASS',
    'GIT',
    'Github',
];

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
                        <p>As a skilled front-end developer, I specialize in creating dynamic and responsive web applications using modern technologies. With expertise in React, full-stack development with Next.js and SvelteKit, and styling with Tailwind CSS, I bring a comprehensive approach to building seamless user experiences.</p>
                        <p>I am dedicated to continuous learning and staying up-to-date with the latest industry trends to deliver cutting-edge solutions. My goal is to not only meet but exceed client expectations by delivering high-quality and maintainable code.</p>
                    </div>
                    <CustomButton linkAddress='#contact' buttonType={CUSTOM_BUTTON_TYPES.medium}>
                        Contact
                    </CustomButton>
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
