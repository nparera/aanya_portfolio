import './Contact.css'

export default function Contact() {
    return(
        <div className='contact-wrapper'>
            <div className='left'>
                <h2 className='section-heading section-heading--contact'>CONTACT</h2>
            </div>
            <div className='info-contact'>
                <p id='email'>email:
                     <a href="mailto:aanyamittra@gmail.com">aanyamittra@gmail.com</a>
                </p>
                <p id='ig'>instagram: 
                    <a href="https://www.instagram.com/aanyamittra_/" target="_blank">@aanyamittra_</a>
                </p>
            </div>
        </div>

    );
}