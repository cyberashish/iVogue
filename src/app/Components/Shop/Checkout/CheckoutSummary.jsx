import { Icon } from "@iconify/react";
import React, { useState } from "react";
import product_image from "/public/images/shop/product_cart.png";
import Image from "next/image";
const CheckoutSummary = () => {
    const [discount , setDiscount] = useState("Apply Discount");
  return (
    <>
            <div className="col-lg-6 pe-0">
              <h3 className="text-uppercase fs-8 fw-bold mt-8">
                Order Summary
              </h3>
              <div className="d-flex justify-content-between align-items-center my-8">
                <div className="d-flex align-items-center gap-3 text-nowrap">
                  <div className="bg-light-emphasis">
                    <Image
                      src={product_image}
                      alt="image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="d-flex flex-column gap-0">
                    <p className="mb-0 fs-6 fw-bold text-black text-uppercase">
                      Cover For iPhone 15
                    </p>
                    <div className="d-flex gap-1">
                      <span className="fs-4 text-black">QTY :</span>
                      <span className="fs-4 text-black">1</span>
                    </div>
                  </div>
                </div>
                <span className="fs-6 fw-bold text-black">Rs.1099</span>
              </div>
              <div className="row">
                <div className="col-lg-8 h-100">
                  <input
                    type="text"
                    className="form-control fs-3 py-60"
                    id="exampleInputdiscount"
                    aria-describedby="emailHelp"
                    value={`${discount}`}
                    onChange={(e)=>setDiscount(e.target.value)}
                  />
                </div>
                <div className="col-lg-4">
                    <div className="addItem d-flex justify-content-between py-2 px-51 border border-2 border-subtle-dark pointer">
                      <div className="d-flex gap-1 align-items-center ">
                        <span className="fs-5 fw-normal text-black">
                        Apply Discount
                        </span>
                      </div>
                      <Icon
                        icon="f7:chevron-right"
                        className="fs-53 text-black"
                      />
                    </div>
                  </div>
              </div>
              <div className="border-2 border-top mt-57 pt-10"></div>
              <div className="d-flex flex-column gap-8">
                <div className="d-flex justify-content-between ">
                  <span className="fs-22 fw-normal text-black">Cart Subtotal</span>
                  <span className="fs-22 fw-normal text-black">1099</span>
                </div>
                <div className="d-flex justify-content-between ">
                  <div className="d-flex flex-column ">
                  <span className="fs-22 fw-normal text-black lh-1">Shipping</span>
                  <span className="fs-4 fw-normal half-letter text-grayscale-variant">Flat Rate - Fixed</span>
                  </div>
                  <span className="fs-22 fw-normal text-black">Rs.0.00</span>
                </div>
                <div className="d-flex justify-content-between ">
                  <span className="fs-55 fw-bold text-black">Order Total</span>
                  <span className="fs-55 fw-bold text-black">RS1099</span>
                </div>
                <button className="btn btn-primary rounded-0 fs-5 fw-normal">Place Order</button>
              </div>
            </div>      
    </>
  )
}

export default CheckoutSummary
