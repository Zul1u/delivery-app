import React, { useState } from 'react';
import PropTypes from 'prop-types';

function OrderDetailsLabel(
  { id, saleStatus, statuses, date, sellerName, updateSale, testPrefix },
) {
  const [status, setStatus] = useState(saleStatus);
  return (
    <div className="order-info-container">
      {/* Número do pedido */}
      <div className="order-info order-info-header">
        <h3 data-testid={ `${testPrefix}element-order-details-label-order-id` }>
          {`PEDIDO${id}`}
        </h3>

        {/* Nome do vendedor */}
        {sellerName && (
          <p data-testid={ `${testPrefix}element-order-details-label-seller-name` }>
            {`P. Vend: ${sellerName}`}
          </p>
        )}
      </div>
      <div className="order-info order-info-body">
        {/* Data do pedido */}
        <p data-testid={ `${testPrefix}element-order-details-label-order-date` }>
          {date}
        </p>

        {/* Status atual do pedido */}
        <p data-testid={ `${testPrefix}element-order-details-label-delivery-status` }>
          {status}
        </p>
      </div>
      <div className="order-info-btn">
        {/* Renderização condicional dos botões que alteram o estado do pedido */}
        {sellerName ? (
          <div>
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
          </div>
        ) : (
          <>
            <div>
              <button
                data-testid={ `${testPrefix}button-preparing-check` }
                type="button"
                disabled={ status !== statuses.pending }
                onClick={ () => {
                  updateSale({ id, status: statuses.preparing });
                  setStatus(statuses.preparing);
                } }
              >
                PREPARAR PEDIDO
              </button>
            </div>
            <div>
              <button
                data-testid={ `${testPrefix}button-dispatch-check` }
                type="button"
                disabled={ status !== statuses.preparing }
                onClick={ () => {
                  updateSale({ id, status: statuses.inTransit });
                  setStatus(statuses.inTransit);
                } }
              >
                SAIU PARA ENTREGA
              </button>
            </div>
          </>
        )}
      </div>
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
