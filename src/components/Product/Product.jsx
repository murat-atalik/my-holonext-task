import './product.scss';

import React from 'react';
import { Link } from 'react-router-dom';

function Product({ product }) {
  return (
    <div className="product-wrapper">
      <div className="product-title">
        <h2>{product.title}</h2>
      </div>
      <div className="product-container">
        <div className="product-detail-card">
          <h2>Description</h2>
          <p>{product.description}</p>
        </div>

        <div className="product-detail-card">
          <div className="product-detail-image">
            <img src={product.image} alt={product.title} />
          </div>
        </div>

        <Link to={`/${product.sceneId}`} className="product-detail-card">
          <div className="product-detail-ar">
            <div className="circle">
              <i className="fas fa-caret-up" />
              <i className="fas fa-caret-down" />
            </div>
            <h2>Augmented Reality</h2>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Product;
