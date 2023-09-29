import './heading-secondary.styles.scss';

const HeadingSecondary = ({children}) => {
    return(
        <h3 className="heading-secondary">
            {children}
        </h3>
    )
}

export default HeadingSecondary;