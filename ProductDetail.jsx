import React from 'react';

const ProductDetail = ({ product, onAddToCart, onBack }) => {
  return (
    <div className="product-detail">
      <button className="btn btn-secondary" onClick={onBack}>← Back to Products</button>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p className="price">${product.price.toFixed(2)}</p>
      <p>{product.description}</p>
      <button className="btn" onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;