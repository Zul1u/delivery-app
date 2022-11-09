import React, { useState } from 'react';
import PropTypes from 'prop-types';

function OrderDetailsLabel(
  { id, saleStatus, statuses, date, sellerName, updateSale, testPrefix },
) {
  const [status, setStatus] = useState(saleStatus);
  return (
    <div>
      {/* Número do pedido */}
      <h3 data-testid={ `${testPrefix}element-order-details-label-order-id` }>
        {`PEDIDO${id}`}
      </h3>

      {/* Nome do vendedor */}
      { sellerName && (
        <p data-testid={ `${testPrefix}element-order-details-label-seller-name` }>
          {`P. Vend: ${sellerName}`}
        </p>
      )}

      {/* Data do pedido */}
      <p data-testid={ `${testPrefix}element-order-details-label-order-date` }>
        {date}
      </p>

      {/* Status atual do pedido */}
      <p data-testid={ `${testPrefix}element-order-details-label-delivery-status` }>
        {status}
      </p>

      {/* Renderização condicional dos botões que alteram o estado do pedido */}
      { sellerName ? (
        <button
          data-testid={ `${testPrefix}button-delivery-check` }
          type="button"
          onClick={ () => {
            updateSale({ id, status: statuses.delivered });
            setStatus(statuses.delivered);
          } }
          disabled={ status !== statuses.inTransit }
        >
          MARCAR COMO ENTREGUE
        </button>
      ) : (
        <>
          <button
            data-testid={ `${testPrefix}button-preparing-check` }
            type="button"
            disabled={ saleStatus !== statuses.pending }
            onClick={ () => updateSale({ id, status: statuses.preparing }) }
          >
            PREPARAR PEDIDO
          </button>

          <button
            data-testid={ `${testPrefix}button-dispatch-check` }
            type="button"
            disabled={ saleStatus !== statuses.preparing }
            onClick={ () => updateSale({ id, status: statuses.inTransit }) }
          >
            SAIU PARA ENTREGA
          </button>

        </>
      )}
    </div>
  );
}

OrderDetailsLabel.propTypes = {
  id: PropTypes.string.isRequired,
  sellerName: PropTypes.string,
  saleStatus: PropTypes.string.isRequired,
  statuses: PropTypes.shape({
    pending: PropTypes.string.isRequired,
    preparing: PropTypes.string.isRequired,
    inTransit: PropTypes.string.isRequired,
    delivered: PropTypes.string.isRequired,
  }).isRequired,
  date: PropTypes.string.isRequired,
  updateSale: PropTypes.func.isRequired,
  testPrefix: PropTypes.string.isRequired,
};

OrderDetailsLabel.defaultProps = {
  sellerName: '',
};

export default OrderDetailsLabel;
