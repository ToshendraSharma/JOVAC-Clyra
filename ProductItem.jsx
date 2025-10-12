import React from 'react';

const ProductItem = ({ product, onSelect }) => {
  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p className="price">${product.price.toFixed(2)}</p>
      <button className="btn" onClick={() => onSelect(product)}>View Details</button>
    </div>
  );
};

export default ProductItem;