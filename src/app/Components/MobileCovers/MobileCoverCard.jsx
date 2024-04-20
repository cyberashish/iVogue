
"use client"

import Image from 'next/image'
import React, { useState } from 'react'

const MobileCoverCard = ({title,category,price,discountedPrice,thumbnail,image,discount}) => {
    const [frontimg,setFrontimg]=useState("");
    const [backimg,setBackimg]=useState("d-none");
  return (
    <>
      <div className="col-xxl-3 col-xl-4 c col-lg-6">
        <div className="bg-light py-3 px-13">
        <div
          className="group-img position-relative"
          style={{ cursor: "pointer" , height:"430px"  , width:"100%"}}
          onClick={() => {
            alert("Jai Shree ram");
          }}
          onMouseOver={() => {
            setFrontimg("opacity-0");
            setBackimg("opactiy-100");
          }}
          onMouseLeave={() => {
            setFrontimg("opacity-100");
            setBackimg("opacity-0");
          }}
        >
          <Image
            src={thumbnail}
            alt="img"
            className={`w-100 mobile-cover-images front-img position-absolute top-0 left-0  ${frontimg}`}
          />
          <Image
            src={image}
            alt="img"
            className={`w-100 mobile-cover-images back-img position-absolute top-0 left-0 ${backimg}`}
          />
        </div>
        <h3 className="text-dark-gray  fw-medium fs-6">
          {title}
        </h3>
        <div className="d-flex justify-content-between mt-3">
          <span className="fs-5 fw-normal text-dark-gray ">
            {`From Rs.${discountedPrice}`}
          </span>
          <span className="fs-5 fw-normal text-dark-gray  text-decoration-line-through">
            {price}
          </span>
          <span className="fs-5 fw-normal text-indigo">{`Save rs.${discount}`}</span>
        </div>
        <button className="btn btn-outline-indigo border-2  rounded-0 w-100  fs-3 py-3 lh-1 mt-2 fw-normal">
          Inquire Now
        </button>
        </div>
      </div>
    </>
  );
};

export default MobileCoverCard;
