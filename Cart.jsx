import React from 'react';

const Cart = ({ cart, onUpdateQuantity, onRemove, totalPrice, onClose }) => {
  if (cart.length === 0) {
    return null; // Don't render if empty
  }

  return (
    <>
      {/* Overlay */}
      <div className="cart-overlay show" onClick={onClose}></div>
      
      {/* Sidebar */}
      <div className={`cart-sidebar open`}>
        <div className="cart-header">
          <h2>Shopping Cart ({cart.length} items)</h2>
          <button className="close-cart" onClick={onClose}>×</button>
        </div>
        
        <div className="cart-items">
          {cart.map((item) => (
            <div key={`${item.id}-${item.type}`} className="cart-item">
              <img src={getProductImage(item.id)} alt={item.title} /> {/* You'll need to map id to image; see note below */}
              <div className="cart-item-info">
                <h4>{item.title}</h4>
                <p className="cart-item-price">
                  ₹{item.price.toLocaleString()} {item.type === 'rent' ? '/day' : ''} × {item.quantity}
                </p>
              </div>
              <div className="quantity-controls">
                <button className="quantity-btn" onClick={() => onUpdateQuantity(item.id, item.type, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button className="quantity-btn" onClick={() => onUpdateQuantity(item.id, item.type, item.quantity + 1)}>+</button>
              </div>
              <button
                className="close-cart"
                style={{ marginLeft: '10px', fontSize: '1.2rem' }}
                onClick={() => onRemove(item.id, item.type)}
              >
                ×
              </button>
            </div>
          ))}
        </div>
        
        <div className="cart-total">
          <p>Total: ₹{totalPrice.toLocaleString()}</p>
          <button className="checkout-btn" onClick={() => { alert('Redirecting to checkout... (Demo)'); onClose(); }}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </>
  );

  // Helper function to get image by ID (add this to App.js or use a map)
  function getProductImage(id) {
    const images = {
      1: 'https://i.pinimg.com/736x/e1/b8/fe/e1b8fe0405c0212edfd4b17416412d7c.jpg',
      2: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400',
      3: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400',
      4: 'https://i.pinimg.com/736x/ca/75/a3/ca75a3d7fb953fd10be6c378703d972b.jpg',
      5: '/premium suits.webp',
      6: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400',
    };
    return images[id] || 'https://via.placeholder.com/60?text=Item';
  }
};

export default Cart;