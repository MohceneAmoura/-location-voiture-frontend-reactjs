//C:\Users\aimen\car-rental\src\pages\Cart\Cart.jsx
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { FaTimes, FaCar, FaCalendarAlt, FaCreditCard } from "react-icons/fa";
import "./cart.css";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  // Calcul du total
  const total = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h2>
          <FaCar className="header-icon" /> Votre Réservation
        </h2>
        <div className="header-divider"></div>
      </div>

      {cartItems.length === 0 ? (
        <div className="empty-cart">

          <h3>Votre panier est vide</h3>
          <p>Explorez notre gamme de véhicules et trouvez la perle rare</p>
          <Link to="/vehicules" className="browse-btn">
            Voir nos véhicules
          </Link>
        </div>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item" data-aos="fade-up">
                <div className="item-image-container">
                  <img src={item.image} alt={item.name} className="cart-image" />
                  <div className="car-badge">{item.category}</div>
                </div>
                
                <div className="cart-details">
                  <h3>{item.name}</h3>
                  <div className="detail-row">
                    <span className="detail-label">
                      <FaCalendarAlt /> Durée:
                    </span>
                    <span>{item.duration} jour(s)</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Prix/jour:</span>
                    <span>{item.price}€</span>
                  </div>
                  <div className="detail-row total">
                    <span className="detail-label">Total:</span>
                    <span className="price">{item.totalPrice}€</span>
                  </div>
                </div>

                <button
                  className="delete-button"
                  onClick={() => removeFromCart(item.id)}
                  aria-label="Supprimer"
                >
                  <FaTimes />
                </button>
              </li>
            ))}
          </ul>

          <div className="cart-summary" data-aos="fade-up">
            <h3>
              <FaCreditCard /> Récapitulatif
            </h3>
            <div className="summary-row">
              <span>Sous-total:</span>
              <span>{total}€</span>
            </div>
            <div className="summary-row">
              <span>Frais de service:</span>
              <span>Gratuit</span>
            </div>
            <div className="summary-row total">
              <span>Total à payer:</span>
              <span className="total-price">{total}€</span>
            </div>

            <button className="checkout-btn">Procéder au paiement</button>
            <Link to="/vehicules" className="add-more">
              + Ajouter un autre véhicule
            </Link>
          </div>
        </>
      )}

      <Link to="/" className="return-home">
        ← Retour à l'accueil
      </Link>
    </div>
  );
};

export default Cart;