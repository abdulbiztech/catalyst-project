import React from 'react';
import '../styles/Cart.css';
import cartImage from "../assets/images/Product_Listing2.png";

const Cart = ({ cartItems, removeFromCart, visible, toggleCart }) => {
  const defaultImageUrl = cartImage;
  if (!visible) return null; 
  return (
    <div className={`cart ${visible ? 'show' : 'hide'}`}>
      <button className="close-button" onClick={toggleCart}>×</button>
      <h4>Shopping Cart ({cartItems.length})</h4>
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
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
        ))
      ) : (
        <p>No items in the cart</p>
      )}
    </div>
  );
};

export default Cart;
