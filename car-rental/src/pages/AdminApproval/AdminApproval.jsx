//C:\Users\aimen\car-rental\src\pages\AdminApproval\AdminApproval.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './adminApproval.css';

const AdminApproval = () => {
  const [pendingCars, setPendingCars] = useState([]);
  const [carList, setCarList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Récupérer les voitures en attente et la liste des voitures approuvées depuis le localStorage
    const cars = JSON.parse(localStorage.getItem("pendingCars")) || [];
    setPendingCars(cars);

    const approvedCars = JSON.parse(localStorage.getItem("carList")) || [];
    setCarList(approvedCars);
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

  return (
    <div className="admin-approval-page">
      <h2>Validation des voitures</h2>
      {pendingCars.length === 0 ? (
        <p>Aucune voiture en attente de validation.</p>
      ) : (
        <div className="car-list">
          {pendingCars.map((car, index) => (
            <div key={index} className="car-card">
              {car.image && <img src={car.image} alt={car.name} className="car-image" />}
              <div className="car-details">
                <h3>{car.name}</h3>
                <p>Catégorie: {car.category}</p>
                <p>Prix: {car.price}€/jour</p>
                <p>Places: {car.seats}</p>
                <p>Carburant: {car.fuelType}</p>
                <p>Transmission: {car.transmission}</p>
                <p>Type: {car.type}</p>
                <p>Description: {car.description}</p>
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
