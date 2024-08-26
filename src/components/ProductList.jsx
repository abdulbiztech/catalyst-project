import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/ProductList.css';

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from API with Authorization header
    axios
      .get('https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/products', {
        headers: {
          Authorization: 'Bearer Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo',
        },
      })
      .then(response => setProducts(response.data.products))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="product-list container my-5">
      <div className="row">
        {products.map(product => (
          <div className="col-md-4" key={product.id}>
            <div className="card mb-4">
              <div className="img-wrapper">
                <img src={product.image} className="card-img-top" alt={product.name} />
                <button
                  className="btn btn-primary add-to-cart"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text"><strong>INR {product.price}</strong></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
