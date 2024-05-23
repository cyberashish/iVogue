"use client";

import React, { useReducer } from "react";
import { useEffect, useState } from "react";

import { Icon } from "@iconify/react";
import Newsletter from "@/app/Components/HeroSection/Newsletter";
import FilterBlock from "@/app/Components/MobileCovers/FilterBlock";
import CustomSkeleton from "@/app/Components/Skeleton/CustomSkeleton";
import Pagination from "@/app/Components/Products/Pagination";
import Link from "next/link";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { useProduct } from "@/store/CartProvider/CartData";
import TemperedHeader from "@/app/Components/TemperedGlass/TemperedHeader";
import ProductCard from "@/app/Components/Products/Cards/ProductCard";
import {
  FILTER_COLLECTION,
  FILTER_COLOR,
  FILTER_OPTIONS,
} from "@/api/brand-identifier/phone-cases/phoneCases";
import Image from "next/image";




const TemperedGlass = () => {
  const [width, setWidth] = useState("");
  const ProductData = useProduct();
  const tempered_glass = ProductData.value.filter((prod) => {
    return prod.mastercat === "Guard";
  });
  const [tempered, setTempered] = useState([]);

  const handleMobileCovers = () => {
    setTempered(tempered_glass);
  };

  useEffect(() => {
    handleMobileCovers();
  }, []);
  return (
    <>
      <TemperedHeader />

      <div>
        <div className="d-flex justify-content-between  mb-7 align-items-center px-7">
          <Link
            href="/mobile-cases/brand-identifier"
            className="fs-5 text-primary"
          >
            Tempered Glasses
          </Link>
          <div
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            className="d-xl-none d-block"
          >
            <Icon icon="mingcute:filter-line" className="text-black fs-9" />
          </div>
          <button
            onClick={() => {
              if (width === "") {
                setWidth("active-width");
              } else {
                setWidth("");
              }
            }}
            className="fs-4 pointer btn btn-outline-primary rounded-1 text-uppercase font-graphik d-lg-flex d-none align-items-center rounded-pill justify-content-center gap-2 border-2"
          >
            <Icon icon="mingcute:filter-line" className="fs-5" />
            Filters
          </button>
        </div>
      </div>

      <div className="w-100 px-7 d-flex">
        <div className={`row leftBox`}>
          <div className="col-xl-12">
            <div className="row gy-4">
              {tempered.length == 0 ? (
                <CustomSkeleton />
              ) : (
                tempered.map((cover) => {
                  return (
                    <ProductCard
                      key={cover.key}
                      title={cover.title}
                      price={cover.price}
                      discountedPrice={cover.discountedPrice}
                      thumbnail={cover.thumbnail}
                      image={cover.image}
                      discount={cover.discount}
                      prodId={cover.key}
                      parenturl="tempered-glass"
                    />
                  );
                })
              )}
            </div>
          </div>
        </div>
        <div className={`trial-box ${width}`}>
          <ul
            className="nav filterable-tabs nav-pills mb-3"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item me-2" role="presentation">
              <button
                className="nav-link active rounded-pill py-58 fs-3 text-uppercase filterTab"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                FILTER
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link rounded-pill py-58 fs-3 text-uppercase text-white filterTab"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                SORT
              </button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
              tabIndex="0"
            >
              <div className="row justify-content-start">
                <div className="col-lg-10">
                  <div className="row">
                    <h5 className="text-uppercase fs-6 mt-3">Collection</h5>
                    {FILTER_COLLECTION.map((item) => {
                      return (
                        <div
                          className="col-lg-4 text-center filterTab-panel"
                          key={item.key}
                        >
                          <Image alt="image" src={item.img} className="rounded-circle" />
                          <p className="fs-2 lh-1 mt-1">{item.title}</p>
                        </div>
                      );
                    })}
                    <h5 className="text-uppercase fs-6 mt-3">Color</h5>
                    {FILTER_COLOR.map((item) => {
                      return (
                        <div
                          className="col-lg-4 text-center filterTab-panel cursor"
                          key={item.key}
                        >
                          <div
                            className={`bg-${item.colorCode} rounded-circle round-60`}
                          ></div>
                          <p className="fs-2 lh-1 mt-1">{item.colorName}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
              tabIndex="0"
            >
              <div className="d-flex flex-column gap-4 mt-4">
                {FILTER_OPTIONS.map((elem) => {
                  return (
                    <Link
                      href="#"
                      key={elem.key}
                      className="fs-83 text-decoration-none"
                    >
                      {elem.title}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Pagination />
      <div className="mb-md-52 mb-10">
        <Newsletter />
      </div>

      {/* Offcanvas */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
      <h5 className="offcanvas-title fs-8" id="offcanvasExampleLabel">
            IVogue
          </h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <ul className="nav filterable-tabs nav-pills mb-3" id="pills-tab-v2" role="tablist">
            <li className="nav-item me-2" role="presentation">
              <button
                className="nav-link active rounded-pill py-58 fs-3 text-uppercase filterTab"
                id="pills-home-tab-v2"
                data-bs-toggle="pill"
                data-bs-target="#pills-home-v2"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                FILTER
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link rounded-pill py-58 fs-3 text-uppercase text-white filterTab"
                id="pills-profile-tab-v2"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile-v2"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                SORT
              </button>
            </li>
          </ul>
      <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home-v2"
              role="tabpanel"
              aria-labelledby="pills-home-tab-v2"
              tabIndex="0"
            >
              <div className="row justify-content-start">
                <div className="col-lg-10">
                <div className="row">
                <h5 className="text-uppercase fs-6 mt-3">Collections</h5>
               {FILTER_COLLECTION.map((item)=>{
                return (
                  <div className="col-4 text-center filterTab-panel" key={item.key}>
                    <Image alt='image' src={item.img} className="rounded-circle"/>
                    <p className="fs-2 lh-1 mt-1">{item.title}</p>
                  </div>
                )
               })}
               <h5 className="text-uppercase fs-6 mt-3">Color</h5>
               {FILTER_COLOR.map((item)=>{
                return (
                  <div className="col-4 text-center filterTab-panel cursor"  key={item.key}>
                     <div className={`bg-${item.colorCode} rounded-circle round-60 mx-auto`}></div>
                    <p className="fs-2 lh-1 mt-1">{item.colorName}</p>
                  </div>
                )
               })}
             </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile-v2"
              role="tabpanel"
              aria-labelledby="pills-profile-tab-v2"
              tabIndex="0"
            >
             <div className="d-flex flex-column gap-4 mt-4">
               {FILTER_OPTIONS.map((elem)=>{
                return (<Link href='/'  key={elem.key} className="fs-83 text-decoration-none">{elem.title}</Link>)
               })}
             </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default TemperedGlass;
