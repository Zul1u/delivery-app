import React from 'react';
import PropTypes from 'prop-types';

function ProductCard({
  id, name, price, urlImage, increaseQtyFunc, decreaseQtyFunc, qtyInput,
}) {
  return (
    <div>
      {/* Product price */}
      <span data-testid={ `customer_products__element-card-price-${id}` }>
        {price}
      </span>

      {/* Product image */}
      <a href={ urlImage }>
        <img
          data-testid={ `customer_products__img-card-bg-image-${id}` }
          src={ urlImage }
          alt=""
          width="150px"
        />

      </a>

      {/* Product name */}
      <span data-testid={ `customer_products__element-card-title-${id}` }>
        { name }
      </span>

      <div>
        {/* Decrease item quantity */}
        <button
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          type="button"
          name="decreaseQty"
          onClick={ decreaseQtyFunc }
        >
          -
        </button>

        {/* Item quantity */ }
        <input
          data-testid={ `customer_products__input-card-quantity-${id}` }
          type="number"
          name="qty"
          id="qty"
          value={ qtyInput }
        />

        {/* Increase item quantity */}
        <button
        // customer_products__button-card-add-item-<id>
          data-testid={ `customer_products__button-card-add-item-${id}` }
          type="button"
          name="increaseQty"
          onClick={ increaseQtyFunc }
        >
          +
        </button>
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
