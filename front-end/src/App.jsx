import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/Login';
import Orders from './pages/Orders';
import OrderDetails from './pages/OrderDetails';
import Products from './pages/Products';
import RegisterPage from './pages/Register';
import CheckoutPage from './pages/Checkout';
import Management from './pages/Management';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to="/login" /> } />
      <Route path="/login" element={ <LoginPage /> } />
      <Route path="/register" element={ <RegisterPage /> } />
      <Route path="/customer/products" element={ <Products /> } />
      <Route path="/seller/orders/:orderId" element={ <OrderDetails /> } />
      <Route path="/customer/orders/:orderId" element={ <OrderDetails /> } />
      <Route path="/customer/checkout" element={ <CheckoutPage /> } />
      <Route path="/customer/orders" element={ <Orders /> } />
      <Route path="/seller/orders" element={ <Orders /> } />
      <Route path="/admin/manage" element={ <Management /> } />
    </Routes>
  );
}

export default App;
