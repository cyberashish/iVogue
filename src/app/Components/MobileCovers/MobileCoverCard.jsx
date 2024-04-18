
"use client"

import Image from 'next/image'
import React, { useState } from 'react'

const MobileCoverCard = ({title,category,price,discountedPrice,thumbnail,image,discount}) => {
    const [frontimg,setFrontimg]=useState("");
    const [backimg,setBackimg]=useState("d-none");
  return (
    <>
      <div className="col-md-3">
        <div className="bg-light py-4 px-9">
        <div
          className="group-img position-relative"
          style={{ cursor: "pointer" }}
          onClick={() => {
            alert("Jai Shree ram");
          }}
          onMouseOver={() => {
            setFrontimg("d-none");
            setBackimg("");
          }}
          onMouseLeave={() => {
            setFrontimg("");
            setBackimg("d-none");
          }}
        >
          <Image
            src={thumbnail}
            alt="img"
            className={`w-100 front-img ${frontimg}`}
          />
          <Image
            src={image}
            alt="img"
            className={`w-100 back-img ${backimg}`}
          />
        </div>
        <h3 className="text-dark-emphasis  fw-medium fs-6">
          {title}
        </h3>
        <div className="d-flex justify-content-between mt-3">
          <span className="fs-5 fw-normal text-dark-emphasis ">
            {`From Rs.${discountedPrice}`}
          </span>
          <span className="fs-5 fw-normal text-dark-emphasis  text-decoration-line-through">
            {price}
          </span>
          <span className="fs-5 fw-normal text-primary">{`Save rs.${discount}`}</span>
        </div>
        <button className="btn btn-outline-primary border-2  rounded-0 w-100  fs-3 py-3 lh-1 mt-2 fw-normal">
          Inquire Now
        </button>
        </div>
      </div>
    </>
  );
};

export default MobileCoverCard;
