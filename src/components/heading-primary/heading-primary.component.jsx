import './heading-primary.styles.scss'

const HeadingPrimary = ({children}) => {
    return(
        <h2 className="heading-primary">
            {children}
        </h2>
    )
}

export default HeadingPrimary;