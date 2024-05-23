"use client"
import React from "react";
import Image from 'next/image'
const FeaturedProduct = ({image,title,price,discountedPrice,discount}) => {
  return (
    <>
      <div className="p-6">
        <div className="productbox bg-gray p-3 position-relative">
          <div  className="badge position-absolute bg-primary-subtle rounded-pill  text-dark fw-normal fs-4 px-3">
            <span style={{top:"0px"}} className="position-relative">New</span>
          </div>
          <div className="text-center hover-img overflow-hidden">
            <Image src={image} alt="img" className="img-fluid" />
          </div>
          <div className="px-0">
          <div className="d-flex flex-column gap-1">
          <h3 className="text-dark-gray text-uppercase fw-bold fs-5 mb-0">
          {title}
        </h3>
        <div className="d-flex gap-3 align-items-center flex-wrap ">
          <span className="fs-5 fw-normal text-dark-gray  d-flex gap-64">
            <span className='font-trade'>{` Rs.`}</span>
            <span className='font-trade'>{` ${discountedPrice}`}</span>
          </span>
          <span className="fs-5 fw-normal text-grayextra font-trade  text-decoration-line-through">
            {price}
          </span>
          <span className="fs-4 fw-bold text-success d-block">{`Saved Rs. ${discount}`}</span>
        </div>
        
          </div>
        <button className="btn btn-outline-indigo border-2 text-uppercase rounded-0 w-100  fs-3 py-55 lh-1 mt-2 fw-normal">
          Inquire Now
        </button>
         </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProduct;
