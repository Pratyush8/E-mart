import React from "react";
import { Link } from "react-router-dom";
import "./orderplaced.css";
import { useSelector } from "react-redux";

const OrderPlaced = () => {
  const state = useSelector((state) => state);

  const items = (item) => {
    return (
      <tr>
        <th scope="row">*</th>
        <td>{item.title}</td>
        <td>{item.price}</td>
        <td>{item.qty}</td>
      </tr>
    );
  };

  return (
    <>
      <div className="container-fluid box  p-5  border-bottom border-dark ">
        <div class="d-flex flex-column w-100 d-flex justify-content-center">
          <div class="p-2 mb-1">
            <h1 className="fw-bolder  text-center w-100">
              Your Order has been placed.
            </h1>
          </div>
          <div class="p-2 fw-bolder  w-100 text-center">
            <p>
              You have received cashback points in your wallet for this order.
            </p>
          </div>
          <div class="p-2  text-center ">
            <Link to="/" className="btn btn-success px-5  ">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
      {state?.length !== 0 && (
        <div className="container">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Product Title</th>
                <th scope="col">Product Price</th>
                <th scope="col">Product Quantity</th>
              </tr>
            </thead>
            <tbody>{state?.map(items)}</tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default OrderPlaced;
