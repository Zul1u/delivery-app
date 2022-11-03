// Presente na Orders de
// cliente
// vendedor

// Renderiza condicionalmente o endereço do pedido se
// estiver na página de Orders do vendedor
import React from 'react';
import PropTypes from 'prop-types';

function OrderCard({
  id, totalPrice, saleDate, status, deliveryAdress, deliveryNumber, isSeller,
}) {
  return (
    <div>
      {/* Order Id */}
      <span data-testid={ `seller_orders__element-order-id-${id}` }>
        Pedido
        {id}
      </span>

      {/* Order status */}
      <span data-testid={ `seller_orders__element-delivery-status-${id}` }>
        {status}
      </span>

      {/* Order sale date */}
      <span data-test id={ `seller_orders__element-order-date-${id}` }>
        {saleDate}
      </span>

      {/* Order total price */}
      <span data-testid={ `seller_orders__element-card-price-${totalPrice}` }>
        R$
        {totalPrice}
      </span>

      {/* Order adress */}
      {
        isSeller && (
          <span data-testid={ `seller_orders__element-card-address-${id}` }>
            {deliveryAdress}
            {deliveryNumber}
          </span>
        )
      }
    </div>
  );
}

OrderCard.propTypes = {
  id: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
  saleDate: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  deliveryAdress: PropTypes.string.isRequired,
  deliveryNumber: PropTypes.string.isRequired,
  isSeller: PropTypes.bool.isRequired,
};

export default OrderCard;
