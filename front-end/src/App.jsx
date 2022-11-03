import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import FieldTest from './components/QueryFieldTest';
import LoginPage from './pages/Login';

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={ <Navigate to="/login" /> } /> */}
      <Route path="/" element={ <FieldTest/> } />
      <Route path="/login" element={ <LoginPage /> } />
    </Routes>
  );
}

export default App;