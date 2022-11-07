import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import FinishOrderForm from '../components/FinishOrderForm';
import List from '../components/List';
import StorageManager from '../utils/StorageManager';

export default function CheckoutPage() {
  const [productsObject, setProductsObject] = useState({});
  const [userId, setUserId] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const { id } = StorageManager.loadUser();
    setUserId(id);
    const loadedProducts = StorageManager.loadCart();
    setProducts(loadedProducts);
  }, []);

  useEffect(() => {
    const newIdObject = {};
    products.forEach((prod) => {
      newIdObject[prod.id] = prod.id;
    });
    setProductsObject({ ...newIdObject });
  }, [products]);

  return (
    <div>
      <Header />
      <List type="product" data={ products } checkout />
      <FinishOrderForm userId={ userId } products={ productsObject } />
    </div>
  );
}
