import Image from "next/image";
import React from "react";

const CollectionDropItem = ({image,title,badge}) => {
  return (
    <>
      <div className="col-lg-4">
        <div className="img-wrapper">
          <Image src={image} alt="image" className="img-fluid" />
        </div>
        <h2 className="fs-3 text-black my-3 text-uppercase d-inline-block position-relative">
          {title}
         {badge===true?          <div
            className="text-capitalize text-primary fs-2 lh-1 position-absolute font-trade"
            style={{ right: "-26px", top: "-2px" }}
          >
            New
          </div>:null}
        </h2>
      </div>
    </>
  );
};

export default CollectionDropItem;
