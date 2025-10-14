import React from 'react';
//import './Cart.css'; // Optional: If you want additional Cart-specific styles, but the main styles are in Clyra.css

const Cart = ({ 
  cartItems, 
  onClose, 
  onUpdateQuantity, 
  onRemove, 
  subtotal, 
  onCheckout, 
  isEmpty 
}) => {
  const incrementQuantity = (id) => {
    const currentItem = cartItems.find(item => item.id === id);
    onUpdateQuantity(id, currentItem.quantity + 1);
  };

  const decrementQuantity = (id) => {
    const currentItem = cartItems.find(item => item.id === id);
    onUpdateQuantity(id, currentItem.quantity - 1);
  };

  return (
    <div className="cart-modal-overlay" onClick={onClose}>
      <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Shopping Cart</h2>
          <button className="close-btn" onClick={onClose} aria-label="Close cart">
            &times;
          </button>
        </div>

        <div className="cart-body">
          {isEmpty ? (
            <div className="empty-cart">
              <h3>Your cart is empty</h3>
              <p>Add some products to get started!</p>
            </div>
          ) : (
            <>
              {cartItems.map((item) => {
                const price = parseInt(item.buyPrice.replace('₹', '').replace(',', ''));
                const itemTotal = price * item.quantity;

                return (
                  <div key={item.id} className="cart-item">
                    <img 
                      src={item.image || '/placeholder-image.jpg'} // Fallback if no image
                      alt={item.title}
                      className="cart-item-image"
                    />
                    <div className="cart-item-details">
                      <h3>{item.title}</h3>
                      <div className="cart-item-price">₹{itemTotal.toLocaleString()}</div>
                      <div className="quantity-controls">
                        <button onClick={() => decrementQuantity(item.id)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => incrementQuantity(item.id)}>+</button>
                      </div>
                    </div>
                    <button 
                      className="remove-btn" 
                      onClick={() => onRemove(item.id)}
                      aria-label={`Remove ${item.title} from cart`}
                    >
                      Remove
                    </button>
                  </div>
                );
              })}
            </>
          )}
        </div>

        {!isEmpty && (
          <div className="cart-total">
            <h3>Subtotal: ₹{subtotal.toLocaleString()}</h3>
            <button className="checkout-btn" onClick={onCheckout}>
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
