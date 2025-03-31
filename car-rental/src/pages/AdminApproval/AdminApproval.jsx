//C:\Users\aimen\car-rental\src\pages\AdminApproval\AdminApproval.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './adminApproval.css';

const AdminApproval = () => {
  const [pendingCars, setPendingCars] = useState([]);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    // Récupérer les voitures en attente et la liste des voitures approuvées depuis le localStorage
    const cars = JSON.parse(localStorage.getItem("pendingCars")) || [];
    setPendingCars(cars);
  }, []);

  const approveCar = (index) => {
    const updatedPendingCars = [...pendingCars];
    const approvedCar = updatedPendingCars.splice(index, 1)[0];
  
    // Récupérer les voitures approuvées depuis localStorage
    const approvedCars = JSON.parse(localStorage.getItem("carList")) || [];
    localStorage.setItem("carList", JSON.stringify([...approvedCars, approvedCar]));
  
    // Mettre à jour localStorage et l'état des voitures en attente
    localStorage.setItem("pendingCars", JSON.stringify(updatedPendingCars));
    setPendingCars(updatedPendingCars);
  
    // ⚡ Envoyer un événement global pour rafraîchir CarList
    window.dispatchEvent(new Event("carListUpdated"));
  };
  
  const rejectCar = (index) => {
    const updatedPendingCars = [...pendingCars];
    updatedPendingCars.splice(index, 1);
    localStorage.setItem("pendingCars", JSON.stringify(updatedPendingCars));
    setPendingCars(updatedPendingCars);
  };

  const toggleDescription = (index) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="admin-approval-page">
    <h2 className="animated-title">Validation des voitures</h2>
      {pendingCars.length === 0 ? (
        <p>Aucune voiture en attente de validation.</p>
      ) : (
        <div className="car-list">
          {pendingCars.map((car, index) => (
            <div key={index} className="car-card">
              {car.image && <img src={car.image} alt={car.name} className="car-image" />}
              <div className="car-details">
                <h3 data-category={car.category}>{car.name}</h3>
                <p>{car.seats} places</p>
                <p>{car.fuelType}</p>
                <p>{car.transmission}</p>
                <p>{car.type}</p>
              </div>
              
              <button className="description-toggle" onClick={() => toggleDescription(index)}>
                Voir la description
              </button>
              
              {expandedDescriptions[index] && (
                <div className="car-description">
                  <p>{car.description}</p>
                </div>
              )}
              
              <div className="divider"></div>
              
              <div className="price-section">
                <div className="price-tag">
                  {car.price}€<span className="per-day">/jour</span>
                </div>
              </div>
              
              <div className="approval-actions">
                <button onClick={() => approveCar(index)} className="approve-btn">Approuver</button>
                <button onClick={() => rejectCar(index)} className="reject-btn">Rejeter</button>
              </div>
            </div>
          ))}
        </div>
      )}
      <button onClick={() => navigate("/")} className="back-btn">Retour à l'accueil</button>
    </div>
  );
};

export default AdminApproval;