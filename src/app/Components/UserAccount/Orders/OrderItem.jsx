"use client"

import React from "react";
import Image from 'next/image'
import { Icon } from '@iconify/react'
const OrderItem = ({orderStatus,phoneimg,title,color}) => {
  return (
    <>
      <div className="col-lg-6">
        <div className=" d-flex flex-column py-4 bg-light-primary rounded-3">
          <div className="d-flex gap-2 align-items-center text-black px-3">
            <Icon icon="majesticons:box-line" className="fs-52" />
            <span className="fs-6 fw-bold text-primary lh-1">{orderStatus}</span>
          </div>
          <div className="d-flex flex-column px-9">
            <span className="fs-3 fw-normal text-dark mt-0 mb-7">
              On Wed, 26 Apr 2023
            </span>
            <div className="d-flex justify-content-between align-items-center delivered-card">
              <div className="d-flex gap-3 align-items-center ">
                <Image src={phoneimg} alt="image" className="img-fluid bg-white" />
                <div className="d-flex flex-column gap-6">
                  <h5 className="fs-5 mb-0 text-black fw-bold lh-1 text-uppercase">
                    {title}
                  </h5>
                  <span className="fs-3 fw-normal text-black lh-1">
                    {title}
                  </span>
                  <span className="fs-3 fw-normal text-black lh-1">
                    {`Color : ${color}`} 
                  </span>
                </div>
              </div>
            </div>
            <p className=" text-grayextra fs-3 fw-normal my-13 mb-2 d-flex gap-2 align-items-center ">
              {" "}
              <span className="round-6 bg-grayextra"></span> Exchange/Return
              window closed on Mon, 15 May 2023
            </p>
            <div className="d-flex gap-2 align-items-center ">
              <p className="mb-0 text-grayextra fs-3 fw-normal ">
                Rate Product
              </p>
              <div className="d-flex">
                <Icon
                  icon="system-uicons:star"
                  className="fs-4 text-grayextra"
                />
                <Icon
                  icon="system-uicons:star"
                  className="fs-4 text-grayextra"
                />
                <Icon
                  icon="system-uicons:star"
                  className="fs-4 text-grayextra"
                />
                <Icon
                  icon="system-uicons:star"
                  className="fs-4 text-grayextra"
                />
                <Icon
                  icon="system-uicons:star"
                  className="fs-4 text-grayextra"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderItem;
