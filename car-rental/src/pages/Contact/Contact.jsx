//C:\Users\aimen\car-rental\src\pages\Contact\Contact.jsx



import React from 'react';
import { Link } from 'react-router-dom';
import './contact.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-form-section">
        <h2>Send us a message</h2>
        
        <form className="contact-form">
          <div className="form-group">
            <input type="text" id="name" placeholder="Name" required />
          </div>
          
          <div className="form-group">
            <input type="email" id="email" placeholder="Email" required />
          </div>
          
          <div className="form-group">
            <input type="text" id="subject" placeholder="Subject" required />
          </div>
          
          <div className="form-group">
            <textarea id="message" placeholder="Message" required></textarea>
          </div>
          
          <button type="submit" className="send-button">Send Message</button>

          {/* Ajout du bouton Accueil */}
          <Link to="/" className="home-button">Accueil</Link>
        </form>
      </div>
      
      <div className="contact-info-section">
        <h2>Contact us</h2>
        <div className="title-underline"></div>
        
        <p className="contact-intro">
          We're open for any suggestion or just to have a chat
        </p>
        
        <div className="contact-details">
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <div>
              <span className="contact-label">Address:</span> 198 West 21th Street, Suite 721<br />
              New York NY 10016
            </div>
          </div>
          
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <div>
              <span className="contact-label">Phone:</span> + 1235 2355 98
            </div>
          </div>
          
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <div>
              <span className="contact-label">Email:</span> info@yoursite.com
            </div>
          </div>
          
          <div className="contact-item">
            <FaGlobe className="contact-icon" />
            <div>
              <span className="contact-label">Website:</span> yoursite.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
