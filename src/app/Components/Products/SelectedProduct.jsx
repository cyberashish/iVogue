"use client";
import React, { useState, useEffect, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import product_image from "/public/images/homepage/product.png"
import { Icon } from "@iconify/react";
import ThumbProduct from "@/app/Components/Products/Cards/ThumbProduct";
import Link from "next/link";
import ProductPreviewCard from "@/app/Components/Products/Cards/ProductPreviewCard";
import { useRouter } from "next/navigation";
import { useProduct } from "@/store/CartProvider/CartData";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import ProductDetail from "./ProductDetail";

const SelectedProduct = ({data}) => {

  
    const router = useRouter();
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);
    const [prodQuantity,setQuantity] = useState(0);
   
    const productContext = useProduct();

    const handleAddProduct = () => {
        setQuantity(prodQuantity+1);
      }
    const handleDeleteProduct = () => {
        if(prodQuantity>=1){
          setQuantity(prodQuantity-1);
        }
      }

      

      const handleshoppingCart = () => { 

        if(prodQuantity===0){
          toast.error("No Item Added!");
        }
        else{
          const filteredData = productContext.value.map((prod)=>{
            return(prod.key===data.key?{...prod,quantity:prod.quantity+prodQuantity}:prod)
         });
         productContext.setallProducts(filteredData);
         if(productContext.cartvalue.length===0){
           const cartInfo = [...productContext.cartvalue,data.key];
           productContext.setCartData(cartInfo);
         }
         else{
           let filteredInfo = productContext.cartvalue.filter((prod)=>{
             return (prod===data.key)
           });
           if(filteredInfo.length===0){
             const cartInfo = [...productContext.cartvalue,data.key];
           productContext.setCartData(cartInfo)
           }
           else{}
         }
          router.push(`/shop/shopping-cart/`);
        }
      }
  
    useEffect(() => {
      setNav1(sliderRef1);
      setNav2(sliderRef2);
      
    }, []);
    return (
      <>
      <div className=" mt-0">
      <div className="slider-container product-slider">
        <div className="">
        <div className="row ">
          <div className="col-lg-6">
            <Slider className="product-preiview-card"
         responsive={[
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              arrows:false
            }
          }
        ]}
             asNavFor={nav2} dots={true} arrows={true}  ref={(slider) => (sliderRef1 = slider)}>
              <ProductPreviewCard shareIcon="solar:share-outline" heartIcon="ph:heart" image={data.sliderthumbnail} prodInfo = {data} />
               {data.photos.map((prod,index)=>{
                return(  <ProductPreviewCard key={index} shareIcon="solar:share-outline" heartIcon="ph:heart" image={prod} prodInfo = {data} />)
               })}
            </Slider>
          </div>
          <div className="col-lg-6 product-detail-wrapper">
          <SimpleBar className="product-detail">

              <div className="d-flex flex-column justify-content-between gap-lg-4 gap-4 h-100">
              <div>
              <h5 className="fs-6 text-gray-emphasis text-uppercase fw-normal mb-1">{data.title}</h5>
             <h3 className="text-black fw-bold text-uppercase fs-85">{`Legendary Logos Stride 2.0 ${data.mastercat} For ${data.title}`}</h3>
              </div>
             <div className="d-flex gap-lg-10 align-items-center flex-lg-nowrap flex-wrap gap-4">
             <h3 className="text-subtle-dark fw-bold fs-8 mb-0" style={{letterSpacing:"0.5px"}}>{`Rs.${data.discountedPrice}`}</h3>
             <h3 className="text-lightgray-emphasis text-decoration-line-through  fw-bold fs-8 mb-0" style={{letterSpacing:"1px"}} >{data.price}</h3>
             <div className="d-flex flex-column gap-1">
             <div className="d-flex align-items-center ">
                <Icon icon={"ic:baseline-star-rate"} className="fs-8 text-warning" />
                <Icon icon={"ic:baseline-star-rate"} className="fs-8 text-warning" />
                <Icon icon={"ic:baseline-star-rate"} className="fs-8 text-warning" />
                <Icon icon={"ic:baseline-star-rate"} className="fs-8 text-warning" />
                <Icon icon={"ic:baseline-star-half"} className="fs-8 text-warning" />
                <span className="fs-4 ms-2 text-black">4.5</span>
              </div>
              <p className="fs-2 text-gray-emphasis mb-0" style={{letterSpacing:"1px"}}>Reviews (135)</p>
             </div>
             </div>
         
            <div>
          <h4 className="fs-6 text-uppercase text-subtle-dark fw-normal letter" >Collection</h4>
        <Slider
          asNavFor={nav1}
          ref={(slider) => (sliderRef2 = slider)}
          slidesToShow={6}
          swipeToSlide={true}
          focusOnSelect={true}
          arrows={false}
          dots={false}
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 5,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 4,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 3,
              }
            }
          ]}
          className="thumbSlider"
          
        >
          <ThumbProduct image={data.thumbnail}/>
          {data.photos.map((prodImg,index)=>{
            return( <ThumbProduct key={index} image={prodImg}/>)
          })}
        </Slider>
        </div>
          <div>
          <h3 className="text-subtle-dark fw-bold fs-6 half-letter ">Exciting Offers</h3>
        <ul className="list-unstyled ">
          <p className="fs-6 font-graphik-md mb-0 text-dark-emphasis text-capitalize d-flex align-items-center  gap-51"><div className="round-12 bg-subtle-dark"></div>buy any 2 get extra 20 off </p>
          <p className="fs-6 font-graphik font-graphik-md text-dark-emphasis text-capitalize d-flex align-items-center  gap-51"><div className="round-12 bg-subtle-dark"></div>Free Duffle Bag on all orders above Rs.2499 </p>
        </ul>
          </div>
           <div className="d-flex flex-column gap-2">
           <div className="d-flex flex-wrap">
          <div className="d-flex align-items-center justify-content-between gap-md-7 gap-0 product-addition py-6 px-7  border border-subtle-dark border-2 cartbtn " >

          <button className="btn p-0 border-0"><Icon icon="ph:minus-bold" className="text-subtle-dark fs-53 pointer" onClick={handleDeleteProduct} /></button>
           <span className="text-subtle-dark fs-53">{prodQuantity}</span>
           <button className="btn p-0 border-0"><Icon icon="ph:plus-bold" className="text-subtle-dark fs-53 pointer" onClick={handleAddProduct} /></button>
          </div>
          <div className="flex-grow-1">
          <div className="d-md-flex d-none btn btn-primary justify-content-center align-align-items-center product-bag" onClick={handleshoppingCart}>
          <span className="text-white fw-normal fw-semibold letter text-uppercase align-self-center">Add to bag</span>
          </div><ToastContainer />
          </div>
           </div>
           <div className="d-flex justify-content-between align-items-center ">
            <div className="d-flex align-items-center gap-2">
              <Icon icon="iconamoon:gift-thin" className="text-subtle-dark fs-52" />
              <span className="fs-6 text-subtle-dark fw-normal">Make it a gift</span>
            </div>
            <Link href="#" className="fs-4 text-indigo fw-normal">Learn More</Link>
           </div>
           </div>
           <form className='ps-2 border border-light-gray rounded-2 position-relative d-flex align-items-stretch  '>
                <input type="nmber" className="form-control ps-2 py-2 fw-light text-grayvariant fw-normal fs-5 border-0 shadow-none " id="exampleFormControlInput1" placeholder="Enter Pincode To Check Delivery..." />
                <div className="check fw-medium rounded-end text-uppercase">
                Check
                </div>
              </form>
              </div>

              </SimpleBar>
          </div>
        </div>
        </div>
  
      </div>
      </div>
      <ProductDetail/> 
 


      {/* Fixed Add to Bag Button */}
      <div className=" bg-white product-bag bottom-0 end-0">
      <div className="d-flex d-md-none btn btn-primary justify-content-center align-align-items-center py-6" onClick={handleshoppingCart}>
          <span className="text-white fw-normal fs-4 fw-semibold letter text-uppercase align-self-center">Add to bag</span>
          </div>
      </div>
      </>
    );
}

export default SelectedProduct
