import React from "react";

const ViewProduct = ()=>{
    return(
          <div className="viewProduct">
            <div className="itemBox">
              {/* item img*/}
               <div className="item">
                  <div className="itemImg"></div>
                  <div className="subImgBox">
                       <div className="subImg1"></div>
                       <div className="subImg1"></div>
                       <div className="subImg1"></div> 
                  </div>
               </div>

              {/* item details */}
              <div className="detailsBox">
                <div className="itemDetails">
                  <h1>Item Name</h1>
                  <p>This is a small item description that is showing what kind of item is being displayed right here</p>
                </div>
                <div className="itemBtns">
                  <button>Buy now</button>
                  <button>Add to cart</button>
                </div>
              </div>
            </div>


           {/* Item more details */}

          </div>
        
    );
}

export default ViewProduct;
