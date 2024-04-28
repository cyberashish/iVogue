"use client";

import summerSale from "/public/images/summer_sale.png";
import Image from "next/image";

const TemperedHeader = () => {
  return (
    <>
      <div className="wrapper bg-light-primary mt-4">
        <div className="container py-2 d-flex justify-start">
          <Image src={summerSale} alt="summer-image" />
        </div>
      </div>
      <div className="container">
        <h2 className="fw-bold fs-8 mb-11 text-center mt-12">Tempered Glasses</h2>
      </div>
    </>
  )
}

export default TemperedHeader
