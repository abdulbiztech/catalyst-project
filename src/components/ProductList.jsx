import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import "../styles/ProductList.css";
import cartImage from "../assets/images/Product_Listing2.png";

const ProductList = ({ addToCart, priceRange }) => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [productsPerPage] = useState(6); // Number of products per page

  const defaultImageUrl = cartImage;

  useEffect(() => {
    axios
      .get(
        "https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/products",
        {
          headers: {
            Authorization: "Bearer Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo",
          },
        }
      )
      .then((response) => setProducts(response.data.products))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const filterByPrice = (products) => {
    if (!priceRange) return products;
    const [min, max] = priceRange.split('-');
    return products.filter(product => {
      const price = parseFloat(product.price);
      if (max) {
        return price >= parseFloat(min) && price <= parseFloat(max);
      } else {
        return price >= parseFloat(min);
      }
    });
  };

  const filteredProducts = filterByPrice(products);

  // Logic for pagination
  const indexOfLastProduct = (currentPage + 1) * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  return (
    <div className="product-list container my-5">
      <div className="row">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <div className="col-md-4" key={product.id}>
              <div className="card mb-4">
                <div className="img-wrapper">
                  <img
                    src={defaultImageUrl}
                    className="card-img-top"
                    alt={product.name}
                  />
                  <button
                    className="btn add-to-cart"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>

                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">
                    <strong>INR {product.price}</strong>
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12">
            <p className="text-center">No products available in this price range.</p>
          </div>
        )}
      </div>
      {filteredProducts.length > productsPerPage && (
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={Math.ceil(filteredProducts.length / productsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      )}
    </div>
  );
};

export default ProductList;
