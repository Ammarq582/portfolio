import CustomButton, { CUSTOM_BUTTON_TYPES } from '../custom-button/custom-button.component';
import HeadingSecondary from '../heading-secondary/heading-secondary.component';
import './project.styles.scss';

const Project = ({project}) => {
    const {name, description, imageUrl, linkAddress} = project;
    return(
        <div className="project-container">
            <div className="project-image">
                <img src={imageUrl} alt={name} />
            </div>

            <div className="project-content">
                <HeadingSecondary>{name}</HeadingSecondary>
                <p>{description}</p>
                <CustomButton target='_blank' linkAddress={linkAddress} buttonType={CUSTOM_BUTTON_TYPES.medium}>
                    Case Study
                </CustomButton>
            </div>
        </div>
    )
}

export default Project;