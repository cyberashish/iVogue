"use client";

import React, { useReducer } from "react";
import { useEffect, useState } from "react";
import CategoryItem from "@/app/Components/MobileCovers/CategoryItem";
import leather_img from "/public/images/leather_case.png";
import hard_img from "/public/images/hard_case.png";
import transparent_img from "/public/images/transparent_case.png";
import phone_img from "/public/images/phone-cases.png";
import MobileCoverCard from "@/app/Components/MobileCovers/MobileCoverCard";
import { Covers_Cases } from "@/api/MobileCovers/mobile-covers";
import CustomSkeleton from "@/app/Components/Skeleton/CustomSkeleton";

const initState = {
  allCase: "active",
  leatherCase: "",
  hardcase: "",
  transparentCase: "",
  phoneCase: "",
};

const emptyCases = {
  allCase: "",
  leatherCase: "",
  hardCase: "",
  transparentCase: "",
  phoneCase: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "AllCase":
      return { ...state, ...emptyCases, allCase: "active" };
      break;
    case "LeatherCase":
      return { ...state, ...emptyCases, leatherCase: "active" };
      break;
    case "HardCase":
      return { ...state, ...emptyCases, hardCase: "active" };
      break;
    case "TransparentCase":
      return { ...state, ...emptyCases, transparentCase: "active" };
      break;
    case "PhoneCase":
      return { ...state, ...emptyCases, phoneCase: "active" };
      break;
  }
};

const MobileCovers = () => {
  const [covers, setCovers] = useState([]);
  const [state, dispatch] = useReducer(reducer, initState);


  const handleDispatch = (caseType) => {
    dispatch({type:caseType})
  }

  const handleMobileCovers = (category) => {
    if (category !== "all") {
      const filteredCovers = Covers_Cases.filter((cover) => {
        return category === cover.category;
      });
      console.log(filteredCovers);
      setCovers(filteredCovers);
    } else {
      setCovers(Covers_Cases);
      console.log(Covers_Cases);
    }
  };



  useEffect(() => {
    handleMobileCovers("all");
  }, []);

  return (
    <>
      <div className="d-flex gap-4 justify-content-center mb-11">
        <div
          className={`d-flex flex-column gap-3 covertype ${state.allCase}`}
          onClick={() => {
            handleMobileCovers("all");
            handleDispatch("AllCase");
          }}
        >
          <div
            className={`d-flex justify-content-center align-items-center  bg-secondary fs-4`}
            style={{ width: "140px", height: "70px" }}
          >
            <span className="text-center text-base fs-4 text-white">All</span>
          </div>
          <p className="text-center text-base fs-4 text-dark">All</p>
        </div>
        <CategoryItem
          image={leather_img}
          title="Leather Case"
          handleData={() => {
            handleMobileCovers("leather-case");
            handleDispatch("LeatherCase")
          }}
          Case={state.leatherCase}
        />
        <CategoryItem
          image={hard_img}
          title="Hard Case"
          handleData={() => {
            handleMobileCovers("hard-case");
            handleDispatch("HardCase")
          }}
          Case={state.hardCase}
        />
        <CategoryItem
          image={transparent_img}
          title="Transparent Case"
          handleData={() => {
            handleMobileCovers("transparent-case");
            handleDispatch("TransparentCase")
          }}
          Case={state.transparentCase}
        />
        <CategoryItem
          image={phone_img}
          title="Phone Cases"
          handleData={() => {
            handleMobileCovers("phone-case");
            handleDispatch("PhoneCase")
          }}
          Case={state.phoneCase}
        />
      </div>
      <div className="container">
        <div className="row gy-4">
          {covers.length == 0 ? (
            <CustomSkeleton />
          ) : (
            covers.map((cover) => {
              return (
                <MobileCoverCard
                  key={cover.key}
                  title={cover.title}
                  price={cover.price}
                  discountedPrice={cover.discountedPrice}
                  thumbnail={cover.thumbnail}
                  image={cover.image}
                  discount={cover.discount}
                />
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default MobileCovers;
