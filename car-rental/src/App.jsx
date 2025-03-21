//C:\Users\aimen\car-rental\src\App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext"; 
import Home from "./pages/Home/Home";
import Vehicule from "./pages/Vehicule/Vehicule";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import CarDetails from "./pages/CarDetails/CarDetails";
import Cart from "./pages/Cart/Cart";
import AddCar from "./pages/AddCar/AddCar"; // Ajout de la page d'ajout de voiture

const App = () => {
  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vehicules" element={<Vehicule />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/car/:id" element={<CarDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/add-car" element={<AddCar />} />
        </Routes>
      </CartProvider>
    </Router>
  );
};

export default App;
