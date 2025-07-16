import React from "react";
import "../styles/ViewProduct.css";

const ViewProduct = ({closeView})=>{

    return(
          <div className="viewProduct">
            {/* header to close the popUP */}
            <div className="view-header">
                <button onClick={closeView} className="view-close-btn">
                  ✕ 
                </button>
            </div>


            <div className="itmBox">
              {/* item img*/}
               <div className="itm">
                  <div className="itmImg"></div>
                
                  <div className="subImgsBox">
                       <div className="subImg1 Bx"></div>
                       <div className="subImg2 Bx"></div>
                       <div className="subImg3 Bx"></div> 
                  </div>
               </div>

              {/* item details */}
              <div className="detailsBox">
                <div className="itemDetails">
                  <h2>Unisex Black & White <br />Sneaker </h2>
                  <p>Designed with a sleek monochrome look, they offer a snug fit, breathable materials, and durable build for everyday wear.</p>

                  <ul className="itemSpecs">
                    <li><span>Color:</span> Black upper, white sole</li>
                    <li><span>Upper Material:</span> Synthetic/canvas upper, rubber outsole</li>
                    <li><span>Sole:</span> Cushioned rubber outsole for traction and impact absorption</li>
                    <li><span>Fit:</span>  Lace-up, padded & true to size</li>
                    <li><span>Style:</span> Unisex, low-top sneaker</li>
                  </ul>
                </div>
                <div className="itemBtns">
                  <button>Buy now</button>
                  <button>Add to cart</button>
                </div>
              </div>
            </div>

           {/* spacing and the hr */}
          <br /><br /><br /> <div className="myHr"></div> <br />

                {/* more Item details */}
                <div className="itemDetails">
                  <h2>Packaging & Delivery</h2>
                  <ul className="itemSpecs">
                     <li>Fast shipping (1–3 business days) via Jumia Express across major cities like Nairobi</li>
                     <li>Standard shipping (3–5 days) available for other regions</li>
                     <li>Free delivery on Express-eligible orders within Kenya</li>
                     <li><span>Returns: </span>Easy returns within 7–14 days. Subject to inspection and return policy compliance.</li>
                  </ul>
                </div>

                {/* more Item details */}
                <div className="itemDetails">
                  <h2>Easy Returns & Exchanges</h2>
                  <ul className="itemSpecs">
                     <li>Free returns accepted within 7 days of delivery — simply contact customer support for a hassle-free process</li>
                     <li>Customers can order multiple sizes and keep the best fit (size-to-try option)</li>
                  </ul>
                </div>


                {/* more Item details */}
                <div className="itemDetails">
                  <h2>Why You’ll Love It</h2>
                  <ul className="itemSpecs">
                 {/*     <li>Free returns accepted within 7 days of delivery — simply contact customer support for a hassle-free process</li>
                     <li>Customers can order multiple sizes and keep the best fit (size-to-try option)</li> */}
                     <li>Timeless aesthetic for easy outfit matching</li>
                     <li>Soft, cushioned footbed keeps you comfortable all day</li>
                     <li>Durable outsole built for daily wear</li>
                     <li>Convenient purchase and return policies</li>
                  </ul>
                </div>


          


             <br /><br /><br /><br /><br /><br /><br />


          </div>
        
    );
}

export default ViewProduct;
