import React from 'react';

const Cart = ({ cartItems, onClose, onUpdateQuantity, onRemove, subtotal }) => {
  return (
    <div className="cart-modal-overlay" onClick={onClose}>
      <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Shopping Cart</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        <div className="cart-body">
          {cartItems.length === 0 ? (
            <p>Your cart is empty. <a href="#products">Shop now!</a></p>
          ) : (
            <>
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.title} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h3>{item.title}</h3>
                    <p className="cart-item-price">{item.buyPrice}</p>
                    <div className="quantity-controls">
                      <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                  </div>
                  <button className="remove-btn" onClick={() => onRemove(item.id)}>Remove</button>
                </div>
              ))}
              <div className="cart-total">
                <h3>Subtotal: ₹{subtotal.toLocaleString()}</h3>
                <button className="checkout-btn">Proceed to Checkout</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
