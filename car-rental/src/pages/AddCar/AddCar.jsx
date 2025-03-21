//C:\Users\aimen\car-rental\src\pages\AddCar\AddCar.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./addCar.css";

const AddCar = () => {
  const [car, setCar] = useState({
    name: "",
    category: "",
    price: "",
    image: null,
    seats: "",
    fuelType: "",
    transmission: "",
    type: "",
    description: "",
  });

  const [previewImage, setPreviewImage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
      convertToBase64(file);
    }
  };

  const convertToBase64 = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setCar((prevCar) => ({ ...prevCar, image: reader.result }));
    };
    reader.onerror = (error) => {
      console.error("Erreur lors de la conversion de l'image : ", error);
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!car.name || !car.price || !car.image) {
      alert("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    const existingCars = JSON.parse(localStorage.getItem("userCars")) || [];
    localStorage.setItem("userCars", JSON.stringify([...existingCars, car]));

    alert("Votre voiture a été ajoutée avec succès !");
    navigate("/vehicules");
  };

  return (
    <div className="add-car-page">
      <div className="add-car-container">
        <h2>Louez votre voiture</h2>
        
        <form onSubmit={handleSubmit} className="add-car-form">
          <div className="form-group">
            <label htmlFor="name">Nom de la voiture</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Ex: Renault Clio"
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Catégorie</label>
            <input
              type="text"
              id="category"
              name="category"
              placeholder="Ex: Économique, Luxe, SUV..."
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">Prix par jour (€)</label>
            <input
              type="number"
              id="price"
              name="price"
              placeholder="Ex: 50"
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group file-input-container">
            <label htmlFor="car-image">Image de la voiture</label>
            <input
              id="car-image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
          </div>

          {previewImage && (
            <div className="image-preview-container">
              <img
                src={previewImage}
                alt="Aperçu de la voiture"
                className="image-preview"
              />
            </div>
          )}

          <div className="form-row">
            <div className="form-group half">
              <label htmlFor="seats">Nombre de places</label>
              <input
                type="number"
                id="seats"
                name="seats"
                placeholder="Ex: 5"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group half">
              <label htmlFor="fuelType">Type de carburant</label>
              <input
                type="text"
                id="fuelType"
                name="fuelType"
                placeholder="Ex: Essence, Diesel, Électrique"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group half">
              <label htmlFor="transmission">Transmission</label>
              <input
                type="text"
                id="transmission"
                name="transmission"
                placeholder="Ex: Manuelle, Automatique"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group half">
              <label htmlFor="type">Type de voiture</label>
              <input
                type="text"
                id="type"
                name="type"
                placeholder="Ex: Berline, SUV, Citadine"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              placeholder="Décrivez votre voiture en quelques lignes..."
              rows="4"
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            Ajouter ma voiture
          </button>
          
          <button type="button" className="return-button" onClick={() => navigate("/")}>
            Accueil
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCar;