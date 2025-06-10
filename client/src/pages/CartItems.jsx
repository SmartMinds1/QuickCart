import React from "react";
import "../styles/cartItems.css";
import { useCart } from "../context/CartContext";
import NavBar from "../components/Home/NavBar";
import Footer from "../components/general/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const CartItems = () => {
  const { cartItems } = useCart(); //Accessesing cartItems from the CartContext
  const totalCount = cartItems.reduce((sum, item) => sum + item.count, 0);
  
  return (
    <div className="cart">
        <header>
            <NavBar/>
        </header>
     
        <main className="cartItemsBox">  
            <div className="cartHeader">
              <h3> <FontAwesomeIcon className="cartIcon" icon={faShoppingCart}/> Shopping Cart <span> Items</span> </h3>
              <p> <strong>Total Items:</strong> <span>{totalCount}</span> </p>
            </div>

            {cartItems.length === 0 || totalCount === 0 ? (
                  <div> 
                      <div className="cartIconDiv"> 
                        <FontAwesomeIcon className="cartBigIcon" icon={faShoppingCart}/>
                      </div> 
                      <p className="noItem">Your Shopping Cart is empty</p>
                  </div> 
                  
              ) : (
                <div className="cartItemsList">
                  <ol>
                      {cartItems.map((item, index) =>
                        item.count > 0 ? (
                             <div className="exactList">
                                  <li key={index}>
                                    {item.itemName} - Quantity: {item.count}
                                  </li>
                                  <button className="removeBtn">remove</button>
                              </div>
                        ) : null
                      )}
                  </ol>
                </div>
              )};

    {cartItems.length === 0 || totalCount === 0 ? (
            <div className="paymentSection">
             <Link to="/"> <button className="buyBtn">Shop Now</button> </Link>
            </div>
        ) : 
            <div className="paymentSection">
              <button className="buyBtn">Pay Now</button>
            </div>
        }
      </main>

      <footer className="cartFooter">
        <Footer/>
      </footer>

            </div>
          );
        };

export default CartItems;
