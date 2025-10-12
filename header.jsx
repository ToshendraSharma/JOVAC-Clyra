import React from 'react';

const Header = ({ cartCount, onCartClick }) => {
  return (
    <header className="header">
      <h1>E-Commerce Demo</h1>
      <button className="cart-icon" onClick={onCartClick}>
        🛒
        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
      </button>
    </header>
  );
};

export default Header;
