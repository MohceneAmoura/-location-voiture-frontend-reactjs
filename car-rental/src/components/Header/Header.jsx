//C:\Users\aimen\car-rental\src\components\Header\Header.jsx
import React, { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaCar, FaUserCircle } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";
import "./header.css";
import logo from "../../assets/logo1.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useContext(CartContext);
  const location = useLocation();
  
  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  // Check if path is active
  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="AutoRent" className="logo" />
        </Link>
      </div>

      {/* Mobile menu button */}
      <button 
        className="mobile-menu-button" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Main navigation */}
      <nav className={`navigation ${isMenuOpen ? "show" : ""}`}>
        <Link to="/" className={`nav-link ${isActive("/")}`} onClick={handleLinkClick}>Accueil</Link>
        <Link to="/vehicules" className={`nav-link ${isActive("/vehicules")}`} onClick={handleLinkClick}>Véhicules</Link>
        <Link to="/contact" className={`nav-link ${isActive("/contact")}`} onClick={handleLinkClick}>Contact</Link>
        
        <div className="action-buttons">
          <Link to="/add-car" className="nav-button" onClick={handleLinkClick}>
            Louer ma voiture
          </Link>
          <Link to="/login" className="nav-button login" onClick={handleLinkClick}>
            <FaUserCircle className="button-icon" />
            Se connecter
          </Link>
          <Link to="/signup" className="nav-button signup" onClick={handleLinkClick}>
            S'inscrire
          </Link>
        </div>

        {/* Cart icon with counter */}
        <Link to="/cart" className="cart-icon" onClick={handleLinkClick}>
  <FaCar className="cart-img" />
  {cartItems.length > 0 && (
    <span className="cart-count" aria-label={`${cartItems.length} items in cart`}>
      {cartItems.length}
    </span>
  )}
</Link>

        {/* Admin link - conditionally render based on user role */}
        <Link to="/admin/approval" className="nav-button admin-link" onClick={handleLinkClick}>
          Admin
        </Link>
      </nav>
    </header>
  );
};

export default Header;
