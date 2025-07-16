import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import "./itemBox.css";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import ViewProduct from "../../pages/ViewProduct";
import ProductModal from "../../components/popUps/ProductModal";

const ItemBox = ({ itemName, itemDesc, itemPrice }) => {
  
/*let us try to show the item details Modal */
  const[showModal, setShowModal]=useState(false)

  const { updateCart } = useCart(); // Get updateCart from context
  
  const [itemCount, setItemCount] = useState(0);

  const handleAdd = () => {
    const newCount = itemCount + 1;
    setItemCount(newCount);
    updateCart(itemName, newCount);
  };

  const handleSubtract = () => {
    const newCount = Math.max(itemCount - 1, 0);
    setItemCount(newCount);
    updateCart(itemName, newCount);
  };

  return (
    <div>
      <div className="item">
        <div className="itemShade" onClick={()=>setShowModal(true)}></div>
        <div className="itemDescription">
          <h4>{itemName}</h4>
          <h6>{itemDesc}</h6>
          <div className="itemBoxFooter">
            <p>{itemPrice}</p>

            <div className="cartBtn">
              {itemCount === 0 ? (
                <Button btnName="Add to Cart" onClick={handleAdd} />
              ) : (
                <div>
                  <button className="itemBtn" onClick={handleSubtract}>
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <button className="itemBtn" onClick={handleAdd}>
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {itemCount > 0 && (
          <div className="displayCount">
            <p>{itemCount}</p>
          </div>
        )}
      </div>

      {/*showing login popUp */}
          {showModal && (
            <ProductModal isOpen={showModal} onClose={() => setShowModal(false)}>
              {/*Any popUP right here */}
              <ViewProduct closeView={() => setShowModal(false)}/>
            </ProductModal>
          )}
    </div>
  );
};

export default ItemBox;
