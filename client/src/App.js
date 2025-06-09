import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/general/MainLayout";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import CartItems from "./pages/CartItems";
import { CartProvider } from "./context/CartContext";
import Sneakers from "./products/shoes/Sneakers";

function App() {
  return (
    <CartProvider>
      {" "}
      {/* Wrapping everything in the CartProvider for global Cart Access */}
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/sneakers" element={<Sneakers />} />
          </Route>

          <Route path="/cart" element={<CartItems />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
