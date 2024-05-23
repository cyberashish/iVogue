"use client";

import summerSale from "/public/images/summer_sale.png";
import Image from "next/image";

const TemperedHeader = () => {
  return (
    <>
         <div className="wrapper bg-light-primary ">
        <div className="container py-2 d-flex justify-start">
          <Image src={summerSale} alt="summer-image" width={200} height={100} />
        </div>
      </div>
      <div className="container">
        <h2 className="fw-bold fs-8  text-center  my-md-11 my-8 text-uppercase">Tempered Glasses</h2>
      </div>
    </>
  )
}

export default TemperedHeader
