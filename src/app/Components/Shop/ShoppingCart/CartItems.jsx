import Image from "next/image";
import React from "react";
import product_image from "/public/images/shop/product_cart.png";
import { Icon } from "@iconify/react";

const CartItems = () => {
  return (
    <>
      <div className="col-lg-7">
        <div className="d-flex justify-content-between py-8 mb-10 border-2 border-bottom ">
          <h3 className="fw-bold fs-7 text-dark text-uppercase ">
            Shopping Cart
          </h3>
          <h3 className="fw-bold fs-7 text-dark text-uppercase ">3 Item</h3>
        </div>
        <div className="row pb-7">
          <div className="col-md-6">
            <div className="d-flex">
              <span className="fs-6 text-black fw-normal ">
                Product Details
              </span>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex">
              <span className="fs-6 text-black fw-normal">Quantity</span>
            </div>
          </div>
          <div className="col-md-2 text-center">
            <span className="fs-6 text-black fw-normal  text-center">
              Price
            </span>
          </div>
        </div>
        <div className="cart-border border-2 border-bottom"></div>
        <div className="row pt-5">
          <div className="col-md-6">
            <div className="d-flex align-items-center gap-3 text-nowrap ">
              <div className="bg-light-emphasis">
                <Image src={product_image} alt="image" className="img-fluid" />
              </div>
              <div className="d-flex flex-column gap-13">
                <p className="mb-0 fs-6 fw-bold text-black text-uppercase">
                  Cover For iPhone 15
                </p>
                <div className="d-flex gap-3">
                  <div className="icon-wrap btn btn-subtle-dark rounded-0 p-58 d-flex justify-content-center align-items-center ">
                    <Icon icon="fluent:edit-32-regular" className="fs-6" />
                  </div>
                  <div className="icon-wrap btn btn-subtle-dark rounded-0 p-58 d-flex justify-content-center align-items-center ">
                    <Icon icon="mi:delete" className="fs-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 align-self-center ">
            <div className="d-flex gap-55 align-items-center justify-content-center ">
              <Icon
                icon="ph:minus-bold"
                className="text-gray-variant fs-5 pointer"
              />
              <span className="py-59 px-7 border fs-6 border-2 border-gray-variant">
                1
              </span>
              <Icon
                icon="ph:plus-bold"
                className="text-gray-variant fs-52 pointer"
              />
            </div>
          </div>
          <div className="col-md-2 align-self-center justify-content-center ">
            <h3 className="fs-6 fw-bold text-black text-center">Rs.1099</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItems;
