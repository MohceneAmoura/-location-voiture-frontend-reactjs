//C:\Users\aimen\car-rental\src\pages\Cart\Cart.jsx
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext); // ✅ Ajout de la fonction removeFromCart

  return (
    <div className="cart-page">
      <h2>Panier</h2>
      {cartItems.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <ul className="cart-list">
          {cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-image" />
              <div className="cart-details">
                <h3>{item.name}</h3>
                <p>
                  {item.duration} jour(s) x {item.price}€ = <strong>{item.totalPrice}€</strong>
                </p>
              </div>
              {/* ✅ Ajout du bouton "Supprimer" */}
              <button 
                className="delete-button" 
                onClick={() => removeFromCart(item.id)}
              >
                Supprimer
              </button>
            </li>
          ))}
        </ul>
      )}
      <Link to="/" className="return-home">Retour à l'accueil</Link>
    </div>
  );
};

export default Cart;
