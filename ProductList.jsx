import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products, onSelectProduct }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductItem key={product.id} product={product} onSelect={onSelectProduct} />
      ))}
    </div>
  );
};

export default ProductList;