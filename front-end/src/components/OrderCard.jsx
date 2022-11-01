// Presente na Orders de
// cliente
// vendedor

// Renderiza condicionalmente o endereço do pedido se
// estiver na página de Orders do vendedor
import React from 'react';
import PropTypes from 'prop-types';

function OrderCard({
  id, totalPrice, saleDate, status, deliveryAdress, deliveryNumber, isVendor,
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
        isVendor && (
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
  id: PropTypes.number,
  totalPrice: PropTypes.number,
  saleDate: PropTypes.string,
  status: PropTypes.string,
  deliveryAdress: PropTypes.string,
  deliveryNumber: PropTypes.string,
  isVendor: PropTypes.bool,
};

OrderCard.defaultProps = {
  id: PropTypes.number,
  totalPrice: PropTypes.number,
  saleDate: PropTypes.string,
  status: PropTypes.string,
  deliveryAdress: PropTypes.string,
  deliveryNumber: PropTypes.string,
  isVendor: PropTypes.bool,
};

export default OrderCard;
