import React from 'react';
import Header from '../components/Header';
import OrderCard from '../components/OrderCard';
import formatDate from '../helpers/formatDate';
import DELIVERY_API from '../redux/services/api.fetch';
import StorageManager from '../utils/StorageManager';

export default function Orders() {
  const { data: orders, isLoading } = DELIVERY_API.getSaleByToken();
  const getRole = StorageManager.loadUser().role;
  const seller = getRole === 'seller';

  return (
    <>
      <Header />
      <div className="order-card-container">
        {
          !isLoading && orders.map((order) => (
            <OrderCard
              key={ order.id }
              role={ getRole }
              id={ order.id }
              totalPrice={ +order.totalPrice }
              saleDate={ formatDate(order.saleDate) }
              status={ order.status }
              deliveryAdress={ order.deliveryAddress }
              deliveryNumber={ order.deliveryNumber }
              isSeller={ seller }
            />
          ))
        }
      </div>
    </>
  );
}
