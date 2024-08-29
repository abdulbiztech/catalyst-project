import React, { useState } from "react";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import ProductList from "./components/ProductList";
import Filter from "./components/Filter";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [priceRange, setPriceRange] = useState("");
  const [isCartVisible, setIsCartVisible] = useState(false);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    setIsCartVisible(true); // Open the cart when a product is added
  };

  const removeFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <div className="App">
      <Header cartItems={cartItems} toggleCart={toggleCart} />
      <MainSection />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <Filter setPriceRange={setPriceRange} />
          </div>
          <div className="col-md-10">
            <ProductList addToCart={addToCart} priceRange={priceRange} />
          </div>
        </div>
      </div>
      <Cart 
        cartItems={cartItems} 
        removeFromCart={removeFromCart} 
        visible={isCartVisible}
        toggleCart={toggleCart} 
      />
      <Footer />
    </div>
  );
}

export default App;
