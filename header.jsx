import React from 'react';

const Header = ({ cartCount, onCartClick }) => {
  return (
    <header>
      <nav className="container">
        <div className="logo">
          <span className="logo-text">Clyra</span>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#categories">Categories</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#cart" className="cart-icon" onClick={(e) => { e.preventDefault(); onCartClick(); }}>
          🛒 Cart
          <span className="cart-count">{cartCount}</span>
        </a>
        <div className="mobile-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
