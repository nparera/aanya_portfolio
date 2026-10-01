import './Contact.css'

export default function Contact() {
    return(
        <div className='contact-wrapper'>
            <div className='left'>
                <h1 className='contact-title'>contact</h1>
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