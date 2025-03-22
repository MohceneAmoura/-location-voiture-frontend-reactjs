//C:\Users\aimen\car-rental\src\components\CarCard\CarCard.jsx
import React, { useState, useContext } from 'react';
import { FaCar, FaGasPump, FaUserFriends, FaCog, FaHeart, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './carcard.css';

const CarCard = ({ car }) => {
  const [showDescription, setShowDescription] = useState(false);
  const { addToCart } = useContext(CartContext);

  return (
    <div className="car-card">
      <div className="car-image-container">
        <img src={car.image} alt={car.name} className="car-image" />
      </div>
      
      <div className="car-details">
        <div className="car-header">
          <h3 className="car-name">{car.name}</h3>
          <div className="car-category">{car.category}</div>
        </div>
        
        <div className="car-features">
          <div className="feature">
            <FaUserFriends />
            <span>{car.seats} places</span>
          </div>
          <div className="feature">
            <FaGasPump />
            <span>{car.fuelType}</span>
          </div>
          <div className="feature">
            <FaCog />
            <span>{car.transmission}</span>
          </div>
          <div className="feature">
            <FaCar />
            <span>{car.type}</span>
          </div>
        </div>
        
        <button 
          className="description-toggle"
          onClick={() => setShowDescription(!showDescription)}
        >
          {showDescription ? 'Masquer la description' : 'Voir la description'}
          {showDescription ? <FaChevronUp /> : <FaChevronDown />}
        </button>
        
        {showDescription && (
          <div className="car-description">
            <p>{car.description || "Aucune description disponible pour ce véhicule."}</p>
          </div>
        )}

        <div className="car-footer">
          <div className="car-price">
            <span className="price">{car.price}€</span>
            <span className="price-period">/jour</span>
          </div>

          <div className="car-actions">
            <Link to={`/car/${car.id}`} className="view-details-button">
              Voir détails
            </Link>
            <button className="favorite-button">
              <FaHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
