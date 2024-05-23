"use client";

import summerSale from "/public/images/summer_sale.png";
import Image from "next/image";

const CoverHeader = () => {

  return (
    <>
         <div className="wrapper bg-light-primary ">
        <div className="container py-2 d-flex justify-start">
          <Image src={summerSale} alt="summer-image" width={200} height={100} />
        </div>
      </div>
    </>
  );
};

export default CoverHeader;
