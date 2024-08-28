import React from 'react';
import '../styles/MainSection.css';

const MainSection = () => {
  return (
    <section className="main-section">
      <div className="content-wrapper">
        <h1>Latest Styles</h1>
        <p>At Yesterday's Prices</p>
        <a href="#" className="btn btn-danger">Browse All Styles</a>
      </div>
    </section>
  );
};

export default MainSection;
