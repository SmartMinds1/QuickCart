import React from 'react';
import '../../Home/TopProducts/TopProduct.css';

const TopProduct = () => {
  return (
    <div className="top-product-grid">
      {/* Section Title */}
      <div className="top-product-title">
        <h1>Top Products</h1>
      </div>

      {/* Products Grid */}
      <div className="products-wrapper">
        <div className="top-product-container">
          <div>
            <img
              src="https://images.unsplash.com/photo-1554735490-5974588cbc4f"
              alt=""
              className="product-image"
            />
          </div>
          <div className="top-product-text">
            <h3 className="product-Name">Product name</h3>
            <h1 className="product-Category">Product Category</h1>
            <h1 className="product-Price">$475</h1>
            <button>Add to Cart</button>
          </div>
        </div>

        <div className="top-product-container">
          <div className="product-image-container">
            <img
              src="https://images.unsplash.com/photo-1554735490-5974588cbc4f"
              alt=""
              className="product-image"
            />
          </div>
          <div className="top-product-text">
            <h3 className="product-Name">Product name</h3>
            <h1 className="product-Category">Product Category</h1>
            <h1 className="product-Price">$350</h1>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="filter-section">
        <select name="type">
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>

        <input type="text" name="min" placeholder="Min Price" />
        <input type="text" name="max" placeholder="Max Price" />

        <select name="size">
          <option value="size">Size</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>

        <select name="category">
          <option value="category">Category</option>
          <option value="new arrivals">New Arrivals</option>
          <option value="popular">Popular</option>
        </select>

        <select name="filters">
          <option value="all">All Filters</option>
        </select>
      </div>
    </div>
  );
};

export default TopProduct;
