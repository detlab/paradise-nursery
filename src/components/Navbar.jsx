import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartCount } from "../redux/CartSlice";

/**
 * Navbar shown on the product listing page and the cart page.
 * Shows the live cart item count from the Redux store.
 */
function Navbar() {
  const cartCount = useSelector(selectCartCount);
  const navigate = useNavigate();
  const location = useLocation();

  const onPlantsPage =
    location.pathname === "/plants" || location.pathname === "/";

  const handlePlantsClick = () => {
    if (onPlantsPage) {
      // Scroll to the product listing when already on that page.
      const section = document.getElementById("product-listing");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/plants");
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        Paradise Nursery
      </Link>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <button type="button" className="link-button" onClick={handlePlantsClick}>
          Plants
        </button>
        <Link to="/about">About Us</Link>
        <Link to="/cart" className="cart-link">
          <span className="cart-icon" aria-hidden="true">
            &#128722;
          </span>
          <span className="cart-count">{cartCount}</span>
          <span className="cart-label">Cart</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
