import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ShippingDetails = () => {
  const state = useSelector((state) => state);

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    address: "",
    city: "",
    zip: "",
    number: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const onSubmit = (event) => {
    event.preventDefault();
    setFormErrors(validate(formData));
  };

  useEffect(() => {
    console.log(formErrors);
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    if (!values.fname) {
      errors.fname = "FirstName is required!";
    }
    if (!values.lname) {
      errors.lname = "LastName is required!";
    }
    if (!values.address) {
      errors.address = "Address is required!";
    }
    if (!values.city) {
      errors.city = "City is required!";
    }
    if (!values.zip) {
      errors.zip = "Zip is required !";
    }
    if (!values.number) {
      errors.number = "Number is required !";
    }
    return errors;
  };

  const inputEvent = (event) => {

    const { name, value } = event.target;

    setFormData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
      // if (name === "fName") {
      //   return {
      //     fname: value,
      //     lname: preValue.lname,
      //     address: preValue.address,
      //     city: preValue.city,
      //     zip: preValue.zip,
      //     number: preValue.number,
      //   };
      // } else if (name === "lName") {
      //   return {
      //     fname: preValue.fname,
      //     lname: value,
      //     address: preValue.address,
      //     city: preValue.city,
      //     zip: preValue.zip,
      //     number: preValue.number,
      //   };
      // } else if (name === "address") {
      //   return {
      //     fname: preValue.fname,
      //     lname: preValue.lname,
      //     address: value,
      //     city: preValue.city,
      //     zip: preValue.zip,
      //     number: preValue.number,
      //   };
      // } else if (name === "city") {
      //   return {
      //     fname: preValue.fname,
      //     lname: preValue.lname,
      //     address: preValue.address,
      //     city: value,
      //     zip: preValue.zip,
      //     number: preValue.number,
      //   };
      // } else if (name === "zip") {
      //   return {
      //     fname: preValue.fname,
      //     lname: preValue.lname,
      //     address: preValue.address,
      //     city: preValue.city,
      //     zip: value,
      //     number: preValue.number,
      //   };
      // } else if (name === "number") {
      //   return {
      //     fname: preValue.fname,
      //     lname: preValue.lname,
      //     address: preValue.address,
      //     city: preValue.city,
      //     zip: preValue.zip,
      //     number: value,
      //   };
      // }
    });
  };

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

  var total = 0;

  var num = total; // long number
  var str = num.toString(); //convert number to string
  var result = str.substring(0, 5); // cut five first character
  total = parseInt(result); // convert it to a number

  return (
    <>
      <div className="container my-2">
        <div className="row ">
          <div className="col-md-4 order-md-2  ">
            <h3 className="text-black-50"> Order Summary</h3>
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

          <div className="col-md-8 order-md-1  ">
            <h3 className="text-black-50">Shipping Details </h3>
            <hr />
            <form onSubmit={onSubmit}>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="FirstName">First Name</label>
                  <input
                    type="text"
                    class="form-control border"
                    id="firstname"
                    placeholder="First Name"
                    name="fname"
                    onChange={inputEvent}
                    value={formData.fname}
                  />
                  <p style={{ color: "red" }}>{formErrors.fname}</p>
                </div>
                <div class="form-group col-md-6">
                  <label for="LastName">Last Name</label>
                  <input
                    type="text"
                    class="form-control border"
                    id="lastname"
                    placeholder="Last Name"
                    name="lname"
                    onChange={inputEvent}
                    value={formData.lname}
                  />
                  <p style={{ color: "red" }}>{formErrors.lname}</p>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="address">Address</label>
                  <input
                    type="text"
                    class="form-control border"
                    id="address"
                    placeholder="Address"
                    name="address"
                    onChange={inputEvent}
                  />
                </div>

                <div class="form-group col-md-6">
                  <label for="address2">Address2</label>
                  <input
                    type="text"
                    class="form-control border"
                    id="address2"
                    placeholder="Address2"
                  />
                </div>
                <p style={{ color: "red" }}>{formErrors.address}</p>
              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputState">Country</label>
                  <select id="inputState" class="form-control">
                    <option selected>Choose...</option>
                    <option>India</option>
                    <option>USA</option>
                    <option>Dubai</option>
                  </select>
                </div>
                <div class="form-group col-md-6">
                  <label for="inputCity">City</label>
                  <input
                    type="text"
                    class="form-control border"
                    id="city"
                    placeholder="City"
                    name="city"
                    onChange={inputEvent}
                    value={formData.city}
                  />
                  <p style={{ color: "red" }}>{formErrors.city}</p>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputZip">Zip/Postal Code</label>
                  <input
                    type="text"
                    class="form-control border"
                    id="inputZip"
                    placeholder="Zip/Postal Code"
                    name="zip"
                    onChange={inputEvent}
                    value={formData.zip}
                  />
                  <p style={{ color: "red" }}>{formErrors.zip}</p>
                </div>

                <div class="form-group col-md-6">
                  <label for="number">Number</label>
                  <input
                    type="text"
                    class="form-control border"
                    id="number"
                    placeholder="number"
                    name="number"
                    onChange={inputEvent}
                    value={formData.number}
                  />
                  <p style={{ color: "red" }}>{formErrors.number}</p>
                </div>
              </div>
              <hr />

              <div class="form-row ">
                <div class="form-check col-md-5 d-flex border bg-light me-2 ">
                  <span>
                    <input
                      class="form-check-input me-2 mt-3 "
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      checked
                    />
                  </span>
                  <label
                    class="form-check-label text-black-50  p-2 ms-3"
                    for="flexRadioDefault1"
                  >
                    <div className="lead fw-bolder  ">Free Shipping</div>
                    <small className="leadfw-bolder">
                      Between 2-5 working days
                    </small>
                  </label>
                </div>
                <div class="form-check col-md-5 d-flex border bg-light">
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
                    <div className="lead fw-bolder   ">
                      Next Day Delivery -$20
                    </div>
                    <small className="leadfw-bolder">
                      24 hours from checkout
                    </small>
                  </label>
                </div>
              </div>
              <div className="col-md-12 d-flex justify-content-center ">
                <button type="submit" className="btn btn-primary mt-3  px-5">
                  Submit
                </button>
              </div>

              <hr />
            </form>
          </div>
        </div>

        <div className="container p-1">
          <Link to="/payment" type="button" class="btn btn-secondary py-1 px-5">
            Next
          </Link>
          <Link
            to="/shopping"
            type="button"
            class="btn btn-light  py-1 px-4 text-muted border mx-5"
          >
            Back To Cart
          </Link>
        </div>
      </div>
    </>
  );
};

export default ShippingDetails;
