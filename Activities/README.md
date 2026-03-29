# WDD-2 E-Commerce Project

This repository is a full-stack e-commerce demo app with:
- **Backend** using Express + MongoDB
- **Frontend** using React + Vite
- Auth (register/login), products, cart, and checkout flows

## Prerequisites
- Node.js (18+ recommended)
- npm
- MongoDB running locally (or use hosted URI)

## Repository Structure
- `Backend/` - API server
  - `index.js` - entry point
  - `models/` - MongoDB schemas (User, Product, Order)
  - `controllers/` - route handlers
  - `routes/` - router definitions
  - `middleware/` - auth middleware
  - `config/db.js` - MongoDB connection
  - `.env` - environment variables
- `frontend/` - React web client
  - `src/` - React app code
  - `src/pages/` - page views
  - `src/components/` - shared UI components
  - `src/context/` - React Context for auth/cart
  - `src/services/api.js` - API client
  - `vite.config.js` - Vite config + proxy

## Environment Setup

### 1. Backend

1. `cd Backend`
2. Copy `.env` template or edit existing:
    ```env
    MONGO_URI=mongodb://localhost:27017/wdd2
    JWT_SECRET=your_jwt_secret_key_here
    FRONTEND_ORIGIN=http://localhost:5174
    PORT=3000
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start backend:
    ```bash
    npm run dev
    ```

API endpoints:
- `POST /api/v1/users/register` (register)
- `POST /api/v1/users/login` (login)
- `GET /api/v1/products` (product list)
- `GET /api/v1/products/:id` (product detail)
- `POST /api/v1/orders` (order creation)

### 2. Frontend

1. `cd frontend`
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start frontend:
    ```bash
    npm run dev
    ```
4. Open displayed URL (typically `http://localhost:5174`)

If the frontend cannot reach backend, confirm proxy in `vite.config.js`:
```js
server: {
  proxy: {
    '/api': 'http://localhost:3000'
  }
}
```

## Quick walkthrough

- `localhost:5174` opens Home
- `/login` page for login and signup
- `/products` shows product list
- `/cart` and `/checkout` for cart process

## Known issues & fixes

- Make sure `react-router-dom` is installed:
  - `cd frontend && npm install react-router-dom`
- Ensure backend controller filenames use `.js` extension (`productController.js` etc.)
- Use `npm run dev` in each app folder

## Optional

- Use Postman to seed products/checkout API
- Add initial seeds to `Backend` with data loader scripts

---

Anyone can customize this project by adding new update routes, improving validation, and adding product categories, sorting, and searching.
