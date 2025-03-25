//C:\Users\aimen\car-rental\src\pages\Contact\Contact.jsx



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './contact.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe, FaCar, FaRoad } from 'react-icons/fa';

const Contact = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsFormSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsFormSubmitted(false);
      e.target.reset();
    }, 3000);
  };

  return (
    <div className="contact-page car-rental-contact">
      <div className="contact-form-section">
        <div className="form-header">
          <FaCar className="form-icon car-icon" />
          <h2>Contactez notre agence</h2>
        </div>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              id="name" 
              placeholder="Votre nom" 
              required 
              className="car-input"
            />
          </div>

          <div className="form-group">
            <input 
              type="email" 
              id="email" 
              placeholder="Votre email" 
              required 
              className="car-input"
            />
          </div>

          <div className="form-group">
            <input 
              type="text" 
              id="subject" 
              placeholder="Objet de votre message" 
              required 
              className="car-input"
            />
          </div>

          <div className="form-group">
            <textarea 
              id="message" 
              placeholder="Détails de votre demande" 
              required 
              className="car-textarea"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className={`send-button ${isFormSubmitted ? 'submitted' : ''}`}
          >
            {isFormSubmitted ? 'Message envoyé !' : 'Envoyer'}
          </button>

          <Link to="/" className="home-button">
            <FaRoad className="button-icon" /> Retour à l'accueil
          </Link>
        </form>
      </div>

      <div className="contact-info-section">
        <h2>Nos coordonnées</h2>
        <div className="title-underline"></div>

        <p className="contact-intro">
          Nous sommes à votre écoute pour toute demande de location
        </p>

        <div className="contact-details">
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <div>
              <span className="contact-label">Adresse:</span> 
              198 Rue de la Location, 75008 Paris
            </div>
          </div>

          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <div>
              <span className="contact-label">Téléphone:</span> 
              +33 1 23 45 67 89
            </div>
          </div>

          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <div>
              <span className="contact-label">Email:</span> 
              contact@locationvoiture.fr
            </div>
          </div>

          <div className="contact-item">
            <FaGlobe className="contact-icon" />
            <div>
              <span className="contact-label">Site web:</span> 
              www.locationvoiture.fr
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;