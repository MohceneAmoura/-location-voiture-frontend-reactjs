// src/components/CarList/CarList.jsx
import React, { useState, useEffect } from 'react';
import CarCard from '../CarCard/CarCard';
import './carList.css';

const CarList = ({ cars, title = "Véhicules disponibles" }) => {
  const [allCars, setAllCars] = useState([]);
  const [openDescriptions, setOpenDescriptions] = useState({});

  // Charger les voitures approuvées depuis localStorage
  useEffect(() => {
    const approvedCars = JSON.parse(localStorage.getItem("carList")) || [];
    setAllCars([...cars, ...approvedCars]);

    const handleCarUpdate = () => {
      const updatedApprovedCars = JSON.parse(localStorage.getItem("carList")) || [];
      setAllCars([...cars, ...updatedApprovedCars]);
    };

    window.addEventListener("carListUpdated", handleCarUpdate);

    return () => {
      window.removeEventListener("carListUpdated", handleCarUpdate);
    };
  }, [cars]);

  const toggleDescription = (carId) => {
    setOpenDescriptions((prev) => ({
      ...prev,
      [carId]: !prev[carId],
    }));
  };

  if (!allCars || allCars.length === 0) {
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
        <p className="results-count">{allCars.length} véhicules trouvés</p>
      </div>

      <div className="car-grid">
        {allCars.map((car) => (
          <CarCard 
            key={car.id} 
            car={car} 
            isOpen={!!openDescriptions[car.id]} 
            toggleDescription={() => toggleDescription(car.id)} 
          />
        ))}
      </div>
    </div>
  );
};

export default CarList;
