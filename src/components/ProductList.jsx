import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import { plantCategories } from "../data/plants";

/**
 * Product listing grouped by category.
 * Each plant supports Add to Cart, which disables the button for that plant.
 */
function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [added, setAdded] = useState({});

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAdded((previous) => ({ ...previous, [plant.id]: true }));
  };

  const isDisabled = (plant) =>
    Boolean(added[plant.id]) || Boolean(cartItems[plant.id]);

  return (
    <section id="product-listing" className="product-listing">
      <h1>Our Houseplants</h1>
      <p className="listing-intro">
        Hand picked plants for every room. Group them by category and add your
        favourites to the cart.
      </p>

      {plantCategories.map((category) => (
        <div className="category" key={category.name}>
          <h2>{category.name}</h2>
          <p className="category-description">{category.description}</p>

          <div className="plant-grid">
            {category.plants.map((plant) => (
              <article className="plant-card" key={plant.id}>
                <img src={plant.image} alt={plant.name} className="plant-thumb" />
                <h3>{plant.name}</h3>
                <p className="plant-price">${plant.price.toFixed(2)}</p>
                <button
                  type="button"
                  className="add-button"
                  onClick={() => handleAddToCart(plant)}
                  disabled={isDisabled(plant)}
                >
                  {isDisabled(plant) ? "Added to Cart" : "Add to Cart"}
                </button>
              </article>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default ProductList;
