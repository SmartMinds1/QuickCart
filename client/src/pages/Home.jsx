import React, { useEffect, useState } from "react";


import Slider from "../components/Home/Slider/Slider.jsx";
import TopProduct from "../components/Home/TopProducts/TopProduct.jsx";
import AllProduct from "../components/Home/AllProduct/AllProduct.jsx";

const Home = () => {
  
  return (
    <div className="container">
      <Slider/>
      <TopProduct/>
     <AllProduct/>

      
      
    </div>
  );
};

export default Home;
