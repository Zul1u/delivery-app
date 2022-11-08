import React from 'react';
import PropTypes from 'prop-types';

function OrderDetailsHeader({ id, saleStatus, statuses, date, sellerName, updateSale }) {
  return (
    <div>
      {/* Número do pedido */}
      <h3>{`PEDIDO${id}`}</h3>

      {/* Nome do vendedor */}
      { sellerName && (
        <p>{`P. Vend: ${sellerName}`}</p>
      )}

      {/* Data do pedido */}
      <p>{date}</p>

      {/* Status atual do pedido */}
      <p>{saleStatus}</p>

      {/* Renderização condicional dos botões que alteram o estado do pedido */}
      { sellerName ? (
        <button
          type="button"
          onClick={ () => updateSale({ id, status: statuses.delivered }) }
        >
          MARCAR COMO ENTREGUE
        </button>
      ) : (
        <>

          <button
            type="button"
            disabled={ saleStatus !== statuses.pending }
            onClick={ () => updateSale({ id, status: statuses.preparing }) }
          >
            PREPARAR PEDIDO
          </button>

          <button
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

OrderDetailsHeader.propTypes = {
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
};

OrderDetailsHeader.defaultProps = {
  sellerName: '',
};

export default OrderDetailsHeader;
