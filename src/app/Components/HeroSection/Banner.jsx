"use client";
import React, { useEffect } from "react";
import img1 from "/public/images/homepage/mobile.png";
import Image from "next/image";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import { HEADER_SLIDER } from "@/api/Header/header";
import HeroSlider from "./HeroSlider";
import CustomSkeleton from "../Skeleton/CustomSkeleton";

const Banner = () => {


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };



  const animateCSS = (node, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
  });

  const handleSlideChange = (swiper) => {
   let parent = (swiper.slides[swiper.activeIndex]);
  let node =  parent.querySelector('.trial-slider');
   animateCSS(node, 'rotateInUpRight');
  };
    


  return (
    <>

       {HEADER_SLIDER.length>0?      <Swiper 
       onSlideChange={handleSlideChange}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-navigation-size": "20px",
        }}
        className="mySwiper banner-swiper"
      >
        {HEADER_SLIDER.length > 0
          ? HEADER_SLIDER.map((item) => {
              return (
                <SwiperSlide key={item.key}>
                  <HeroSlider
                    title={item.title}
                    img={item.img}
                  />
                </SwiperSlide>
              );
            })
          : null}
      </Swiper>:<CustomSkeleton/>}
    </>
  );
};

export default Banner;
