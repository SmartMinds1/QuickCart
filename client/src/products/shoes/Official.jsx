import React from "react";
import ItemBox from "../../components/general/ItemBox";
import "./Shoes.css";

const Official = ()=> {
    return(
        <div className="shoeSection">
                      <div className="official1 itemImage">
                        <ItemBox
                            itemName="Black Lether Shoes"
                            itemDesc="Office leather shoes, Durable for all weather."
                            itemPrice="$45"
                          />
                      </div>
                      <div className="official2 itemImage">
                        <ItemBox 
                            itemName="Canvas"
                            itemDesc="Office leather shoes, Durable for all weather."
                            itemPrice="$100"
                          />
                      </div>
                      <div className="official3 itemImage">
                        <ItemBox 
                            itemName="Sport Shoes"
                            itemDesc="Office leather shoes, Durable for all weather."
                            itemPrice="$60"
                          />
                      </div>
                      <div className="official4 itemImage">
                        <ItemBox 
                            itemName="White J9 Men"
                            itemDesc="Office leather shoes, Durable for all weather."
                            itemPrice="$35"
                          />
                      </div>
                      <div className="official5 itemImage">
                        <ItemBox 
                            itemName="Outdoor Shoes"
                            itemDesc="Office leather shoes, Durable for all weather."
                            itemPrice="$22"
                          />
                      </div>
                      <div className="official6 itemImage">
                        <ItemBox 
                            itemName="Black-White Rubber"
                            itemDesc="Office leather shoes, Durable for all weather."
                            itemPrice="$15"
                          />
                      </div>
                      <div className="official7 itemImage">
                        <ItemBox 
                            itemName="Outdoor Shoes"
                            itemDesc="Office leather shoes, Durable for all weather."
                            itemPrice="$22"
                          />
                      </div>
                      <div className="official8 itemImage">
                        <ItemBox 
                            itemName="Black-White Rubber"
                            itemDesc="Office leather shoes, Durable for all weather."
                            itemPrice="$15"
                          />
                      </div>
                </div>
    )
}

export default Official