import React from 'react'
import './Contact.css' 
const Contacts = () => {
  return (
    <div className='container'>
      <div className='contact'>
        <h1 className='heading'>Contact Us</h1>
      <p className='heading-text'>Have questions or need assistance? We're here to help! <br /> Reach out to our team through any of the channels below.</p>
      </div>

      <div className='contact-details'>

{/* left side */}

      <div className='left-side'>
        <h2 className='left-side-heading'>Get in Touch</h2>
        <p className='left-side-text'>Feel free to contact us via email, phone, or visit our office. We look forward to hearing from you!</p>
        <ul className='contact-list'>
          <li className='list'><span className='list-title'>Email:</span> <a href="mailto:" className='contact-link'> <br />joellembithi@gmail.com </a>
          <span className='contact-info'><br />Typically respond within 24 hours</span> </li>
          <li className='list'><span className='list-title'>Phone:</span> <a href="tel:" className='contact-link'><br />0743861565 </a>
          <span className='contact-info'><br />Mon-Fri, 9am-5pm EST</span></li>


          <li className='list'><span className='list-title'>Office Address:</span> <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className='contact-link'><br />View on Map</a>
          <span><br />123 Commerce Street<br />
Nairobi, KE 10001</span>
</li>   
        </ul>

      </div>

      {/* right side */}

      <div className="right-side">
  <h1 className="title">Send Us a Message</h1>

  <label>Your Name</label>
  <input type="text" className="input-field" />

  <label>Email Address</label>
  <input type="text" className="input-field" />

  <label>Subject</label>
  <input type="text" className="input-field" />

  <label>Message</label>
  <input type="text" className="input-field" />

  <button className="send-button">Send Message</button>
</div>

      </div>
    </div>
  )
}

export default Contacts
