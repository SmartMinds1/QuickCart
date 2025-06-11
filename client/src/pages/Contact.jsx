import React from 'react'
import '../styles/contact.css'
const Contacts = () => {
  return (
    <div className='container'>
      <div className='contact'>
        <h1 className='heading'>Contact Us</h1>
      <p className='heading-text'><span>Have questions or need assistance?</span> We're here to help! <br /> </p>
      <p className='heading-text2'>Reach out to our team through any of the channels below.</p>
      </div>

      <div className='contact-details'>

{/* left side */}

      <div className='left-side'>
        <h2 className='left-side-heading'>Get in Touch</h2>
        <p className='left-side-text'>Feel free to contact us via email, phone, or visit our office. We look forward to hearing from you!</p>
        <ul className='contact-list'>
          <li className='list'><span className='list-title'>Email:</span> <a href="mailto:" className='contact-link'> <br />quickcartteam@gmail.com </a>
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
  <input type="text" className="input-field" placeholder='Enter your Name' />

  <label>Email Address</label>
  <input type="text" className="input-field" placeholder='Enter your Email' />

  <label>Subject</label>
  <input type="text" className="input-field" placeholder='Enter your Subject' />

  <label>Message</label>
  <input type="text" className="input-field-mes" placeholder='Enter your message here!' />

  <button className="send-button">Send Message</button>
</div>

<div className="faq-section">
  <h2 className="faq-title"> Frequently Asked Questions</h2>
  <ul className="faq-list">
    <li>
      <p className="faq-question">How long does it take to get a reply?</p>
      <p className="faq-answer">We usually respond within 24 hours.</p>
    </li>
    <li>
      <p className="faq-question">Do you offer customer support on weekends?</p>
      <p className="faq-answer">Yes, we offer limited support during weekends.</p>
    </li>
    <li>
      <p className="faq-question">Can I visit your office without an appointment?</p>
      <p className="faq-answer">We recommend calling ahead to schedule your visit.</p>
    </li>
  </ul>
</div>

<div className="testimonials-section">
  <h2 className="testimonials-title">What Our Clients Say!</h2>
  <blockquote className="testimonial">
    “The support team was super helpful and friendly!” – Sarah M.
  </blockquote>
  <blockquote className="testimonial">
    “Very professional service. Will contact again.” – Daniel K.
  </blockquote>
</div>

      </div>
    </div>
  )
}

export default Contacts
