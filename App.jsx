import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Features from './components/Features';
import Footer from './components/Footer';
import Cart from './components/Cart';
import './App.css';

// Initial products data (from your HTML, with selectedOption for buy/rent)
const initialProducts = [
  {
    id: 1,
    title: 'Designer Silk Saree',
    image: 'https://i.pinimg.com/736x/e1/b8/fe/e1b8fe0405c0212edfd4b17416412d7c.jpg',
    buyPrice: 2999,
    rentPrice: 299,
    rating: 5,
    reviews: 128,
    selectedOption: 'buy',
  },
  {
    id: 2,
    title: 'Denim Jacket',
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400',
    buyPrice: 2499,
    rentPrice: 299,
    rating: 5,
    reviews: 89,
    selectedOption: 'buy',
  },
  {
    id: 3,
    title: 'Evening Gown',
    image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400',
    buyPrice: 18999,
    rentPrice: 1899,
    rating: 3,
    reviews: 256,
    selectedOption: 'buy',
  },
  {
    id: 4,
    title: 'Wedding Lehenga',
    image: 'https://i.pinimg.com/736x/ca/75/a3/ca75a3d7fb953fd10be6c378703d972b.jpg',
    buyPrice: 45999,
    rentPrice: 4599,
    rating: 5,
    reviews: 174,
    selectedOption: 'buy',
  },
  {
    id: 5,
    title: 'Premium Suit',
    image: '/premium suits.webp', // Ensure this file is in public/
    buyPrice: 25999,
    rentPrice: 2599,
    rating: 5,
    reviews: 92,
    selectedOption: 'buy',
  },
  {
    id: 6,
    title: 'Party Dress',
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400',
    buyPrice: 6999,
    rentPrice: 699,
    rating: 5,
    reviews: 203,
    selectedOption: 'buy',
  },
];

function App() {
  const [cart, setCart] = useState([]); // Cart items: [{id, title, price, type: 'buy'|'rent', quantity}]
  const [showCart, setShowCart] = useState(false);
  const [products, setProducts] = useState(initialProducts);

  // Add to cart (handles buy/rent separately)
  const addToCart = (productId, selectedOption) => {
    const product = products.find(p => p.id === productId);
    const price = selectedOption === 'buy' ? product.buyPrice : product.rentPrice;
    const typeLabel = selectedOption === 'rent' ? '/day' : '';
    const existingItem = cart.find(item => item.id === productId && item.type === selectedOption);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === productId && item.type === selectedOption
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, {
        id: productId,
        title: `${product.title} (${selectedOption})`,
        price,
        type: selectedOption,
        typeLabel,
        image: product.image,
        quantity: 1
      }]);
    }
  };

  // Update quantity in cart
  const updateQuantity = (id, type, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id, type);
    } else {
      setCart(cart.map(item => 
        (item.id === id && item.type === type) ? { ...item, quantity } : item
      ));
    }
  };

  // Remove from cart
  const removeFromCart = (id, type) => {
    setCart(cart.filter(item => !(item.id === id && item.type === type)));
  };

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  // Cart item count
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Toggle buy/rent option for a product
  const toggleOption = (id, option) => {
    setProducts(products.map(p => p.id === id ? { ...p, selectedOption: option } : p));
  };

  return (
    <Router>
      <div className="App">
        {/* Header - Always visible */}
        <Header cartCount={cartCount} onCartClick={() => setShowCart(!showCart)} />
        
        {/* Cart Sidebar - Conditional */}
        {showCart && (
          <Cart
            cart={cart}
            products={products} // Pass products for image lookup if needed
            onUpdateQuantity={updateQuantity}
            onRemove={removeFromCart}
            totalPrice={totalPrice}
            onClose={() => setShowCart(false)}
          />
        )}

        {/* Main Routes */}
        <Routes>
          {/* Home Page */}
          <Route path="/" element={
            <>
              <Hero />
              <Categories />
              <Products products={products} onAddToCart={addToCart} onToggleOption={toggleOption} />
              <Features />
            </>
          } />
          
          {/* About Page */}
          <Route path="/about" element={
            <>
              <About />
              <Features />
            </>
          } />
          
          {/* Contact Page */}
          <Route path="/contact" element={<Contact />} />
          
          {/* Products Page (Standalone) */}
          <Route path="/products" element={
            <Products products={products} onAddToCart={addToCart} onToggleOption={toggleOption} />
          } />
          
          {/* Categories Page (Standalone) */}
          <Route path="/categories" element={<Categories />} />
        </Routes>

        {/* Footer - Always visible on every page */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;