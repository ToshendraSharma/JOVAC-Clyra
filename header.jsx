import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ cartCount, onCartClick }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen);

  return (
    <header>
      <nav className="container">
        <div className="logo">
          <span className="logo-text">Clyra</span>
        </div>
        <ul className={`nav-links ${isMobileOpen ? 'mobile-open' : ''}`}>
          <li><Link to="/" onClick={toggleMobileMenu}>Home</Link></li>
          <li><Link to="/categories" onClick={toggleMobileMenu}>Categories</Link></li>
          <li><Link to="/products" onClick={toggleMobileMenu}>Products</Link></li>
          <li><Link to="/about" onClick={toggleMobileMenu}>About</Link></li>
          <li><Link to="/contact" onClick={toggleMobileMenu}>Contact</Link></li>
        </ul>
        <Link to="#" className="cart-icon" onClick={onCartClick}>
          🛒 Cart
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </Link>
        <div className="mobile-menu" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
      <style jsx>{`
        .nav-links.mobile-open { display: flex; flex-direction: column; position: absolute; top: 100%; left: 0; background: rgba(255,255,255,0.95); width: 100%; padding: 1rem; }
        @media (min-width: 769px) { .nav-links.mobile-open { display: flex; } }
      `}</style>
    </header>
  );
};

export default Header;