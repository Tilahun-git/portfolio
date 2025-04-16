import React from 'react'
import './Contact.css'
import theme from "../../assets/theme.jpg";
const Contact = () => {
  return (
    <div>
      <div className="contact-title">
        <h1 className="">Get in Touch</h1>
        <img src={theme} alt="" className="" />
        <div className="contact-one">
          <h1>Let's talk</h1>
          <p className='email'>tilahuntareke8@gmail.com</p>
          <p className='phone'>+251983898486</p>
          <p className='location'>Addis Ababa, Ethiopia</p>
        </div>
        <div className="contact-two">
          <form action="#" className="contact-form">
            <label htmlFor="" className="">Your Name</label><br />
            <input type="text" placeholder='Enter your name' name ="name"/><br/>
            <label htmlFor="" className="">Email</label><br/>
            <input type="email" placeholder='Enter your email'name ="email"/><br/>
            <label htmlFor="message" className="">Write Your Message </label><br/>
            <textarea name="comment" id="" placeholder="Write your comment" rows={10}></textarea><br/>
            <button type ="button"  name ="submit">Submit</button>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Contact
