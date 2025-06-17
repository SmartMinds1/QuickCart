import React, { useEffect, useState } from "react";
import "../../../components/Home/Slider/Slider.css";
import { Link } from "react-router-dom";

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const Slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1600&q=80",
      title: "First Slide",
      description: "Discover our amazing collection!",
      url: "/products",
    },
    {
      id: 2,
      image:
        "https://plus.unsplash.com/premium_photo-1664391960037-8aefeab6482b?w=500&auto=format&fit=crop&q=60",
      title: "Second Slide",
      description: "Unmatched quality and style.",
      url: "/products",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1739124794957-4667b8b74894?q=80&w=1374&auto=format&fit=crop",
      title: "Third Slide",
      description: "Shop the trendiest outfits.",
      url: "/products",
    },
  ];

  // Slide auto-change every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === Slides.length - 1 ? 0 : prev + 1));
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const slide = Slides[current]; 

  return (
    <div className="container">

      {/* Category Circle */}
      

      {/* Search Bar */}
      <div className="Search">
        <input className="Search_bar" type="text" placeholder="Search here" />
        <button className="search-button">Search</button>
      </div>

      {/* Only show current slide */}
      <div className="slider-container">
        <div className="slider">
          {/* TEXT CONTAINER */}
          <div className="slider-text-container">
            <h2 className="slider-description">{slide.description}</h2>
            <h2 className="slider-title">{slide.title}</h2>
            <Link to={slide.url}>
              <button className="slider-button">SHOP NOW</button>
            </Link>
          </div>

          {/* IMAGE CONTAINER */}
          <div className="slider-image-container">
            <img
              src={slide.image}
              alt={slide.title}
              className="slider-image"
            />
          </div>
        </div>
      </div>
  {/* Circle Display */}
    <div className="Category">
  <h1>Category</h1>
  <div className="category-item">
    <div className="circle_Display">
      <img
        className="Dis_image"
        src="https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=500&auto=format&fit=crop&q=60"
        alt=""
      />
      <h2 className="text">Shoes</h2>
    </div>
    <div className="circle_Display">
      <img
        className="Dis_image"
        src="https://plus.unsplash.com/premium_photo-1673977134363-c86a9d5dcafa?w=500&auto=format&fit=crop&q=60"
        alt=""
      />
      <h2 className="text">Trousers</h2>
    </div>
    <div className="circle_Display">
      <img
        className="Dis_image"
        src="https://plus.unsplash.com/premium_photo-1673356302067-aac3b545a362?w=500&auto=format&fit=crop&q=60"
        alt=""
      />
      <h2 className="text">T-Shirts</h2>
    </div>
  </div>
</div>

    </div>
  );
};

export default Slider;
