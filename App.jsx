import React, { useState } from 'react';
import Header from './components/header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import ProductDetail from './components/ProductDetail';
import './App.css'; // Or import './styles.css' if you rename it

// Fake product data
const products = [
  { id: 1, name: 'Wireless Headphones', price: 99.99, image: 'https://via.placeholder.com/200x200?text=Headphones', description: 'High-quality wireless headphones with noise cancellation.' },
  { id: 2, name: 'Smart Watch', price: 199.99, image: 'https://via.placeholder.com/200x200?text=Watch', description: 'Fitness tracker with heart rate monitor.' },
  { id: 3, name: 'Laptop Backpack', price: 49.99, image: 'https://via.placeholder.com/200x200?text=Backpack', description: 'Durable backpack for laptops up to 15 inches.' },
  { id: 4, name: 'Bluetooth Speaker', price: 79.99, image: 'https://via.placeholder.com/200x200?text=Speaker', description: 'Portable speaker with 10-hour battery life.' },
];

function App() {
  const [cart, setCart] = useState([]); // Cart items: [{id, name, price, quantity}]
  const [selectedProduct, setSelectedProduct] = useState(null); // For product details
  const [showCart, setShowCart] = useState(false); // Toggle cart visibility

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      setCart(cart.map(item => item.id === id ? { ...item, quantity } : item));
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="App">
      <Header cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} onCartClick={() => setShowCart(!showCart)} />
      
      {showCart && (
        <Cart
          cart={cart}
          onUpdateQuantity={updateQuantity}
          onRemove={removeFromCart}
          totalPrice={totalPrice}
          onClose={() => setShowCart(false)}
        />
      )}

      {selectedProduct ? (
        <ProductDetail
          product={selectedProduct}
          onAddToCart={addToCart}
          onBack={() => setSelectedProduct(null)}
        />
      ) : (
        <ProductList products={products} onSelectProduct={setSelectedProduct} />
      )}
    </div>
  );
}

export default App;