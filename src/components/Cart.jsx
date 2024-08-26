import React from 'react';
import '../styles/Cart.css';

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div className={`cart ${cartItems.length > 0 ? 'show' : 'hide'}`}>
      <h4>Shopping Cart</h4>
      {cartItems.map((item, index) => (
        <div className="cart-item" key={index}>
          <p>{item.name}</p>
          <p>
            INR {item.price}{' '}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => removeFromCart(index)}
            >
              Remove
            </button>
          </p>
        </div>
      ))}
      <div className="cart-total">
        <strong>
          Total: INR{' '}
          {cartItems.reduce((total, item) => total + parseFloat(item.price), 0)}
        </strong>
      </div>
    </div>
  );
};

export default Cart;
