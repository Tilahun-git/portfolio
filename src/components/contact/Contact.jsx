import React from 'react'
import './Contact.css'
import Footer from '../footer/Footer'
import theme from "../../assets/theme.jpg";
import { MdEmail } from 'react-icons/md';
import locationIcon from '../../assets/location-icon.png'
import emailIcon from '../../assets/email-icon.png'
import callIcon from '../../assets/call-icon.png'

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-title">
        <h1 className="">Get in Touch</h1>
        <img src={theme} alt="" className="" />
      </div>
      <div className="contact-sections">
      <div className="contact-one">
          <h1>Let's talk</h1>
          <p>I am currently available to take part in new projects</p>
          <div className="contact-details">
          <div className="contact-detail"><img src={emailIcon} alt="Email image not found" /><p className='email'>tilahuntareke8@gmail.com</p></div>
          <div className="contact-detail"><img src={callIcon} alt="Call image not found" /><p className='phone'>+251983898486</p></div>
          <div className="contact-detail"><img src={locationIcon} alt="Location image not found" /><p className='location'>Addis Ababa, Ethiopia</p></div>
          </div>
        </div>
        <form action="#" className="contact-form">
            <label htmlFor="" className="">Your Name</label><br />
            <input type="text" placeholder='Enter your name' name ="name"/><br/>
            <label htmlFor="" className="">Email</label><br/>
            <img src={MdEmail} alt="" className="email-icon" />
            <input type="email" placeholder='Enter your email'name ="email"/><br/>
            <label htmlFor="message" className="">Write Your Message </label><br/>
            <textarea name="comment" id="" placeholder="Write your comment" rows={10}></textarea><br/>
            <button type ="button"  name ="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
