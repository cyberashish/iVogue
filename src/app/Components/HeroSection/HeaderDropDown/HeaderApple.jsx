import { HEADER_APPLE } from "@/api/homepage/homepage";
import React from "react";
import ShopAppleItem from "./DropItem/ShopAppleItem";

const HeaderApple = () => {
  return (
    <>
      <div className="dropdown-menu header-menu left-0 w-100 rounded-0 py-7 pb-54">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                <div className="d-flex justify-content-between">
            {HEADER_APPLE.map((item) => {
              return (
                <ShopAppleItem
                  key={item.key}
                  image={item.img}
                  title={item.title}
                />
              );
            })}
          </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default HeaderApple;
