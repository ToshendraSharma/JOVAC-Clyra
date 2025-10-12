import React from 'react';
import ProductCard from './ProductCard';

const Products = ({ products, onAddToCart, onToggleOption }) => {
  return (
    <section className="products" id="products">
      <div className="container">
        <h2 className="section-title">Featured Products</h2>
        <div className="product-grid">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onToggleOption={onToggleOption}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;