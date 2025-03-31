//C:\Users\aimen\car-rental\src\components\Header\Header.jsx
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";
import "./header.css";
import logo from "../../assets/logo1.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useContext(CartContext); // ✅ Utilisation correcte du contexte

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="AutoRent" className="logo" />
        </Link>
      </div>

      {/* Bouton pour le menu mobile */}
      <button className="mobile-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Navigation principale */}
      <nav className={`navigation ${isMenuOpen ? "show" : ""}`}>
        <Link to="/vehicules">Véhicules</Link>
        <Link to="/offres">Offres spéciales</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/add-car" className="nav-button">Louer ma voiture</Link>
        <Link to="/login" className="nav-button">Se connecter</Link>
        <Link to="/signup" className="nav-button signup">S'inscrire</Link>

        {/* Icône panier avec compteur */}
        <Link to="/cart" className="cart-icon">
          <FaShoppingCart className="cart-img" />
          {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
        </Link>

        {/* 🔹 Ajout du lien vers l’espace admin */}
        <Link to="/admin/approval" className="nav-button admin-link">Admin</Link>
      </nav>
    </header>
  );
};

export default Header;

