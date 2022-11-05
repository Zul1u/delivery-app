import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import replaceDot from '../helpers/replaceDot';
import DELIVERY_API from '../redux/services/api.fetch';

function Products() {
  const [productList, setProductList] = useState([]);
  const products = DELIVERY_API.getProducts();

  useEffect(() => {
    if (products.error) {
      console.log('error');
    }

    if (products.isLoading) {
      console.log('loading');
    }

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
    }
  }, [products]);

  useEffect(() => {

  }, []);

  const handleIncreaseBtn = (id) => {
    const index = productList.findIndex((prod) => prod.id === +id);

    productList[index].quantity += 1;

    setProductList([
      ...productList,
    ]);
  };

  const handleDecreaseBtn = (id) => {
    const foundProduct = productList.find((prod) => prod.id === id);

    if (foundProduct) {
      const index = productList.findIndex((prod) => prod.id === +id);

      if (productList[index].quantity !== 0) {
        productList[index].quantity -= 1;
        setProductList([
          ...productList,
        ]);
      }
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
            handleIncreaseBtn(product.id)
          ) }
          decreaseQtyFunc={ () => (
            handleDecreaseBtn(product.id)
          ) }
        />
      ))}
    </div>
  );
}

export default Products;
