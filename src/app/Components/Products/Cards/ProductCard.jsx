
"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { Icon } from "@iconify/react";

const ProductCard = ({title,category,price,discountedPrice,thumbnail,image,discount,prodId,parenturl}) => {
  const router = useRouter();
  const [fillheart , setfillheart] = useState("");
  const handlewishlist = () => {
    if(fillheart===""){
      setfillheart("teenyicons:heart-solid");
    }
    else{
      setfillheart("");
    }
  }
  return (
    <>
      
      <div className="col-xl-3 col-sm-6 col-lg-4 col-6 position-relative product-card" >
        <div className="bg-light" onClick={() => {router.push(`/mobile-cases/category/${parenturl}/${prodId}`)}}>
        <div
          className="group-img position-relative pointer w-100"
          
        >
          <Image
            src={thumbnail}
            priority={true}
            alt="img"
            className={`w-100 mobile-cover-images front-img`}
            style={{
              width:"100%",
              height:"100%"
            }}
          />
          <Image
            src={image}
            priority={true}
            alt="img"
            className={`w-100 mobile-cover-images back-img `}
            style={{
              width:"100%",
              height:"100%"
            }}
          />
        </div>
         <div className="px-3">
          <div className="d-flex flex-column gap-1">
          <h3 className="text-dark-gray text-uppercase fw-bold fs-5 mb-0">
          {title}
        </h3>
        <div className="d-flex row-gap-1 column-gap-3  align-items-center flex-wrap ">
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
        <button className="heart-group position-absolute pointer bg-transparent border-0" style={{top:"19px",right:"23px"}} onClick={handlewishlist}>
        <Icon icon='cil:heart' className="fs-55 text-primary position-absolute  top-0 end-0" />
        <Icon icon={fillheart} className="fs-55 text-primary position-absolute  top-0 end-0" />
        </button>
      </div>
    </>
  );
};

export default ProductCard;
