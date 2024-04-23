import React from "react";
import { Icon } from "@iconify/react";

const OrderSummary = () => {
  return (
    <>
      <div className="col-lg-5 pe-0 position-relative ">
         <div className="bg-cover ">
         <hr className="hr-order d-lg-block d-none w-100" />
         <hr className="hr-second-order d-lg-block d-none" />
         </div>
       <div className="floating-block">
       <div className=" pb-10 ">
          <div className="d-flex justify-content-between py-8 mb-10 ">
            <h3 className=" ps-9 fw-bold fs-7 text-dark text-uppercase ">
              Order Summary
            </h3>
          </div>
          <div className="ps-9 d-flex flex-column gap-7">
            <div className="benefit d-flex flex-column  gap-7">
              <div className="addItem d-flex justify-content-between py-2 px-51 border border-2 border-subtle-dark">
                <div className="d-flex gap-1 align-items-center ">
                  <Icon icon="ph:gift" className="text-black fs-6" />
                  <span className="fs-2 fw-normal text-black">
                    Make it a gift for inr 250
                  </span>
                </div>
                <button className="btn btn-primary rounded-0 gap-1 fs-2 px-51 fw-nomral d-flex align-items-center ">
                  Add
                  <Icon icon="ph:plus-bold" className="fs-2" />
                </button>
              </div>
              <div className="addItem d-flex justify-content-between py-2 px-51 border border-2 border-subtle-dark">
                <div className="d-flex gap-1 align-items-center ">
                  <Icon
                    icon="streamline:discount-percent-coupon"
                    className="text-black fs-4"
                  />
                  <span className="fs-2 fw-normal text-black">
                    Coupon & Offers
                  </span>
                </div>
                <Icon icon="f7:chevron-right" className="fs-8 text-black" />
              </div>
              <div className="addItem d-flex justify-content-between py-2 px-51 border border-2 border-subtle-dark">
                <div className="d-flex gap-1 align-items-center ">
                  <Icon icon="tabler:gift-card" className="text-black fs-5" />
                  <span className="fs-2 fw-normal text-black">
                    Redeem Gift Card
                  </span>
                </div>
                <Icon icon="f7:chevron-right" className="fs-8 text-black" />
              </div>
            </div>
          </div>
        </div>
        <div className="ps-9 py-10 d-flex flex-column gap-55">
          <h4 className="fs-6 fw-bold text-black">Order Summary</h4>
          <div className="d-flex justify-content-between align-align-items-center ">
            <span className="text-black fs-6 fw-normal">
              Item Total (1 Item)
            </span>
            <span className="text-black fs-6 fw-normal">Rs.1099</span>
          </div>
          <div className="d-flex justify-content-between align-align-items-center ">
            <span className="text-black fs-6 fw-normal">Shipping</span>
            <span className="text-black fs-6 fw-normal">FREE</span>
          </div>
          <div className="d-flex justify-content-between align-align-items-center ">
            <span className="text-black fs-55 fw-bold">Grand Total</span>
            <span className="text-black fs-55 fw-bold">Rs.1099</span>
          </div>
          <button className="btn btn-primary fw-bold fs-5 rounded-0">
            Process To Checkout
          </button>
        </div>
       </div>
      </div>
    </>
  );
};

export default OrderSummary;
