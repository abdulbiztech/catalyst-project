import React from 'react';
import "../styles/Footer.css";
import logo2 from "../assets/images/logo2.png"
import payment_icons from "../assets/images/payment_icons.png"

const Footer = () => {
  return (
    <footer className='footer-div'>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-2 text-left">
            <h1 className="footer-logo">
              RIGHTFIT.COM
            </h1>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-link">Home</a></li>
              <li><a href="#" className="footer-link">All Products</a></li>
              <li><a href="#" className="footer-link">Featured Products</a></li>
              <li><a href="#" className="footer-link">Contact</a></li>
              <li><a href="#" className="footer-link">About Us</a></li>
            </ul>
          </div>
          <div className="col-md-8 mb-0 payment-text">
            <p>
              We are a registered E-Commerce seller and we support a variety of Local and International
              payment modes
            </p>
            <div className="payment-icons">
              <img src={payment_icons} alt="Payment Icons" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-2 text-right">
            <p>
              Website protected by
            </p>
            <img src={logo2} alt="DigiCert Logo" className="digicert-logo"/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
