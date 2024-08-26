// App.js
import React, { useState } from 'react';
import Header from './components/Header';
import MainSection from './components/MainSection';
import ProductList from './components/ProductList';
import Filter from './components/Filter';
import Cart from './components/Cart';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    setShowCart(true);
  };

  const removeFromCart = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  };

  return (
    <div className="App">
      <Header cartItems={cartItems} />
      <MainSection />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Filter />
          </div>
          <div className="col-md-9">
            <ProductList addToCart={addToCart} />
          </div>
        </div>
      </div>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      <Footer />
    </div>
  );
}

export default App;
