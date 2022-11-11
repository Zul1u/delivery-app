import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import DeliveryForm from '../components/DeliveryForm';
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
      newIdObject[prod.id] = prod.quantity;
    });
    setProductsObject({ ...newIdObject });
  }, [products]);

  const removeItem = ({ target: { parentNode: { parentNode } } }) => {
    const row = parentNode;
    StorageManager.removeCart({ id: row.id });

    setProducts(StorageManager.loadCart());
  };

  return (
    <div>
      <Header />
      <List
        type="product"
        data={ products }
        checkout
        removeItem={ removeItem }
        testPrefix="customer_checkout__"
      />
      <DeliveryForm userId={ userId } products={ productsObject } />
    </div>
  );
}
