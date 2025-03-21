//C:\Users\aimen\car-rental\src\pages\CarDetails\CarDetails.jsx
import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { carsData } from "../../data/cars";
import { CartContext } from "../../context/CartContext"; // ✅ Importation du contexte du panier
import { FaCar, FaGasPump, FaUserFriends, FaCog } from "react-icons/fa";
import "./carDetails.css";

const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext); // ✅ Utilisation du contexte du panier
  const [duration, setDuration] = useState(1); // ✅ État pour la durée (1 jour par défaut)

  const car = carsData.find((car) => car.id === parseInt(id));

  if (!car) {
    return <h2 className="not-found">Véhicule introuvable</h2>;
  }

  // ✅ Fonction pour ajouter la voiture au panier
  const handleChoose = () => {
    const totalPrice = car.price * duration;
    const carWithDetails = { ...car, duration, totalPrice };

    addToCart(carWithDetails);
    alert(`${car.name} ajouté pour ${duration} jour(s) (${totalPrice}€)`);
    navigate("/cart"); // ✅ Redirection vers la page du panier
  };

  return (
    <div className="car-details-container">
      <h1 className="car-title">{car.name}</h1>
      <img src={car.image} alt={car.name} className="car-image-large" />

      <div className="car-info">
        <div className="info-block">
          <FaUserFriends /> <span>{car.seats} places</span>
        </div>
        <div className="info-block">
          <FaGasPump /> <span>{car.fuelType}</span>
        </div>
        <div className="info-block">
          <FaCog /> <span>{car.transmission}</span>
        </div>
        <div className="info-block">
          <FaCar /> <span>{car.type}</span>
        </div>
      </div>

      <p className="car-description">{car.description}</p>

      <div className="car-price">
        <strong>Prix :</strong> {car.price}€/jour
      </div>

      {/* ✅ Sélection de la durée */}
      <label htmlFor="duration">Durée (jours) :</label>
      <input
        type="number"
        id="duration"
        min="1"
        value={duration}
        onChange={(e) => setDuration(parseInt(e.target.value))}
        className="duration-input"
      />

      {/* ✅ Bouton "Choisir" */}
      <button className="choose-button" onClick={handleChoose}>
        Choisir
      </button>

      {/* ✅ Bouton de retour à l'accueil */}
      <button className="back-button" onClick={() => navigate("/")}>
        Retour à l'accueil
      </button>
    </div>
  );
};

export default CarDetails;
