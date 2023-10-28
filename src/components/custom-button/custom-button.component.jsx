import { HashLink as Link } from 'react-router-hash-link';
import './custom-button.styles.scss';

export const CUSTOM_BUTTON_TYPES = {
    base: 'base',
    medium: 'medium',
    large: 'large',
}

const CustomButton = ({children, buttonType, linkAddress, target}) => {
    return(
        <Link
        to={linkAddress}
        className={`custom-button-container ${buttonType ? buttonType : CUSTOM_BUTTON_TYPES.base}`}
        target={target ? target : '_self'}
        >
            {children}
        </Link>
    )
}

export default CustomButton;