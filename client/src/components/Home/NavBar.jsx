import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaShoppingCart, FaUser } from 'react-icons/fa';
import './NavBar.css';
import "../../styles/loginSignUp.css";
import Modal from "../popUps/Modal";
import SignUp from  "../../pages/SignUp";
import SignIn from "../../pages/SignIn";
import ForgotPassword from '../../pages/ForgotPassword';
import { useCart } from "../../context/CartContext"; //For accessing the item count from the main context
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";


const NavBar = ({hideProducts}) => {
  const { cartItems } = useCart(); //Accessesing cartItems from the CartContext
  const totalCount = cartItems.reduce((sum, item) => sum + item.count, 0);

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

         {/* Desktop Navigation */}
          <div className="navbar-links">
              <ul className="page-links">
                <li> <Link className='page-linksList' onClick={hideProducts} to="/">home  </Link>  </li>
                <li> <Link className='page-linksList' onClick={hideProducts} to="/contact">contacts  </Link> </li>
                <li> <Link className='page-linksList' onClick={hideProducts} to="/about"> about</Link> </li>
              </ul>
          </div>


       {/* Icons */}
        <div className="navbar-icons">
            {       
              <div className="authSection"> 
                  <button className="user-icon-button">
                    <FaUser />
                    <FontAwesomeIcon className='navDropDown' icon={faAngleDown} />
                  </button>

                  <ul className="auth-links">
                    <li onClick={() => setShowSignIn(true)}>Sign In</li>
                    <li onClick={() => setShowSignUp(true)}>Sign Up</li>
                    <li>Orders</li> {/* link it to the orders page */}
                  </ul>
              </div> 
            }      
            <button className="cart-button">
                <Link className='page-linksList' to="/cart">
                  <FaShoppingCart/>
                </Link>
                {totalCount > 0 && <span className="cart-badge">{totalCount}</span> }
            </button>
        </div>

        {/* Mobile menu button */}
        <div className="mobile-menu-button">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes className="mobileDashIcon" /> : <FaBars className="mobileDashIcon" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="mobile-menu">
              <ul>
                  <li> <Link className='mobileList' to="/">home  </Link>  </li>
                  <li> <Link className='mobileList' to="/contact">contacts </Link>  </li>
                  <li> <Link className='mobileList' to="/about"> about</Link> </li>
              </ul>
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