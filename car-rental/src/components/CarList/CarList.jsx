// src/components/CarList/CarList.jsx
import React from 'react';
import CarCard from '../CarCard/CarCard';
import './carList.css';

const CarList = ({ cars, title = "Véhicules disponibles" }) => {
  if (!cars || cars.length === 0) {
    return (
      <div className="car-list-container">
        <h2 className="car-list-title">{title}</h2>
        <div className="no-cars">
          <p>Aucun véhicule ne correspond à votre recherche.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="car-list-container">
      <div className="list-header">
        <h2 className="car-list-title">{title}</h2>
        <p className="results-count">{cars.length} véhicules trouvés</p>
      </div>
      
      <div className="car-grid">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default CarList;