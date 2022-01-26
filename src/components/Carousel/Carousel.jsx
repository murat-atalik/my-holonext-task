import './carousel.scss';

import React, { useState } from 'react';

function Carousel({ products }) {
  const [translateX, setTranslateX] = useState(0);

  const handleLeft = () => {
    if (translateX === 0) {
      setTranslateX(-100 * (products.length - 1));
    } else {
      setTranslateX(translateX + 100);
    }
  };

  const handleRight = () => {
    if (translateX === -100 * (products.length - 1)) {
      setTranslateX(0);
    } else {
      setTranslateX(translateX - 100);
    }
  };

  return (
    <div className="carousel-container">
      {products.map((product) => (
        <div
          className="carousel-item"
          key={product.id}
          style={{ transform: `translateX(${translateX}%)` }}
        >
          <p>{product.title}</p>
        </div>
      ))}
      <button
        type="button"
        className="carousel-button-left"
        onClick={handleLeft}
      >
        <i className="fas fa-chevron-left" />
      </button>
      <button
        type="button"
        className="carousel-button-right"
        onClick={handleRight}
      >
        <i className="fas fa-chevron-right" />
      </button>
    </div>
  );
}

export default Carousel;
