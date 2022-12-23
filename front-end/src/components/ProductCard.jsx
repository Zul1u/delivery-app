import React from 'react';
import PropTypes from 'prop-types';
import replaceDot from '../helpers/replaceDot';

function ProductCard({
  id, name, price, urlImage, increaseQtyFunc, decreaseQtyFunc, qtyInput,
  handleChange,
}) {
  return (
    <div className="product-card">
      <div className="card">
        {/* Product image */}
        <a href={ urlImage }>
          <img
            data-testid={ `customer_products__img-card-bg-image-${id}` }
            src={ urlImage }
            alt=""
          />
        </a>

        {/* Product name */}
        <span data-testid={ `customer_products__element-card-title-${id}` }>
          { name }
        </span>

        {/* Product price */}
        <span data-testid={ `customer_products__element-card-price-${id}` }>
          { `Valor: R$ ${replaceDot(price)}` }
        </span>

        <div className="qtl-product-container">
          {/* Decrease item quantity */}
          <button
            className="bnt-l"
            data-testid={ `customer_products__button-card-rm-item-${id}` }
            type="button"
            name="decreaseQty"
            onClick={ decreaseQtyFunc }
          >
            -
          </button>

          {/* Item quantity */ }
          <input
            className="aaa"
            data-testid={ `customer_products__input-card-quantity-${id}` }
            type="number"
            name="qty"
            id="qty"
            value={ qtyInput }
            onChange={ handleChange }
          />

          {/* Increase item quantity */}
          <button
            className="bnt-r"
            data-testid={ `customer_products__button-card-add-item-${id}` }
            type="button"
            name="increaseQty"
            onClick={ increaseQtyFunc }
          >
            +
          </button>
        </div>
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
  handleChange: PropTypes.func.isRequired,
};

export default ProductCard;
