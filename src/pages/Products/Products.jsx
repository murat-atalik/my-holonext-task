import './Products.scss';

import React from 'react';

import data from '../../assets/data';
import Carousel from '../../components/Carousel/Carousel';

function Products({ openFooter }) {
  const products = data;
  return (
    <div
      className={
        !openFooter ? 'products-container' : 'products-container-footer'
      }
    >
      <Carousel products={products} />
    </div>
  );
}

export default Products;
