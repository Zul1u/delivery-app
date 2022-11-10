import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import replaceDot from '../helpers/replaceDot';

function List({ type, data, checkout, removeItem, testPrefix }) {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let total = 0;
    data.forEach((item) => {
      total += +item.quantity * +item.price;
    });

    setTotalPrice(total);
  }, [data]);

  const removeButton = (name, onClick, options) => (
    <button
      type="button"
      onClick={ onClick }
      data-testid={
        `${options.testPrefix}element-${options.type}-table-remove-${options.index}`
      }
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
              <td
                data-testid={ `${testPrefix}element-user-table-item-number-${index}` }
              >
                {(index + 1).toString()}
              </td>
              <td
                data-testid={ `${testPrefix}element-user-table-name-${index}` }
              >
                {user.name}
              </td>
              <td
                data-testid={ `${testPrefix}element-user-table-email-${index}` }
              >
                {user.email}
              </td>
              <td
                data-testid={ `${testPrefix}element-user-table-role-${index}` }
              >
                {translateRole(user.role)}
              </td>
              <td>
                {removeButton('Excluir', removeItem, {
                  testPrefix, type: 'user', index,
                })}
              </td>
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
                  data-testid={ `${testPrefix}element-order-table-item-number-${index}` }
                >
                  {(index + 1).toString()}
                </td>
                <td data-testid={ `${testPrefix}element-order-table-name-${index}` }>
                  {item.name}
                </td>
                <td data-testid={ `${testPrefix}element-order-table-quantity-${index}` }>
                  {item.quantity}
                </td>
                <td
                  data-testid={ `${testPrefix}element-order-table-unit-price-${index}` }
                >
                  {`R$ ${replaceDot((+item.price).toFixed(2))}`}
                </td>
                <td data-testid={ `${testPrefix}element-order-table-sub-total-${index}` }>
                  {`R$ ${replaceDot((+item.price * +item.quantity).toFixed(2))}`}
                </td>
                {checkout ? (
                  <td>
                    {removeButton('Remover', removeItem, {
                      testPrefix, type: 'order', index,
                    })}
                  </td>
                ) : null}
              </tr>
            ))
          }
        </tbody>
      </table>
      <span data-testid={ `${testPrefix}element-order-total-price` }>
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
  data: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  checkout: PropTypes.bool.isRequired,
  removeItem: PropTypes.func.isRequired,
  testPrefix: PropTypes.string.isRequired,
};

export default List;
