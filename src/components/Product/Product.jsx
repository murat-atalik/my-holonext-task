import './product.scss';

import React from 'react';

function Product({ product }) {
  return (
    <div className="product-container">
      <div className="product-detail-card">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
      </div>

      <div className="product-detail-card">
        <div className="product-detail-image">
          <img src={product.image} alt={product.title} />
        </div>
      </div>

      <div className="product-detail-card">
        <button type="button" onClick={() => console.log('modal opened')}>
          Open Modal
        </button>
      </div>
    </div>
  );
}

export default Product;
