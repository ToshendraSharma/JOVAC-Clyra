import React from 'react';

const ProductCard = ({ product, onAddToCart, onToggleOption }) => {
  const stars = '⭐'.repeat(product.rating);

  const handleOptionClick = (option) => {
    onToggleOption(product.id, option);
  };

  const handleAddToCart = () => {
    onAddToCart(product.id, product.selectedOption);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <div className="price-options">
          <div
            className={`price-option ${product.selectedOption === 'buy' ? 'active' : ''}`}
            onClick={() => handleOptionClick('buy')}
          >
            <div className="option-type">Buy</div>
            <div className="option-price">₹{product.buyPrice.toLocaleString()}</div>
          </div>
          <div
            className={`price-option ${product.selectedOption === 'rent' ? 'active' : ''}`}
            onClick={() => handleOptionClick('rent')}
          >
            <div className="option-type">Rent</div>
            <div className="option-price">₹{product.rentPrice}/day</div>
          </div>
        </div>
        <div className="product-rating">
          <span className="stars">{stars}</span>
          <span>({product.reviews} reviews)</span>
        </div>
        <button className="add-to-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;