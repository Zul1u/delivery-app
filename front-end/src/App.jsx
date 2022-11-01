import React from 'react';
import './App.css';
import rockGlass from './images/rockGlass.svg';
import ProductCard from './components/ProductCard';
import OrderCard from './components/OrderCard';

function App() {
  return (
    <div className="App">
      <span className="logo">TRYBE</span>
      <object className="rocksGlass" type="image/svg+xml" data={ rockGlass }>
        Glass
      </object>
      <ProductCard />
      <OrderCard />
    </div>
  );
}

export default App;
