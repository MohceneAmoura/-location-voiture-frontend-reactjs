// src/components/Footer/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFacebook, FaTwitter, FaInstagram, FaLinkedin, 
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt 
} from 'react-icons/fa';
import './footer.css';
import logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        {/* Section Logo & Description */}
        <div className="footer-section">
          <img src={logo} alt="AutoRent" className="footer-logo" />
          <p className="company-description">
            AutoRent propose des solutions de location de véhicules adaptées à tous vos besoins, 
            avec un service client de qualité et des tarifs compétitifs.
          </p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook" className="social-link">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter" className="social-link">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram" className="social-link">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="social-link">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Section Liens Rapides */}
        <nav className="footer-section">
          <h3 className="footer-title">Liens rapides</h3>
          <ul className="footer-links">
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/vehicules">Véhicules</Link></li>
            <li><Link to="/offres">Offres spéciales</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        {/* Section Services */}
        <nav className="footer-section">
          <h3 className="footer-title">Nos services</h3>
          <ul className="footer-links">
            <li><Link to="/location-courte-duree">Location courte durée</Link></li>
            <li><Link to="/location-longue-duree">Location longue durée</Link></li>
            <li><Link to="/transfert-aeroport">Transfert aéroport</Link></li>
            <li><Link to="/location-avec-chauffeur">Location avec chauffeur</Link></li>
          </ul>
        </nav>

        {/* Section Contact */}
        <div className="footer-section">
          <h3 className="footer-title">Contact</h3>
          <ul className="contact-info">
            <li><FaPhoneAlt /> <a href="tel:+33123456789">+33 1 23 45 67 89</a></li>
            <li><FaEnvelope /> <a href="mailto:contact@autorent.com">contact@autorent.com</a></li>
            <li><FaMapMarkerAlt /> 123 Avenue des Champs-Élysées, Paris</li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
