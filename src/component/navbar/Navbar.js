import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const state = useSelector((state) => state);

  return (
    <nav>
      <div className="main-navbar">
        <h3>E-MART</h3>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="#">About</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="#">Shop</Link>
          </li>
          <li>
            <Link to="#">Help</Link>
          </li>

          <Link to="/cart" className="btn-1">
            <span>
              <i className="fas fa-shopping-basket  me-1 text-danger "> </i>
              Cart ({state?.length})
            </span>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
