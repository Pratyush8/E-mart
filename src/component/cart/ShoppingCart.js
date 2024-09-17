import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addCart, delCart } from "../redux/action";
import "./shoppingcart.css";

const ShoppingCart = () => {
  const state = useSelector((state) => state);

  const dispatch = useDispatch();

  const addItem = (item) => {
    dispatch(addCart(item));
  };

  const delItem = (item) => {
    dispatch(delCart(item));
  };

  const cartItems = (cartItem) => {
    return (
      <>
        <div className="container" key={cartItem.id}>
          <li>
            <div className="col-md-8 px-1 d-flex justify-content-around  ">
              <div className="col-md-2 me-5">
                <img
                  src={cartItem.image}
                  alt={cartItem.title}
                  className="p-1 img-size  "
                />
              </div>
              <div className="col-md-8  text-black-50 lh-1 ms-5 mx-1 title-box">
                <p className="lead fw-bolder  text-start title">
                  {cartItem.title}
                </p>
                <p className="lead  text-start desc">
                  {cartItem.description.substring(0, 30)}
                </p>
                <p className="lead fw-bolder">$ {cartItem.price}</p>
              </div>
              <div className="col-md-2 d-flex justify-content-between top-40 ">
                <input
                  type="text"
                  placeholder="1pcs "
                  className="bg-light border w-55 input "
                  value={cartItem.qty}
                />
                <span className="d-flex flex-column ms-2 mt-1">
                  <i
                    class="fas fa-plus pb-2"
                    onClick={() => addItem(cartItem)}
                  ></i>
                  <i
                    class="fas fa-minus  "
                    onClick={() => delItem(cartItem)}
                  ></i>
                </span>
              </div>
            </div>
          </li>
        </div>
        <hr />
      </>
    );
  };

  var total = 0;

  var num = total; // long number
  var str = num.toString(); //convert number to string
  var result = str.substring(0, 5); // cut five first character
  total = parseInt(result); // convert it to a number

  const itemList = (item) => {
    total = total + item.price * item.qty;
  };

  return (
    <>
      <div className="container">
        <div className="row mt-2 text-black-50 w-100 ">
          <div className="col-md-4 order-md-2 mt-2">
            <h3 className="text-black-50">Order Summary</h3>
            <hr />
            {state?.map(itemList)}
            <input
              type="text"
              placeholder="ENTER COUPON CODE"
              className="text-muted fw-bolder p-0 m-0 "
            />
            <hr />
            <div>
              <ul className="text-black-50 p-1 ">
                <li className="d-flex justify-content-between">
                  <h5>SUBTOTAL</h5>
                  <span className=" fw-bolder">${total}</span>
                </li>
                <li className="d-flex justify-content-between">
                  <h5>SHIPPING</h5>
                  <span className=" fw-bolder">FREE</span>
                </li>
                <li className="d-flex justify-content-between">
                  <h5>TAXES</h5>
                  <span className=" fw-bolder">$ 13</span>
                </li>
              </ul>
            </div>
            <hr />
            <div className="d-flex justify-content-between text-black-50">
              <h3>TOTAL</h3>
              <h4>${state?.length !== 0 ? total + 13 : 0}</h4>
            </div>
          </div>
          <div className="col-md-8 order-md-1 mt-2">
            <h3 className="text-black-50">Shipping Details </h3>
            <hr />
            <ul class="list-group mb-3">{state?.map(cartItems)}</ul>
          </div>
        </div>

        <div className="container p-1">
          <Link
            to="/shipping"
            type="button"
            id="second"
            class="btn btn-secondary py-1 px-5"
          >
            Next
          </Link>
          <Link
            to="/"
            type="button"
            class="btn btn-light  py-1 px-4 text-muted border mx-5"
          >
            Cancel
          </Link>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
