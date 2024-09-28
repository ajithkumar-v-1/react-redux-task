import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Decrement_Cart,
  Increment_Cart,
  Remove_Cart,
} from "../Features/ProductSlice";
import Navbar from "./Navbar";

const Cart = () => {
  const dispatch = useDispatch();
  //useSelector for fetching the data from slice
  const prodReducer = useSelector((state) => state.prodReducer.products);

  //updating the data using dispatch
  //button increment
  const handleInc = (id, quantity) => {
    if (quantity > 0) {
      dispatch(Increment_Cart({ id }));
    }
  };
  //button decrement
  const handleDec = (id, quantity) => {
    if (quantity > 1) {
      dispatch(Decrement_Cart({ id }));
    }
  };
  //button remove
  const removeCart = (id) => {
    dispatch(Remove_Cart({ id }));
  };

  //calculating the totalprice
  const totalPrice = prodReducer.reduce(
    (total, product) => total + product.price * (product.quantity || 1),
    0
  );
  // calculating the total quantity
  const totalQuantity = prodReducer.reduce(
    (total, product) => total + (product.quantity || 1),
    0
  );

  return (
    <div>
      <Navbar totalQuantity={totalQuantity} />
      <div className="container">
        {/* start of card */}
        {prodReducer.map((product, index) => {
          return (
            <div key={index}>
              <div className="card align-content-center mt-5 p-4">
                <div className="row">
                  <div className="col-md-4">
                    {/* image */}

                    <div>
                      <img
                        src={product.images[0]}
                        className="card-img-top"
                        alt="phone-image"
                      />
                    </div>
                  </div>
                  {/* start card body */}
                  <div className="col-md-4">
                    <div className="card-body ">
                      {/* title */}
                      <h2 className="card-title d-flex">{product.title}</h2>
                      {/* category */}
                      <h6
                        className="card-subTitle d-flex fs-4 "
                        style={{ color: "rgb(68, 66, 66)" }}
                      >
                        Category :{product.category}
                      </h6>
                      {/* description */}
                      <p
                        className="card-text d-flex fs-5"
                        style={{ color: "rgb(68, 66, 66)" }}
                      >
                        {product.description}
                      </p>
                    </div>
                  </div>
                  {/* button increment and decrement */}
                  <div className="col-md-4">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center ">
                        <div>
                          <button
                            onClick={() =>
                              handleInc(product.id, product.quantity || 1)
                            }
                            className="btn btn-warning "
                            style={{ color: "white" }}
                          >
                            +
                          </button>
                          <span className="fw-bold fs-5 p-3">
                            {product.quantity || 1}
                          </span>
                          <button
                            onClick={() =>
                              handleDec(product.id, product.quantity || 1)
                            }
                            className="btn btn-warning fw-bold "
                            style={{ color: "white" }}
                          >
                            -
                          </button>
                        </div>
                        {/* price */}

                        <h2>${product.price}</h2>
                      </div>
                      {/* remove button */}
                      <div className="d-flex justify-content-end  align-content-end mt-5">
                        <button
                          onClick={() => removeCart(product.id)}
                          className="btn btn-warning  m-4"
                          style={{ color: "white" }}
                        >
                          REMOVE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col">
                    {/* subtotal */}
                    <div className="d-flex justify-content-between align-items-center">
                      <h3 style={{ color: "rgb(68, 66, 66)" }}>
                        Subtotal{" "}
                        <span style={{ fontSize: "1rem", color: "gray" }}>
                          (per product quantity price)
                        </span>
                      </h3>
                      <h3 className="fw-bold fs-2">
                        ${product.price * product.quantity || product.price}
                      </h3>
                    </div>
                    {/* Shipping */}
                    <div
                      className="text fw-bold  m-2 fs-4 d-flex justify-content-between align-items-center"
                      style={{ color: "black" }}
                    >
                      <h4 style={{ color: "rgb(68, 66, 66)" }}>Shipping</h4>
                      <h4>FREE</h4>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col">
                    <div className="text d-flex justify-content-between align-items-center  ">
                      <h3 style={{ color: "black" }}>Total Price</h3>
                      <h3
                        className="fw-bold fs-1"
                        style={{
                          color: "black",
                          padding: "5px",
                          borderRadius: "10px",
                          margin: "10px",
                        }}
                      >
                        $ {totalPrice}
                      </h3>
                    </div>
                  </div>
                </div>
                {/* end of card body */}
              </div>
            </div>
          );
        })}
        {/* end of card */}
        <div className="row">
          <div className="col ">
            {/* start of card */}
            <div className="card mt-4 p-4">
              {/* total quantity */}
              <div className="d-flex justify-content-between align-items-center ">
                <h3 style={{ color: "black" }}>Total Quantity</h3>
                <h3
                  className="fw-bold fs-1"
                  style={{
                    color: "black",
                    padding: "5px",
                    borderRadius: "10px",
                    margin: "10px",
                  }}
                >
                  {totalQuantity}
                </h3>
              </div>
              <br />
              {/* total price */}
              <div className="text d-flex justify-content-between align-align-items-center  ">
                <h3 style={{ color: "black" }}>Total Price</h3>
                <h3
                  className="fw-bold fs-1"
                  style={{
                    color: "black",
                    padding: "5px",
                    borderRadius: "10px",
                    margin: "10px",
                  }}
                >
                  $ {totalPrice}
                </h3>
              </div>
            </div>
            {/* end of the card */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
