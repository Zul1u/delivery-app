import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import FieldTest from './components/FieldTest';
import LoginPage from './pages/Login';
import Products from './pages/Products';
import RegisterPage from './pages/Register';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to="/login" /> } />
      <Route path="/login" element={ <LoginPage /> } />
      <Route path="/register" element={ <RegisterPage /> } />
      <Route path="customer/products" element={ <Products /> } />
    </Routes>
  );
}

export default App;
