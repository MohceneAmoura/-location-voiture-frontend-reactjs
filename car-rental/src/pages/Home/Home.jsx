//src/pages/Home/Home.jsx
import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';
import CarList from '../../components/CarList/CarList';
import Footer from '../../components/Footer/Footer'; // Importation du Footer
import { carsData } from '../../data/cars';
import './home.css';

const Home = () => {
  const [filteredCars, setFilteredCars] = useState(carsData);

  const handleSearch = (query) => {
    if (query.trim() === '') {
      setFilteredCars(carsData);
    } else {
      const filtered = carsData.filter(car => 
        car.name.toLowerCase().includes(query.toLowerCase()) ||
        car.specs.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredCars(filtered);
    }
  };

  return (
    <div className="home-page">
      <Header />
      <main className="main-content">
        <SearchBar onSearch={handleSearch} />
        <CarList cars={filteredCars} />
      </main>
      
      <Footer /> {/* Ajout du Footer ici */}
      
    </div>
    
  );
};

export default Home;
