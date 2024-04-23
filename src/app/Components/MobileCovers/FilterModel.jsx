import Link from "next/link";
import React from "react";

const FilterModel = ({model , quantity}) => {
  return (
    <>
     <Link href="#" className="text-decoration-none ">
     <div className="d-flex justify-content-between">
        <h4 className="fs-4 fw-normal text-lightscale-variant mb-0">{model}</h4>
        <span className="fs-2 fw-normal text-lightscale-variant">{`(${quantity})`}</span>
      </div>
     </Link>
    </>
  );
};

export default FilterModel;
