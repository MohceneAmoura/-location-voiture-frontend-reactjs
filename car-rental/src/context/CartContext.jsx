//C:\Users\aimen\car-rental\src\context\CartContext.jsx
import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]); // 🔹 Utilisation de cartItems

  const addToCart = (car) => {
    setCartItems((prevCart) => {
      const existingCar = prevCart.find((item) => item.id === car.id);
      if (existingCar) {
        return prevCart.map((item) =>
          item.id === car.id
            ? { ...item, duration: car.duration, totalPrice: car.totalPrice }
            : item
        );
      }
      return [...prevCart, car];
    });
  };

  // ✅ Fonction pour supprimer un élément du panier
  const removeFromCart = (id) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// 🔹 Fonction pour utiliser le contexte facilement
export const useCart = () => useContext(CartContext);
