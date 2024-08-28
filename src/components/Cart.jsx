import React from 'react';
import '../styles/Cart.css';

const Cart = ({ cartItems, removeFromCart }) => {
  const defaultImageUrl = 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFtYXpvbmUlMjBwcm9kdWN0fGVufDB8fDB8fHww';
  return (
    <div className={`cart ${cartItems.length > 0 ? 'show' : 'hide'}`}>
      <h4>Shopping Cart</h4>
      {cartItems.map((item, index) => (
        <div className="cart-item" key={index}>
          <img src={defaultImageUrl} alt={item.name} className="cart-item-image" />
          <div className="cart-item-details">
            <h5>{item.name}</h5>
            <p className="item-color">{item.color}</p>
            <p className="item-material">{item.material}</p>
            <p className="item-price">INR {item.price}</p>
            <button
              className="remove-button"
              onClick={() => removeFromCart(index)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
