import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import Products from './pages/Products';
import CheckoutPage from './pages/Checkout';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to="/login" /> } />
      <Route path="/login" element={ <LoginPage /> } />
      <Route path="/register" element={ <RegisterPage /> } />
      <Route path="customer/products" element={ <Products /> } />
      <Route path="customer/checkout" element={ <CheckoutPage /> } />
    </Routes>
  );
}

export default App;
