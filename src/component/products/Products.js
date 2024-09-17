import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./products.css";
import { RatingView } from "react-simple-star-rating";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let componentMounted = true;
    const getProducts = async () => {
      setLoading(true);

      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };
    getProducts(componentMounted);
  }, []);

  const Loading = () => {
    return (
      <>
        <p className="text-center">Loading ...</p>
      </>
    );
  };

  // const demoFilter = filter.filter((product) => product.price < 50 );

  const ShowProducts = () => {
    return (
      <>
        {filter?.map((product) => {
          return (
            <>
              <div className="col-md-4 col-sm-6  mb-2">
                <div class="card h-100 text-center p-4 " key={product.id}>
                  <div class="row g-0 p-img">
                    <div class="col-md-4 ">
                      <img
                        src={product.image}
                        class="img-fluid  p-3 rounded-start image"
                        alt={product.title}
                      ></img>
                      <Link
                        to={`/products/${product.id}`}
                        className="btn btn-success btn-sm text-center cart-button"
                      >
                        Add To Cart
                      </Link>
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title mb-3">
                          {product.title.substring(0, 30).toUpperCase()}
                        </h5>
                        <p className="lead fw-bolder ">
                          <RatingView
                            ratingValue={product.rating && product.rating.rate}
                          ></RatingView>
                        </p>
                        <p class="card-text mt-3">${product.price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className="container-fluid bg-light p-5">
        <div className="row">
          <div className="col-12 mb-3">
            <h1 className="display-6 fw-bolder text-center">Product Listing</h1>
            <p className="text-center lead w-50 fw-light mx-auto ">
              “Fashion and Clothing is the one makes you look awesome and unique
              from others!”
            </p>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
};

export default Products;
