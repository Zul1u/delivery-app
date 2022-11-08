import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import replaceDot from '../helpers/replaceDot';
import DELIVERY_API from '../redux/services/api.fetch';
import StorageManager from '../utils/StorageManager';

function List({ type, data, checkout }) {
  const [deleteUser] = DELIVERY_API.deleteUser();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let total = 0;
    data.forEach((item) => {
      total += +item.quantity * +item.unitPrice;
    });

    setTotalPrice(total);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const removeUser = ({ target: { parentNode } }) => {
    const row = parentNode;
    deleteUser(row.parentNode.id);
    row.parentNode.remove();
  };

  const removeItem = ({ target: { parentNode: { parentNode } } }) => {
    const row = parentNode;
    row.remove();
    StorageManager.removeCart({ id: row.id });
  };

  const removeButton = (name, onClick) => (
    <button
      type="button"
      onClick={ onClick }
    >
      { name }
    </button>
  );

  const translateRole = (role) => {
    switch (role) {
    case 'administrator':
      return 'Admin';

    case 'seller':
      return 'P. Vendedora';

    case 'customer':
      return 'Cliente';

    default:
      break;
    }
  };

  const userList = (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Tipo</th>
          <th>Excluir</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((user, index) => (
            <tr key={ user.id } id={ user.id }>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{translateRole(user.role)}</td>
              <td>{removeButton('Excluir', removeUser)}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );

  const productList = (
    <div>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário </th>
            <th>Sub-total</th>
            {checkout ? (<th>Remover item</th>) : null}
          </tr>
        </thead>
        <tbody>
          {
            data.map((item, index) => (
              <tr key={ item.id } id={ item.id }>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-item-number-${index}`
                  }
                >
                  {(index + 1).toString()}
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-name-${index}`
                  }
                >
                  {item.name}
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-quantity-${index}`
                  }
                >
                  {item.quantity}
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-unit-price-${index}`
                  }
                >
                  {`R$ ${replaceDot((+item.unitPrice).toFixed(2))}`}
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-sub-total-${index}`
                  }
                >
                  {`R$ ${replaceDot((+item.unitPrice * +item.quantity).toFixed(2))}`}
                </td>
                {checkout ? (
                  <td
                    data-testid={
                      `customer_checkout__element-order-table-remove-${index}`
                    }
                  >
                    {removeButton('Remover', removeItem)}
                  </td>
                ) : null}
              </tr>
            ))
          }
        </tbody>
      </table>
      <span data-testid="customer_checkout__element-order-total-price">
        {`Valor total: ${replaceDot(totalPrice.toFixed(2))}`}
      </span>
    </div>
  );

  switch (type) {
  case 'user':
    return userList;

  case 'product':
    return productList;

  default:
    break;
  }
}

List.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape().isRequired,
  ).isRequired,
  checkout: PropTypes.bool.isRequired,
};

export default List;
