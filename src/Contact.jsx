import './Contact.css'

export default function Contact() {
  return (
    <div className="contact-wrapper">
      <h2 className="section-heading section-heading--contact">
        Contact
      </h2>

      <div className="info-contact">
        <p id="email">
          email:
          <a href="mailto:aanyamittra@gmail.com">
            aanyamittra@gmail.com
          </a>
        </p>

        <p id="ig">
          instagram:
          <a
            href="https://www.instagram.com/aanyamittra_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @aanyamittra_
          </a>
        </p>
      </div>
    </div>
  )
}