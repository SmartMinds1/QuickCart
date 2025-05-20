import React, { useState } from 'react';
import { FaBars, FaTimes, FaShoppingCart, FaUser } from 'react-icons/fa';
import './NavBar.css'; 
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo/Brand */}
        <div className="navbar-logo">
          <span>QuickCart</span>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-links">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">Categories</a>
          <a href="#">About</a>
        </div>

        {/* Icons */}
        <div className="navbar-icons">
          <button className="icon-button">
            <FaUser className="icon" />
          </button>
          <button className="icon-button cart-button">
            <FaShoppingCart className="icon" />
            <span className="cart-badge">3</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="mobile-menu-button">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes className="icon" /> : <FaBars className="icon" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="mobile-menu">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">Categories</a>
          <a href="#">About</a>
          <div className="mobile-icons">
            <button className="icon-button">
              <FaUser className="icon" />
            </button>
            <button className="icon-button cart-button">
              <FaShoppingCart className="icon" />
              <span className="cart-badge">3</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;