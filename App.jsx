import React, { useState } from 'react';
import './Clyra.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Features from './components/Features';
import Footer from './components/Footer';
import Cart from './components/Cart'; // New import

function App() {
  const [cartItems, setCartItems] = useState([]); // Cart state: array of products
  const [showCart, setShowCart] = useState(false); // Toggle cart modal

  const addToCart = (product) => {
    // Check if item already in cart
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      // Increment quantity
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      // Add new item
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      setCartItems(cartItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      ));
    }
  };

  const getCartCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getSubtotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseInt(item.buyPrice.replace('₹', '').replace(',', '')); // Extract numeric price
      return total + (price * item.quantity);
    }, 0);
  };

  return (
    <div className="App">
      <Header cartCount={getCartCount()} onCartClick={() => setShowCart(true)} />
      <Hero />
      <Categories />
      <Products onAddToCart={addToCart} />
      <About />
      <Contact />
      <Features />
      <Footer />

      {/* Cart Modal */}
      {showCart && (
        <Cart
          cartItems={cartItems}
          onClose={() => setShowCart(false)}
          onUpdateQuantity={updateQuantity}
          onRemove={removeFromCart}
          subtotal={getSubtotal()}
        />
      )}
    </div>
  );
}

export default App;
