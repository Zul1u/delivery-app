import React from 'react';
import PropTypes from 'prop-types';

function ProductCard({ id, name, price, urlImage }) {
  return (
    <div>
      {/* Product price */}
      <span data-testid={ `customer_products__element-card-price-${id}` }>
        R$
        {price}
      </span>

      {/* Product image */}
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ urlImage }
        alt=""
      />

      {/* Product name */}
      <span data-testid={ `customer_products__element-card-title-${id}` }>
        { name }
      </span>

      <div>
        {/* Decrease item quantity */}
        <input
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          type="button"
          name="decreaseQty"
          value="-"
        />

        {/* Item quantity */ }
        <input
          data-testid={ `customer_products__input-card-quantity-${id}` }
          type="text"
          name="qty"
          id="qty"
          value="0"
        />

        {/* Increase item quantity */}
        <input
          data-testid={ `customer_products__button-card-add-item-${id}` }
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
