import React, { useState } from 'react';
import { FaBars, FaTimes, FaShoppingCart, FaUser } from 'react-icons/fa';
<<<<<<< HEAD
import './NavBar.css'; 
import { Link } from 'react-router-dom';
import Contacts from '../../pages/Contact/Contacts';
=======
import './NavBar.css';
import "../../styles/loginSignUp.css";
import Modal from "../popUps/Modal";
import SignUp from  "../../pages/SignUp";
import SignIn from "../../pages/SignIn";
import ForgotPassword from '../../pages/ForgotPassword';



>>>>>>> 2db0ad05285ea5be014a3ec940201f9c5488f1ec
const NavBar = () => {
  //This is for the mobile 
  const [isOpen, setIsOpen] = useState(false);

  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showForgotPass, setShowForgotPass] = useState(false);
  const [signUpMessage, setSignUpMessage] = useState("");

  //hadling switch to signIn
  const handleSwitchToSignIn = (message) => {
    setShowSignUp(false);
    setSignUpMessage(message);
    setShowSignIn(true);
  };

  //hadling switch to signUp
  const handleSwitchToSignUp = () => {
    setShowSignIn(false);
    setShowSignUp(true);
  };

  //hadling switch to forgot password
  const handleSwitchToForgotPassword = () => {
    setShowSignIn(false);
    setShowForgotPass(true);
  };

  

  return (
    <>
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo/Brand */}
          <div className="navbar-logo">
            <span>QuickCart</span>
          </div>

<<<<<<< HEAD
        {/* Desktop Navigation */}
        <div className="navbar-links">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <Link to="contact">Contacts</Link>
          <a href="#">About</a>
        </div>
=======
         {/* Desktop Navigation */}
          <div className="navbar-links">
              <ul className="page-links">
                <li>Home</li>
                <li>Products</li>
                <li>Categories</li>
                <li>About</li>
              </ul>
>>>>>>> 2db0ad05285ea5be014a3ec940201f9c5488f1ec

              <ul className="auth-links">
                <li onClick={() => setShowSignIn(true)}>Sign In</li>
                <li> <span>|</span> </li>
                <li onClick={() => setShowSignUp(true)}>Sign Up</li>
              </ul>
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
          <ul>
              <li>Home</li>
              <li>Products</li>
              <li>Categories</li>
              <li>About</li>
          </ul>

    {/* smartminds auth links */}
          <div className="navAcc">
          <ul className="navListDesign">
            <li onClick={() => setShowSignIn(true)}>Sign In</li>
            <li> <span>|</span> </li>
            <li onClick={() => setShowSignUp(true)}>Sign Up</li>
          </ul>
        </div>

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

     {/* showing login popUp */}
     {showSignIn && (
      <Modal isOpen={showSignIn} onClose={() => setShowSignIn(false)}>
        {/*Any popUP right here */}
        <SignIn
          signUpResponse={signUpMessage}
          closeSignIn={() => setShowSignIn(false)}
          onForgotPass={() => handleSwitchToForgotPassword()}
          onDontHaveAccount={() => handleSwitchToSignUp()}
        />
      </Modal>
    )}

    {/* showing signUp popUp */}
    {showSignUp && (
      <Modal isOpen={showSignUp} onClose={() => setShowSignUp(false)}>
        {/* Any popUP right here */}
        <SignUp
          onSuccess={handleSwitchToSignIn}
          closeSignUp={() => setShowSignUp(false)}
        />
      </Modal>
    )}

    {/* showing forgotPassword popUp */}
    {showForgotPass && (
      <Modal isOpen={showForgotPass} onClose={() => setShowForgotPass(false)}>
        {/*Any popUP right here */}
        <ForgotPassword closeForgotPass={() => setShowForgotPass(false)} />
      </Modal>
      
    )}
   </>
  );
};

export default NavBar;