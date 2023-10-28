import FormInput from '../form-input/form-input.component';
import HeadingPrimary from '../heading-primary/heading-primary.component';
import SectionContainer from '../section-container/section-container.component';
import './section-contact.styles.scss';

const SectionContact = () => {
    return(
        <div id='contact' className="section-contact-container">
            <SectionContainer>
                <HeadingPrimary>
                    <h2>Contact</h2>
                    <p>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
                </HeadingPrimary>
                <form name='contact' method='post' className="contact-form">
                    <input type='hidden' name='form-name' value='contact'/>
                    <FormInput
                    label='Name'
                    type='text'
                    name='name'
                    id='name'
                    placeholder='Enter Your Name'
                    />
                    <FormInput
                    label='Email'
                    type='email'
                    name='email'
                    id='email'
                    placeholder='Enter Your Email'
                    />
                    <FormInput
                    textbox='true'
                    label='Message'
                    name='message'
                    id='message'
                    placeholder='Enter Your Message'
                    />

                    <button className='form-button' type='submit'>Submit</button>
                </form>
            </SectionContainer>
        </div>
    )
}

export default SectionContact;