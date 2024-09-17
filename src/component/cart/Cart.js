import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { addCart, delCart } from "../redux/action";
import Payment from "./Payment";
import ShippingDetails from "./ShippingDetails";
import ShoppingCart from "./ShoppingCart";
import "./cart.css";

const Cart = () => {
  // const state = useSelector((state) => state.handleCart);
  // const dispatch = useDispatch();

  return (
    <div className="container-fluid  ">
      <ul className="nav nav-tabs  d-flex justify-content-center bg-light border p-5">
        <li className="nav-item  me-3">
          <a className="nav-link  active" data-toggle="tab" href="#first">
            1. Shopping Cart
          </a>
        </li>
        <li className="nav-item me-3">
          <a className="nav-link  " data-toggle="tab" href="#second">
            2. Shipping Details
          </a>
        </li>
        <li className="nav-item me-3">
          <a className="nav-link  " data-toggle="tab" href="#third">
            3. Payment Options
          </a>
        </li>
      </ul>
      <div className="tab-content">
        <div className="tab-pane" id="second">
          <ShippingDetails />
        </div>
        <div className="tab-pane active" id="first">
          <ShoppingCart />
        </div>
        <div className="tab-pane" id="third">
          <Payment />
        </div>
      </div>
    </div>
  );
};

export default Cart;
