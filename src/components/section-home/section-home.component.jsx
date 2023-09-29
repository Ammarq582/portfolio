import CustomButton, { CUSTOM_BUTTON_TYPES } from '../custom-button/custom-button.component';
import MouseAnimation from '../mouse-animation/mouse-animation.component';
import './section-home.styles.scss';

const SectionHome = () => {
    return (
        <div className="section-home-container">
            <div className="section-home-content">
                <h1>Hey, I'm Ammar Qureshi</h1>
                <p>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
                <CustomButton buttonType={CUSTOM_BUTTON_TYPES.large}>Projects</CustomButton>
            </div>
            <MouseAnimation/>
        </div>
    )
}

export default SectionHome;