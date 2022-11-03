import React from 'react';
import PropTypes from 'prop-types';

function ProductCard({
  id, name, price, urlImage, increaseQtyFunc, decreaseQtyFunc, qtyInput,
}) {
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
          value={ decreaseQtyFunc }
        />

        {/* Item quantity */ }
        <input
          data-testid={ `customer_products__input-card-quantity-${id}` }
          type="text"
          name="qty"
          id="qty"
          value={ qtyInput }
        />

        {/* Increase item quantity */}
        <input
          data-testid={ `customer_products__button-card-add-item-${id}` }
          type="button"
          name="increaseQty"
          value={ increaseQtyFunc }
        />
      </div>

    </div>
  );
}

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  urlImage: PropTypes.string.isRequired,
  increaseQtyFunc: PropTypes.func.isRequired,
  decreaseQtyFunc: PropTypes.func.isRequired,
  qtyInput: PropTypes.number.isRequired,
};

export default ProductCard;
