import './section-container.styles.scss';

const SectionContainer = ({children}) => {
    return(
        <div className="section-container">
            {children}
        </div>
    )
}

export default SectionContainer;