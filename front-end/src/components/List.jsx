import React from 'react';
import PropTypes from 'prop-types';
import DELIVERY_API from '../redux/services/api.fetch';

function List({ type, data, checkout }) {
  const [deleteUser] = DELIVERY_API.deleteUser();

  const removeUser = ({ target: { parentNode } }) => {
    const row = parentNode;
    deleteUser(row.parentNode.id);
    row.parentNode.remove();
  };

  const removeItem = ({ target: { parentNode } }) => {
    const row = parentNode;
    row.parentNode.remove();
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
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.unitPrice}</td>
              <td>{item.unitPrice * item.quantity}</td>
              {checkout ? (<td>{removeButton('Remover', removeItem)}</td>) : null}
            </tr>
          ))
        }
      </tbody>
    </table>
  );

  switch (type) {
  case 'user':
    return userList;

  case 'product':
    return productList;

  default:
    return <div />;
  }
}

List.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.string.isRequired || PropTypes.number.isRequired,
    ).isRequired,
  ).isRequired,
  checkout: PropTypes.bool.isRequired,
};

export default List;
