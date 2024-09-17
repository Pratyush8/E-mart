import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Payment = () => {
  const state = useSelector((state) => state);

  var total = 0;

  const itemList = (item) => {
    total = total + item.price * item.qty;

    return (
      <>
        <li class="list-group-item d-flex justify-content-between ">
          <div>
            <img src={item.image} height="50px" />
          </div>
          <div className="mx-4">
            <h6 class="my-0">{item.title}</h6>
            <span class="fw-bolder text-muted">${item.price}</span>
          </div>
        </li>
        <hr />
      </>
    );
  };

  var num = total; // long number
  var str = num.toString(); //convert number to string
  var result = str.substring(0, 5); // cut five first character
  total = parseInt(result); // convert it to a number

  return (
    <>
      <div className="container my-3">
        <div className="row ">
          <div className="col-md-4 order-md-2  ">
            <h3 className="text-black-50">Order Summary</h3>
            <hr />
            <ul class="list-group mb-3">{state?.map(itemList)}</ul>
            <hr />
            <div class="dropdown ">
              <button
                class="btn btn-outline-primary dropdown-toggle px-5 mx-5 "
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                HAVE A VOUCHER?
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#2">
                  BOOTCAMP2021
                </a>
              </div>
            </div>
            <hr />
            <ul className="text-black-50">
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
            <hr />
            <div className="d-flex justify-content-between text-black-50">
              <h3>TOTAL</h3>
              <h4>${state?.length !== 0 ? total + 13 : 0}</h4>
            </div>
          </div>
          {/* form */}
          <div className="col-md-8 order-md-1  ">
            <h3 className="text-black-50">Payment Method </h3>
            <hr />
            <form>
              <div className="col-md-12 border my-3 py-3">
                <div className="row mb-3">
                  <div class="form-check col-md-10 d-flex  bg-light w-100">
                    <input
                      class="form-check-input ms-2 mt-3 "
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      checked
                    />
                    <label
                      class="form-check-label  text-black-50 p-2 ms-5"
                      for="flexRadioDefault2"
                    >
                      <div className="lead fw-bolder   ">Credit Card</div>
                      <small className="leadfw-bolder">
                        Enter the Details of your Credit Card.
                      </small>
                    </label>
                  </div>
                </div>
                <div className="row col-md-8 mb-2">
                  <div className="col-md-6 ">
                    <input
                      type="text"
                      className="border"
                      placeholder=" 0000 0000 0000 0000"
                    />
                  </div>
                  <div className="col-md-3">
                    <input type="text" className="border" placeholder="MM/YY" />
                  </div>
                  <div className="col-md-3">
                    <input type="text" className="border" placeholder="CVV" />
                  </div>
                </div>
                <div className="row col-md-8 ">
                  <div>
                    <input
                      type="text"
                      className="border text-center"
                      placeholder="Card Holder Name"
                    />
                  </div>
                </div>
              </div>
              <hr />
              <div className="col-md-12 border my-3 py-3">
                <div class="form-check col-md-10 d-flex  bg-light w-100">
                  <input
                    class="form-check-input ms-2 mt-3 "
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                  />
                  <label
                    class="form-check-label  text-black-50 p-2 ms-5"
                    for="flexRadioDefault2"
                  >
                    <div className="lead fw-bolder   ">Paypal</div>
                    <small className="leadfw-bolder">
                      Enter the Details of your Paypal Account.
                    </small>
                  </label>
                </div>
              </div>
              <hr />
              <div className="container p-1">
                <Link
                  to="/orderplaced"
                  type="button"
                  class="btn btn-secondary py-1 px-5"
                >
                  Pay Now
                </Link>
                <Link
                  to="/shipping"
                  type="button"
                  class="btn btn-light  py-1 px-4 text-muted border mx-5"
                >
                  Back
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
