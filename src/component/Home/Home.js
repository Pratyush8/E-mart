import React from "react";
import Products from "../products/Products";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="main-header">
        <h3>Shopping With E-Mart</h3>
        <div className="bottom-line"></div>
        <span>
          <input type="text" placeholder="Search" />
          <button type="submit" className="btn-2">
            Submit
          </button>
        </span>
      </div>
      <Products />
    </>
  );
};

export default Home;
