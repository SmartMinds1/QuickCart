import React from "react";
import CartItems from "../../pages/CartItems";
import ItemBox from "./ItemBox";

const ItemList = () => {
  return (
    <div>
      <ItemBox itemName="Samosa" itemDesc="Crispy triangle with veggies" itemPrice="Ksh 50" />
      <ItemBox itemName="Bhajia" itemDesc="Crispy potato slices" itemPrice="Ksh 80" />
      <ItemBox itemName="Chapati" itemDesc="Soft flatbread" itemPrice="Ksh 30" />
      {/* CartItems can now pull cart from context if needed */}
      <CartItems />
    </div>
  );
};

export default ItemList;
