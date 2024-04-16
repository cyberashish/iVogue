"use client"

import CategoryItem from "./categoryItem";
import leather_img from "/public/images/leather_case.png";
import hard_img from "/public/images/hard_case.png";
import transparent_img from "/public/images/transparent_case.png";
import phone_img from "/public/images/phone-cases.png";
import summerSale from "/public/images/summer_sale.png"
import Image from 'next/image'
import { useRouter } from "next/navigation";


const CoverHeader = () => {
   const router = useRouter();
  return (
    <>
      <div className="wrapper bg-light-primary mt-4">
        <div className="container py-2 d-flex justify-start">
          <Image src={summerSale} alt="summer-image" />
        </div>
      </div>
      <h2 className="fw-bold fs-8 mb-11 text-center mt-12">Covers & Cases</h2>
      <div className="d-flex gap-10 align-items-stretch justify-content-center ">
        <div className="d-flex flex-column" style={{cursor:"pointer"}} onClick={()=>router.push('/mobile-covers/category/all')}>
          <div
            className="bg-primary text-white gap-1 h-100 mb-3 d-flex justify-content-center  align-items-center "
            style={{ width: "120px" }}
          >
            All
          </div>
          <p className="text-center fs-4 text-dark ">All</p>
        </div>
        <CategoryItem image={leather_img} cat_title="Leather case" />
        <CategoryItem image={hard_img} cat_title="Hard case" />
        <CategoryItem image={transparent_img} cat_title="Transparent case" />
        <CategoryItem image={phone_img} cat_title="Phone cases" />
      </div>
    </>
  );
};

export default CoverHeader;
