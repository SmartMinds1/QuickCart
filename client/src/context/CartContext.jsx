import React, { createContext, useState, useContext } from "react";

// Create the context
const CartContext = createContext();

// Provider component
export const CartProvider = ({ children }) => {

//defining the cartItems array
const [cartItems, setCartItems] = useState([]);

//Update the cart interms of itemName and count.
const updateCart = (itemName, count) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.itemName === itemName);
        if (existing) {
          return prev.map(item =>
            item.itemName === itemName ? { ...item, count } : item
          );
        } else {
          return [...prev, { itemName, count }];
        }
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, updateCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook to use the cart context
export const useCart = () => useContext(CartContext);
