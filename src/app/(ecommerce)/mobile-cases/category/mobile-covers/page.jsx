"use client";

import React, { useReducer } from "react";
import { useEffect, useState } from "react";

import leather_img from "/public/images/leather_case.png";
import hard_img from "/public/images/hard_case.png";
import transparent_img from "/public/images/transparent_case.png";
import phone_img from "/public/images/phone-cases.png";
import MobileCoverCard from "@/app/Components/Products/Cards/ProductCard";
import { PRODUCTS } from "@/api/Products/products";
import { Icon } from "@iconify/react";
import Newsletter from "@/app/Components/HeroSection/Newsletter";
import CategoryItem from "@/app/Components/MobileCovers/CategoryItem";
import FilterBlock from "@/app/Components/MobileCovers/FilterBlock";
import CustomSkeleton from "@/app/Components/Skeleton/CustomSkeleton";
import Pagination from "@/app/Components/Products/Pagination";
import Link from "next/link";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { useProduct } from "@/store/CartProvider/CartData";
import CoverHeader from "@/app/Components/MobileCovers/CoverHeader";
import ProductCard from "@/app/Components/Products/Cards/ProductCard";
import { useSearchParams } from "next/navigation";
import { FILTER_COLLECTION, FILTER_COLOR, FILTER_OPTIONS, PHONE_BRAND } from "@/api/brand-identifier/phone-cases/phoneCases";
import Image from "next/image";


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
  const[width,setWidth] = useState('');
  const searchParams = useSearchParams()

  const[mobileModel,setMobileModel] = useState("Mobile");
  const[mobileBrand,setMobileBrand] = useState("");
 
const search = searchParams.get('modl');
const brandName = searchParams.get('brnd');
  const ProductData = useProduct();
  const searchparams = useSearchParams();

  const Covers_Cases = ProductData.value.filter((prod)=>{
    return prod.mastercat==='Cover';
  })
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
      setCovers(filteredCovers);
    } else {
      setCovers(Covers_Cases);
    }
  };






  useEffect(() => {
    if(searchparams.get('prodcat')===null){
      handleMobileCovers("all");
      handleDispatch("AllCase");
    }
    else{
      let data = searchparams.get('prodcat');
     
      if(data=='leather-case'){
        handleMobileCovers(data);
        handleDispatch("LeatherCase");
      }
      else if(data=='hard-case'){
        handleMobileCovers(data);
        handleDispatch("HardCase");
      }
      else if(data=='transparent-case'){
        handleMobileCovers(data);
        handleDispatch("TransparentCase");        
      }
      else{
        handleMobileCovers(data);
        handleDispatch("PhoneCase");    
      }
    }

    const filteredBrand = PHONE_BRAND.find((item)=>{
       return brandName === item.brand;
    })

   const productModel =  filteredBrand.model.find((item)=>{
      return item.key===search
    });
    setMobileModel(productModel.modelName)
    
  },[]);

  

  return (
    <>
      <CoverHeader />
      <div className="container">
        <h2 className="fw-bold fs-8  text-center text-uppercase  my-md-11 mb-md-10 my-8 mb-6">{`${brandName} ${mobileModel} Covers & Cases`}</h2>
      </div>
      <div className="d-flex gap-8 overflow-x-auto d-flex justify-content-md-center pb-md-11 pb-0 mb-sm-0 mb-8">
        <div
          className={`d-flex flex-column gap-6 covertype ${state.allCase}`}
          onClick={() => {
            handleMobileCovers("all");
            handleDispatch("AllCase");
          }}
        >
          <div
            className={`d-flex justify-content-center align-items-center category  bg-indigo fs-4`}
            style={{ width: "80px", height: "80px", borderRadius: "50%" }}
          >
            <span className="text-center text-base fs-22 fw-bold text-white">
              ALL
            </span>
          </div>
          <p className="text-center text-base fs-4 text-dark">All</p>
        </div>
        <CategoryItem
          image={leather_img}
          title="Leather Case"
          handleData={() => {
            handleMobileCovers("leather-case");
            handleDispatch("LeatherCase");
          }}
          Case={state.leatherCase}
        />
        <CategoryItem
          image={hard_img}
          title="Hard Case"
          handleData={() => {
            handleMobileCovers("hard-case");
            handleDispatch("HardCase");
          }}
          Case={state.hardCase}
        />
        <CategoryItem
          image={transparent_img}
          title="Transparent Case"
          handleData={() => {
            handleMobileCovers("transparent-case");
            handleDispatch("TransparentCase");
          }}
          Case={state.transparentCase}
        />
        <CategoryItem
          image={phone_img}
          title="Phone Cases"
          handleData={() => {
            handleMobileCovers("phone-case");
            handleDispatch("PhoneCase");
          }}
          Case={state.phoneCase}
        />
      </div>

      <div className="d-flex justify-content-between  mb-7 align-items-center px-7">
        <Link
          href="/mobile-cases/brand-identifier"
          className="fs-5 text-primary"
        >
          {mobileModel}
        </Link>
        <div 
data-bs-toggle="modal" data-bs-target="#exampleModal"
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

      <div className="w-100 px-7 d-flex">
        <div className={`row leftBox`}>
          <div className="col-xl-12">
            <div className="row gy-4">
              {covers.length == 0 ? (
                <CustomSkeleton />
              ) : (
                covers.map((cover) => {
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
                      parenturl="mobile-covers"
                    />
                  );
                })
              )}
            </div>
          </div>
        </div>
        <div className={`trial-box ${width}`}>
          <ul className="nav filterable-tabs nav-pills mb-3" id="pills-tab" role="tablist">
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
               {FILTER_COLLECTION.map((item)=>{
                return (
                  <div className="col-lg-4 text-center filterTab-panel" key={item.key}>
                    <Image alt="image" src={item.img} className="rounded-circle"/>
                    <p className="fs-2 lh-1 mt-1">{item.title}</p>
                  </div>
                )
               })}
               <h5 className="text-uppercase fs-6 mt-3">Color</h5>
               {FILTER_COLOR.map((item)=>{
                return (
                  <div className="col-lg-4 text-center filterTab-panel cursor"  key={item.key}>
                     <div className={`bg-${item.colorCode} rounded-circle round-60`}></div>
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
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
              tabIndex="0"
            >
             <div className="d-flex flex-column gap-4 mt-4">
               {FILTER_OPTIONS.map((elem)=>{
                return (<Link href='#'  key={elem.key} className="fs-83 text-decoration-none">{elem.title}</Link>)
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
                    <Image alt="image" src={item.img} className="rounded-circle"/>
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

export default MobileCovers;
