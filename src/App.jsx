import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";
import "./App.css";

/**
 * Paradise Nursery landing page: company name and a Get Started button.
 */
function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-overlay">
        <h1 className="landing-title">Paradise Nursery</h1>
        <p className="landing-tagline">
          Bring the calm of nature into your home with hand picked houseplants.
        </p>
        <Link to="/plants" className="get-started-button">
          Get Started
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="app-content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/plants" element={<ProductList />} />
          <Route path="/cart" element={<CartItem />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
