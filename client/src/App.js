import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contacts from "./pages/Contact/Contacts";
import NavBar from "./components/Home/NavBar";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <Router>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
