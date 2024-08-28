import React, { useState } from 'react';
import Header from './components/Header';
import MainSection from './components/MainSection';
import ProductList from './components/ProductList';
import Filter from './components/Filter';
import Cart from './components/Cart';
import Footer from './components/Footer';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };


  return (
    <div className="App">
      <Header cartItems={cartItems} />
      <MainSection />
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <Filter />
          </div>
          <div className="col-md-10">
            <ProductList addToCart={addToCart} />
          </div>
        </div>
      </div>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart}/>
      <Footer />
    </div>
  );
}

export default App;
