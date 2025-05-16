import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { productId } = useParams();

  return (
    <div>
      <h1>Product Details</h1>
      <p>Details for product: {productId}</p>
    </div>
  );
}

export default ProductDetail;
