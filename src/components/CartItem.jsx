import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "../redux/CartSlice";

/**
 * Shopping cart page.
 * Shows unit price, per plant total, grand total, quantity controls,
 * a delete button, a checkout button and a continue shopping link.
 */
function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const [checkoutMessage, setCheckoutMessage] = useState("");

  const handleCheckout = () => {
    setCheckoutMessage("Coming Soon");
  };

  return (
    <section className="cart-page">
      <h1>Shopping Cart</h1>

      {items.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <Link to="/plants" className="continue-button">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <p className="cart-summary">
            Total Cart Amount: <strong>${total.toFixed(2)}</strong>
          </p>

          <div className="cart-list">
            {items.map((item) => (
              <article className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} className="cart-thumb" />

                <div className="cart-details">
                  <h3>{item.name}</h3>
                  <p className="unit-price">Unit Price: ${item.price.toFixed(2)}</p>
                  <p className="total-cost">
                    Total Cost: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>

                <div className="quantity-controls">
                  <button
                    type="button"
                    aria-label={`Decrease quantity of ${item.name}`}
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                  >
                    -
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button
                    type="button"
                    aria-label={`Increase quantity of ${item.name}`}
                    onClick={() => dispatch(increaseQuantity(item.id))}
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  className="delete-button"
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  Delete
                </button>
              </article>
            ))}
          </div>

          <div className="cart-actions">
            <button type="button" className="checkout-button" onClick={handleCheckout}>
              Checkout
            </button>
            <Link to="/plants" className="continue-button">
              Continue Shopping
            </Link>
          </div>

          {checkoutMessage && (
            <p className="checkout-message" role="status">
              {checkoutMessage}
            </p>
          )}
        </>
      )}
    </section>
  );
}

export default CartItem;
