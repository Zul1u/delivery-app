import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import replaceDot from '../helpers/replaceDot';

function OrderCard({
  id, totalPrice, saleDate, status,
  deliveryAdress, deliveryNumber, isSeller, role,
}) {
  return (
    <div>
      <Link to={ `/${role}/orders/${id}` }>
        <span data-testid={ `${role}_orders__element-order-id-${id}` }>
          {`Pedido${id}`}
        </span>

        <span data-testid={ `${role}_orders__element-delivery-status-${id}` }>
          {status}
        </span>

        <span data-testid={ `${role}_orders__element-order-date-${id}` }>
          {saleDate}
        </span>

        <span data-testid={ `${role}_orders__element-card-price-${id}` }>
          { replaceDot(totalPrice)}
        </span>

        {
          isSeller && (
            <span data-testid={ `${role}_orders__element-card-address-${id}` }>
              {deliveryAdress}
              {deliveryNumber}
            </span>
          )
        }
      </Link>
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
  role: PropTypes.string.isRequired,
};

export default OrderCard;
