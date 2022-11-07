import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import replaceDot from '../helpers/replaceDot';
import DELIVERY_API from '../redux/services/api.fetch';
import StorageManager from '../utils/StorageManager';

function Products() {
  const [productList, setProductList] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState('0,00');
  const products = DELIVERY_API.getProducts();
  const navigate = useNavigate();

  useEffect(() => {
    if (products.error) console.log('error');

    if (products.isLoading) console.log('loading');

    if (products.data) {
      const newState = products.data.map((e) => {
        const object = {
          id: e.id,
          name: e.name,
          quantity: 0,
          unitPrice: e.price,
          image: e.urlImage,
        };
        return object;
      });
      setProductList(newState);

      const loadCart = StorageManager.loadCart();
      setCart(loadCart);
    }
  }, [products]);

  useEffect(() => {
    const updateCart = StorageManager.loadCart();
    setCart(updateCart);
  }, [productList]);

  const cartTotalPrice = () => {
    let cartValue = 0.00;
    let pricing = replaceDot(cartValue.toFixed(2));

    cart.forEach((product) => {
      cartValue += (+product.unitPrice * product.quantity);
      pricing = replaceDot(cartValue.toFixed(2));
    });

    setTotalPrice(pricing);
  };

  useEffect(() => {
    cart.forEach((cartItem) => {
      productList.forEach((product) => {
        if (product.id === cartItem.id) product.quantity = cartItem.quantity;
      });
    });

    cartTotalPrice();
  }, [cart]);

  const handleIncreaseButton = (id) => {
    const index = productList.findIndex((prod) => prod.id === +id);

    productList[index].quantity += 1;

    setProductList([
      ...productList,
    ]);

    if (productList[index].quantity > 0) {
      StorageManager.saveCart(productList[index]);
    }
  };

  const handleDecreaseButton = (id) => {
    const index = productList.findIndex((prod) => prod.id === +id);

    if (productList[index].quantity > 0) {
      productList[index].quantity -= 1;
      StorageManager.saveCart(productList[index]);
    }

    setProductList([
      ...productList,
    ]);

    if (productList[index].quantity === 0) {
      StorageManager.removeCart(productList[index]);
    }
  };

  const handleInputChange = ({ target }, id) => {
    const index = productList.findIndex((prod) => prod.id === +id);

    productList[index].quantity = +target.value;

    setProductList([
      ...productList,
    ]);

    if (productList[index].quantity > 0) {
      StorageManager.saveCart(productList[index]);
    }

    if (productList[index].quantity <= 0) {
      StorageManager.removeCart(productList[index]);
    }
  };

  return (
    <div>
      <Header />
      {!products.isLoading && productList.map((product, i) => (
        <ProductCard
          key={ i }
          id={ product.id }
          name={ product.name }
          price={ replaceDot(product.unitPrice) }
          urlImage={ product.image }
          qtyInput={ product.quantity }
          increaseQtyFunc={ () => (
            handleIncreaseButton(product.id)
          ) }
          decreaseQtyFunc={ () => (
            handleDecreaseButton(product.id)
          ) }
          handleChange={ (event) => handleInputChange(event, product.id) }
        />
      ))}
      <button
        type="button"
        data-testid="customer_products__button-cart"
        onClick={ () => navigate('/customer/checkout') }
        disabled={ totalPrice === '0,00' }
      >
        <span
          data-testid="customer_products__checkout-bottom-value"
        >
          { `Ver Carrinho R$ ${totalPrice}` }
        </span>
      </button>
    </div>
  );
}

export default Products;
