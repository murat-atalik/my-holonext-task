import './productAr.scss';

import React from 'react';
import { useParams } from 'react-router-dom';

import useScript from '../../hooks/useScript';

/* TODO:Line 21 is temporary solution at least i find the problem. Problem is basically holonext-viewer only runs once when there is a conditional state. */
/*  FIXME: Bad solution, I use tag a to refresh the page, the problem will go away as tag a will refresh the page. But it's a BAD way  */
/* Because REACT SINGLE PAGE APPLICATION */

function ProductAr({ openFooter }) {
  const { sceneId } = useParams();

  useScript(
    'https://holonext.azurewebsites.net/public/js/hn-sdk-embed-v4-without-variants.js'
  );

  if (!sceneId) {
    return <div>Loading...</div>;
  }

  return (
    <div className={!openFooter ? 'product-ar' : 'product-ar-footer'}>
      <div className="product-ar-container">
        <div className="product-ar-viewer">
          <holonext-viewer sceneId={sceneId} />
        </div>
        <a href="/my-holonext-task/" className="prev-page-button">
          <i className="fas fa-chevron-left" />
        </a>
      </div>
    </div>
  );
}

export default ProductAr;
