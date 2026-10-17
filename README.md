# Paradise Nursery

Paradise Nursery is a React-based online houseplant shopping application. It allows customers to explore different categories of houseplants, add plants to a shopping cart, manage quantities, and view their order total.

## Features

- Home page with a welcome section and company information.
- Plant catalogue featuring 18 plants across three categories.
- Plant names, descriptions, images, and prices.
- Add-to-cart functionality with buttons disabled for plants already added.
- Shopping cart with quantity controls and item removal.
- Automatic calculation of cart quantities and total cost.
- Responsive layout for desktop and mobile screens.
- Redux Toolkit for cart state management.
- React Router for navigation between pages.
- Checkout message indicating that checkout is coming soon.

## Technologies Used

- React
- Vite
- JavaScript
- CSS
- Redux Toolkit
- React Redux
- React Router DOM
- Git and GitHub

## Project Structure

- `src/App.jsx` - Main application layout and navigation.
- `src/App.css` - Global application styling.
- `src/AboutUs.jsx` - Company information section.
- `src/ProductList.jsx` - Plant catalogue and add-to-cart functionality.
- `src/ProductList.css` - Plant catalogue styling.
- `src/Cart.jsx` - Shopping cart page and order totals.
- `src/Cart.css` - Shopping cart styling.
- `src/CartItem.jsx` - Individual cart item and quantity controls.
- `src/CartSlice.jsx` - Redux cart state and actions.
- `src/store.js` - Redux store configuration.
- `src/main.jsx` - Application entry point.

## Installation and Setup

Make sure Node.js and npm are installed.

1. Clone the repository:

   `git clone https://github.com/linasaeed66/e-plantShopping.git`

2. Navigate into the project folder:

   `cd e-plantShopping`

3. Install dependencies:

   `npm install --legacy-peer-deps`

4. Start the development server:

   `npm run dev`

5. Open the local URL displayed in the terminal.

## Production Build

To create a production build, run:

`npm run build`

The generated production files are placed in the `dist` directory.

## GitHub Repository

https://github.com/linasaeed66/e-plantShopping

## Future Improvements

- Implement a complete checkout and payment process.
- Add customer accounts and order history.
- Improve product filtering and search.
- Connect the application to a product database.
