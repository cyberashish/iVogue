"use client";
import React, { useEffect } from "react";
import img1 from "/public/images/homepage/mobile.png";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import { HEADER_SLIDER } from "@/api/Header/header";
import HeroSlider from "./HeroSlider";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Swiper
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
                    animatecls="animate__animated animate__rotateInUpRight"
                  />
                </SwiperSlide>
              );
            })
          : null}
      </Swiper>
    </>
  );
};

export default Banner;
