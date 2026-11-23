# Paradise Nursery Shopping Application

An online houseplant store built with React, Redux Toolkit and React Router.

## Project Overview

Paradise Nursery is a single page e-commerce front end for a plant nursery. It
has a landing page, a product listing grouped by plant category, a shopping
cart with quantity controls, and an About Us page.

## Features

- **Landing page** with the Paradise Nursery company name and a Get Started button
- **Product listing** with 18 unique houseplants across 3 categories, each with a
  thumbnail, name, price and an Add to Cart button that disables after use
- **Shopping cart** showing unit price, per plant total, grand total, quantity
  increase and decrease controls, a delete button, a Checkout button and a
  Continue Shopping link
- **Live cart counter** in the navbar that updates as items are added
- **Redux Toolkit** slice managing all cart state
- **Responsive layout** built with CSS Grid and Flexbox

## Tech Stack

| Layer | Technology |
|---|---|
| UI | React 19 |
| State | Redux Toolkit, react-redux |
| Routing | react-router-dom |
| Build | Vite |
| Styling | Plain CSS |

## Project Structure

```
src/
  App.jsx                 landing page and routes
  App.css                 background image and all component styling
  main.jsx                Redux Provider and BrowserRouter
  components/
    AboutUs.jsx           company information page
    Navbar.jsx            navigation with live cart count
    ProductList.jsx       product listing grouped by category
    CartItem.jsx          shopping cart page
  data/
    plants.js             plant catalogue
  redux/
    CartSlice.jsx         cart slice with add, remove, increase, decrease
    store.js              Redux store
```

## Getting Started

```bash
npm install
npm run dev
```

Then open the local URL printed by Vite.

## Available Routes

- `/` landing page
- `/plants` product listing
- `/cart` shopping cart
- `/about` about the company

## Author

Rahadyan Gusti
