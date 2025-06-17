import React from 'react'
import '../../Home/AllProduct/AllProduct.css'

const AllProduct = () => {
  return (
    <div className="product-grid">
       
      <div className="product-card">
        <div className="product-image-wrapper">
          <img src="https://images.unsplash.com/photo-1554735490-5974588cbc4f" alt="" className="product-image" />
        </div>
        <div className="product-details">
          <h3 className="product-name">Product Name</h3>
          <h2 className="product-category">Product Category</h2>
          <p className="product-description">Product Description</p>
          <p className="product-price-buy">$274</p>
          <p className="product-price-sell">$254</p>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>

      <div className="product-card">
        <div className="product-image-wrapper">
          <img src="https://images.unsplash.com/photo-1554735490-5974588cbc4f" alt="" className="product-image" />
        </div>
        <div className="product-details">
          <h3 className="product-name">Product Name</h3>
          <h2 className="product-category">Product Category</h2>
          <p className="product-description">Product Description</p>
          <p className="product-price-buy">$274</p>
          <p className="product-price-sell">$254</p>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>

      {/* Add more product cards as needed */}
    </div>
  )
}

export default AllProduct
