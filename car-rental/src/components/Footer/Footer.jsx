// src/components/Footer/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFacebook, FaTwitter, FaInstagram, FaLinkedin, 
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt 
} from 'react-icons/fa';
import './footer.css';
import logo from '../../assets/logo1.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Section Logo & Description */}
          <div className="footer-section logo-section">
            <img src={logo} alt="AutoRent" className="footer-logo" />
            <p className="company-description">
              AutoRent propose des solutions de location de véhicules adaptées à tous vos besoins, 
              avec un service client de qualité et des tarifs compétitifs.
            </p>
            <div className="social-links">
              {[
                { Icon: FaFacebook, link: "https://facebook.com", title: "Facebook" },
                { Icon: FaTwitter, link: "https://twitter.com", title: "Twitter" },
                { Icon: FaInstagram, link: "https://instagram.com", title: "Instagram" },
                { Icon: FaLinkedin, link: "https://linkedin.com", title: "LinkedIn" }
              ].map(({ Icon, link, title }) => (
                <a 
                  key={title}
                  href={link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  title={title} 
                  className="social-link"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Section Liens Rapides */}
          <nav className="footer-section quick-links">
            <h3 className="footer-title">Liens rapides</h3>
            <ul className="footer-links">
              {[
                { to: "/", label: "Accueil" },
                { to: "/vehicules", label: "Véhicules" },
                { to: "/offres", label: "Offres spéciales" },
                { to: "/faq", label: "FAQ" },
                { to: "/contact", label: "Contact" }
              ].map(({ to, label }) => (
                <li key={to}><Link to={to}>{label}</Link></li>
              ))}
            </ul>
          </nav>

          {/* Section Services */}
          <nav className="footer-section services">
            <h3 className="footer-title">Nos services</h3>
            <ul className="footer-links">
              {[
                { to: "/location-courte-duree", label: "Location courte durée" },
                { to: "/location-longue-duree", label: "Location longue durée" },
                { to: "/transfert-aeroport", label: "Transfert aéroport" },
                { to: "/location-avec-chauffeur", label: "Location avec chauffeur" }
              ].map(({ to, label }) => (
                <li key={to}><Link to={to}>{label}</Link></li>
              ))}
            </ul>
          </nav>

          {/* Section Contact */}
          <div className="footer-section contact">
            <h3 className="footer-title">Contact</h3>
            <ul className="contact-info">
              {[
                { Icon: FaPhoneAlt, content: "+33 1 23 45 67 89", type: "tel" },
                { Icon: FaEnvelope, content: "contact@autorent.com", type: "mailto" },
                { Icon: FaMapMarkerAlt, content: "123 Avenue des Champs-Élysées, Paris", type: "address" }
              ].map(({ Icon, content, type }) => (
                <li key={content}>
                  <Icon />
                  {type !== "address" ? (
                    <a href={`${type}:${content}`}>{content}</a>
                  ) : (
                    <span>{content}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} AutoRent. Tous droits réservés.</p>
          <div className="footer-legal-links">
            <Link to="/mentions-legales">Mentions légales</Link>
            <Link to="/politique-confidentialite">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;