"use client"
import SelectedProduct from "@/app/Components/Products/SelectedProduct";
import { useEffect, useState } from "react";
import CustomSkeleton from "@/app/Components/Skeleton/CustomSkeleton";
import { useProduct } from "@/store/CartProvider/CartData";


const MobileCover = ({params}) => {
  const productInfo = useProduct();
  const [ sliderData , setSliderData] = useState([]);
  const handleSlider = () => {
    const data = productInfo.value.filter((elem)=>{
      return (elem.key===params.product);
    });
    setSliderData(data);
  }
    useEffect(()=>{
      handleSlider();
    },[])
  return (
    <>
    <div className="container">
      {sliderData.length===0?<CustomSkeleton/>:<SelectedProduct Id={params.product} data={sliderData[0]}/>}
      </div>
    </>
  );
};


export default MobileCover



