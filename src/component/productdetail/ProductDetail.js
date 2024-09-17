import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { useParams } from "react-router-dom";
import { RatingView } from "react-simple-star-rating";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };

    getProduct();
  }, []);

  const Loading = () => {
    return (
      <>
        <p className="text-center"> Loading ...</p>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6 ">
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6" key={product.id}>
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h3 className="display-5">
            {product.title ? product.title.substring(0, 50) : ""}
          </h3>
          <p className="lead fw-bolder ">
            <RatingView
              ratingValue={product.rating && product.rating.rate}
            ></RatingView>
          </p>
          <hr />
          <div className=" d-flex justify-content-between ">
            <h3 className="display-6 fw-bold my-2">$ {product.price}</h3>
            <div class="dropdown my-3 ms-5 ">
              <button
                class="btn btn-primary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Select Modal
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">
                  1
                </a>
                <a class="dropdown-item" href="#">
                  2
                </a>
                <a class="dropdown-item" href="#">
                  3
                </a>
              </div>
            </div>
          </div>
          <hr />
          <p className="lead w-100">{product.description}</p>
          <hr />
          <button
            type="button"
            class="btn btn-success mb-1 px-4 text-center"
            onClick={() => addProduct(product)}
          >
            Add to cart
          </button>
        </div>
      </>
    );
  };
  return (
    <div className="container py-5">
      <div className="row py-4">{loading ? <Loading /> : <ShowProduct />}</div>
    </div>
  );
};
export default Product;
