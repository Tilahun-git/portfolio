import React from 'react'
import './Contact.css'
import Footer from '../footer/Footer'
import theme from "../../assets/theme.jpg";
import locationIcon from '../../assets/location-icon.png'
import emailIcon from '../../assets/email-icon.png'
import callIcon from '../../assets/call-icon.png'

// pushed but not still visible in my remote repository

// WARNING: The API key below is exposed in the frontend. For production, use a backend proxy or environment variable if possible.

const Contact = () => {
    const [status, setStatus] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("");
    setLoading(true);
    const formData = new FormData(event.target);

    // Honeypot field for spam protection
    if (formData.get("website")) {
      setStatus("Spam detected. Submission blocked.");
      setLoading(false);
      return;
    }

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        setStatus("Thank you! Your message has been sent.");
        event.target.reset();   
      } else {
        setStatus(res.message || "Something went wrong. Please try again later.");
      }
    } catch (error) {
      setStatus("Network error. Please try again later.");
    }
    setLoading(false);
  };
  return (
    <div className="contact">
      <div className="contact-title">
        <h1 className="">Get in Touch</h1>
        <img src={theme} alt="Contact section background pattern" className="" />
      </div>
      <div className="contact-sections">
       <div className="contact-one">
          <h1>Let's talk</h1>
          <p>I am currently available to take part in new projects</p>
          <div className="contact-details">
          <div className="contact-detail"><img src={emailIcon} alt="Email icon" /><p className='email'>tilahuntareke8@gmail.com</p></div>
          <div className="contact-detail"><img src={callIcon} alt="Call icon" /><p className='phone'>+251983898486</p></div>
          <div className="contact-detail"><img src={locationIcon} alt="Location icon" /><p className='location'>Addis Ababa, Ethiopia</p></div>
        </div>
      </div>
        <form onSubmit={onSubmit} className="contact-form" autoComplete="off">
            <label htmlFor="name" className="">Your Name</label><br />
            <input type="text" placeholder='Enter your name' name ="name" id="name" autoComplete='off' required/><br/>
            <label htmlFor="email" className="">Email</label><br/>
            <input type="email" placeholder='Enter your email' name ="email" id="email" autoComplete='off' required/><br/>
            <label htmlFor="message" className="">Write Your Message </label><br/>
            <textarea name="comment" id="message" placeholder="Write your comment" rows={10} required></textarea><br/>
            {/* Honeypot field (hidden from users) */}
            <input type="text" name="website" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
            <button type ="submit" disabled={loading}>{loading ? "Sending..." : "Submit"}</button>
            <div aria-live="polite" style={{ minHeight: 24, color: status.includes('Thank you') ? 'green' : 'red', marginTop: 8 }}>{status}</div>
        </form>
      </div>
    </div>
  )
}

export default Contact
