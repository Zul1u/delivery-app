import React from 'react';
import PropTypes from 'prop-types';

function ProductCard({ id, name, price, urlImage }) {
  return (
    <div>
      <span data-test-id={ `customer_products__element-card-price-${id}` }>
        R$
        {price}
      </span>

      <img src={ urlImage } alt="" />

      <span data-test-id={ `customer_products__element-card-title-${id}` }>
        { name }
      </span>

      <div>
        <input
          type="button"
          name="decreaseQty"
          value="-"
        />

        <input type="text" name="qty" id="qty" value="0" />

        <input
          type="button"
          name="increaseQty"
          value="+"
        />
      </div>

    </div>
  );
}

ProductCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.string,
  urlImage: PropTypes.string,
};

ProductCard.defaultProps = {
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.string,
  urlImage: PropTypes.string,
};

export default ProductCard;
