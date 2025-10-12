import React from 'react';

const Cart = ({ cart, onUpdateQuantity, onRemove, totalPrice, onClose }) => {
  return (
    <>
      <div className={`cart ${cart.length > 0 ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>Shopping Cart</h2>
          <button className="btn btn-secondary" onClick={onClose}>×</button>
        </div>
        <div className="cart-items">
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <p>${item.price.toFixed(2)} each</p>
                </div>
                <div className="quantity-controls">
                  <button className="quantity-btn" onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button className="quantity-btn" onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <button className="btn btn-secondary" onClick={() => onRemove(item.id)}>Remove</button>
              </div>
            ))
          )}
        </div>
        {cart.length > 0 && (
          <div className="cart-total">
            Total: ${totalPrice.toFixed(2)}
            <br />
            <button className="btn" style={{ marginTop: '10px', width: '100%' }}>Checkout</button>
          </div>
        )}
      </div>
      <div className={`overlay ${cart.length > 0 ? 'show' : ''}`} onClick={onClose}></div>
    </>
  );
};

export default Cart;