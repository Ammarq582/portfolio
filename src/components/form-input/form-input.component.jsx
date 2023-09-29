import './form-input.styles.scss';

const FormInput = ({label, textbox, ...props}) => {
    return(
        <div className="form-input-container">
            <label htmlFor={props.id}>{label}</label>
            {
                textbox ? 
                <textarea rows='10' {...props} className='form-input'/>
                :
                <input {...props} className='form-input'/>
            }
        </div>
    )
}

export default FormInput;