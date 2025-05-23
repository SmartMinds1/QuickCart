import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/general/MainLayout";
import Categories from "./pages/Categories";
import Orders from "./pages/Orders";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
