//C:\Users\aimen\car-rental\src\pages\Cart\Cart.jsx
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { FaTimes, FaCar, FaCalendarAlt, FaCreditCard, FaArrowLeft, FaShoppingBag } from "react-icons/fa";
import "./cart.css";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate(); // Add useNavigate hook

  // Calcul du total
  const total = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);

  // Handler for checkout button
  const handleCheckout = () => {
    navigate("/payement"); // Navigate to payment page
  };

  return (
    <div className="cart-container">
      <div className="cart-page">
        <div className="cart-header">
          <h2>
            <FaShoppingBag className="header-icon" /> Votre Réservation
          </h2>
          <div className="header-divider"></div>
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-cart-icon">
              <FaShoppingBag />
            </div>
            <h3>Votre panier est vide</h3>
            <p>Explorez notre gamme de véhicules et trouvez la perle rare</p>
            <Link to="/vehicules" className="browse-btn">
              Voir nos véhicules
            </Link>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items-container">
              <h3 className="section-title">
                <FaCar /> Vos Véhicules Sélectionnés
              </h3>
              <ul className="cart-list">
                {cartItems.map((item, index) => (
                  <li key={index} className="cart-item">
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
                        <span>{item.price} DZG</span>
                      </div>
                      <div className="detail-row total">
                        <span className="detail-label">Total:</span>
                        <span className="price">{item.totalPrice} DZG</span>
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
              
              <Link to="/vehicules" className="add-more-btn">
                + Ajouter un autre véhicule
              </Link>
            </div>

            <div className="cart-summary">
              <h3>
                <FaCreditCard /> Récapitulatif
              </h3>
              <div className="summary-rows">
                <div className="summary-row">
                  <span>Sous-total:</span>
                  <span>{total} DZG</span>
                </div>
                <div className="summary-row">
                  <span>Frais de service:</span>
                  <span>Gratuit</span>
                </div>
                <div className="summary-row total">
                  <span>Total à payer:</span>
                  <span className="total-price">{total} DZG</span>
                </div>
              </div>

              {/* Update the checkout button to use the handler */}
              <button className="checkout-btn" onClick={handleCheckout}>Procéder au paiement</button>
              
              <div className="payment-methods">
                <span>Nous acceptons:</span>
                <div className="payment-icons">
                  <img src="/images/payment/Visa.png" alt="Visa" className="payment-icon" loading="lazy" />
                  <img src="/images/payment/mastercard.png" alt="Mastercard" className="payment-icon" loading="lazy" />
                  <img src="/images/payment/paypal.png" alt="PayPal" className="payment-icon" loading="lazy" />
                  <img src="/images/payment/cb.png" alt="Carte Bancaire" className="payment-icon" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        )}

        <Link to="/" className="return-home">
          <FaArrowLeft /> Retour à l'accueil
        </Link>
      </div>
    </div>
  );
};

export default Cart;